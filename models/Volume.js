const mongoose = require('mongoose');

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

module.exports = Volume