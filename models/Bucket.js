const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    volumes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Volume" }],
    name: String,
    created_at: { type: Date, default: Date.now },
});

const Bucket = mongoose.model("Bucket", bucketSchema);

module.exports = Bucket