const mongoose = require('mongoose');

const containerSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    footprintId: {type: mongoose.Schema.Types.ObjectId, ref: 'Footprint'},
    name: String,
    image: String,
    status: String,
    created_at: { type: Date, default: Date.now },
    service_type: String,
});

const Container = mongoose.model("Container", containerSchema);

module.exports = Container
