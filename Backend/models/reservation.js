const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  Location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  Bike: {
    type: Schema.Types.ObjectId,
    ref: "Bike",
    required: true,
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  FromDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("Reservation", ReservationSchema);
