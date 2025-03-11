const mongoose = require('mongoose');


const footprintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    total_energy_consumed_kWh: Number,
    carbon_intensity_gCO2e_per_kWh: Number,
    total_carbon_emitted_gCO2e: Number,
    total_energy_saved_compared_to_standard_kWh: Number,
    total_carbon_saved_compared_to_standard_gCO2e: Number,
    footprint_saved_percentage: Number,
      services: [
        {
          serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Container Volume Bucket" },
          name: String,
          energy_consumed_kWh: Number,
          carbon_emitted_gCO2e: Number,
          energy_saved_kWh: Number,
          carbon_saved_gCO2e: Number,
          service_type: String,
    },
  ],
});

const Footprint = mongoose.model("Footprint", footprintSchema);

module.exports = Footprint