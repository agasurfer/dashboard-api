const mongoose = require('mongoose');

const volumeSchema = new mongoose.Schema({
  name: String,
  size_gb: Number,
  attached_to: String,
  created_at: Date,
});

const Volume = mongoose.model("Volume", volumeSchema);

module.export = Volume