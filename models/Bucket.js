/* const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    volumes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Volume" }],
    name: String,
    created_at: { type: Date, default: Date.now },
});

const Bucket = mongoose.model("Bucket", bucketSchema);

module.exports = Bucket */

const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, unique: true },
    objects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Object" }], // Liste des objets stockés
    max_capacity_gb: { type: Number, required: true }, // Capacité maximale du bucket
    created_at: { type: Date, default: Date.now }
}, { timestamps: true });

// Ajout d'un champ virtuel pour le pourcentage d'utilisation de l'espace
bucketSchema.virtual('percentage_used').get(function () {
    if (!this.max_capacity_gb || this.max_capacity_gb === 0) return 0; // Évite la division par zéro
    return (this.current_usage_gb / this.max_capacity_gb) * 100;
});

const Bucket = mongoose.model("Bucket", bucketSchema);

module.exports = Bucket;