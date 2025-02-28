const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  message: String,
  severity: String,
  timestamp: Date,
});

const Alert = mongoose.model("Alert", alertSchema);

module.export = Alert