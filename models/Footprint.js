const mongoose = require('mongoose');


const footprintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    total_energy_consumed_kWh: Number,
    carbon_intensity_gCO2e_per_kWh: Number,
    total_carbon_emitted_gCO2e: Number,
      services: [
        {
          containerId: { type: mongoose.Schema.Types.ObjectId, ref: "Container" },
          name: String,
          energy_consumed_kWh: Number,
          carbon_emitted_gCO2e: Number,
    },
  ],
});

const Footprint = mongoose.model("Footprint", footprintSchema);

module.exports = Footprint