const mongoose = require('mongoose');

const bucketSchema = new mongoose.Schema({
  name: String,
  created_at: Date,
});

const Bucket = mongoose.model("Bucket", bucketSchema);

module.export = Bucket