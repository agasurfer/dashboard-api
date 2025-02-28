const mongoose = require('mongoose');

const containerSchema = new mongoose.Schema({
  name: String,
  image: String,
  status: String,
  created_at: Date,
});
const Container = mongoose.model("Container", containerSchema);

module.export = Container
