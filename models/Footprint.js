const mongoose = require('mongoose');

const footprintSchema = new mongoose.Schema({
  total_energy_consumed_kWh: Number,
  carbon_intensity_gCO2e_per_kWh: Number,
  total_carbon_emitted_gCO2e: Number,
  services: [
    {
      name: String,
      energy_consumed_kWh: Number,
      carbon_emitted_gCO2e: Number,
    },
  ],
});

const Footprint = mongoose.model("Footprint", footprintSchema);

module.export = Footprint