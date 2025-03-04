/* const mongoose = require('mongoose');

const volumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    bucketId: { type: mongoose.Schema.Types.ObjectId, ref: "Bucket" },
    containerId: { type: mongoose.Schema.Types.ObjectId, ref: "Container" },
    name: String,
    size_gb: Number,
    attached_to: String,
    created_at: { type: Date, default: Date.now },
});

const Volume = mongoose.model("Volume", volumeSchema);

module.exports = Volume*/

const mongoose = require('mongoose');

const volumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    containerId: { type: mongoose.Schema.Types.ObjectId, ref: "Container" }, // Si c'est utilisé par une VM
    name: { type: String, required: true },
    size_gb: { type: Number, required: true }, // Capacité totale du volume
    used_gb: { type: Number, default: 0 }, // Espace actuellement utilisé
    attached_to: { type: String }, // VM ou service auquel il est attaché
    created_at: { type: Date, default: Date.now }
}, { timestamps: true });

// Ajout d'un champ virtuel pour le pourcentage d'utilisation du volume
volumeSchema.virtual('percentage_used').get(function () {
    if (!this.size_gb || this.size_gb === 0) return 0;
    return (this.used_gb / this.size_gb) * 100;
});

const Volume = mongoose.model("Volume", volumeSchema);

module.exports = Volume