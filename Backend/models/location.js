const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bikes: {
    type: Number,
    required: true,
  },
  slots: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
