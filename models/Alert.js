const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    containerId: { type: mongoose.Schema.Types.ObjectId, ref: "Container" },
    message: String,
    severity: String,
    timestamp: { type: Date, default: Date.now },
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert