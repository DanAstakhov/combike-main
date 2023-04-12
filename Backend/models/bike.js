const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({
  Location: {
    type: mongoose.Schema.Types.ObjectId, // changed "Schema" to "mongoose.Schema"
    ref: "Location",
  },
  Available: {
    type: Boolean, // FIX: Change bool to Boolean
    required: true,
  },
  Functioning: {
    type: Boolean, // FIX: Change bool to Boolean
    required: true,
  },
});
module.exports = mongoose.model('Bike', BikeSchema);