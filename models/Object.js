const mongoose = require('mongoose');

const objectSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    bucketId: { type: mongoose.Schema.Types.ObjectId, ref: "Bucket", required: true },
    name: { type: String, required: true },
    size_gb: { type: Number, required: true }, // Taille du fichier en GB
    created_at: { type: Date, default: Date.now }
}, { timestamps: true });

const ObjectModel = mongoose.model("Object", objectSchema);

module.exports = ObjectModel;