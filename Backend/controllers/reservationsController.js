const Reservation = require("../models/reservation");
const Bike = require("../models/bike");
const Location = require("../models/location");

exports.createReservation = async (req, res) => {
  const { userId, bikeId, locationId, startDate, endDate } = req.body;
  try {
    const bike = await Bike.findById(bikeId);
    if (!bike) return res.status(404).send("Bike not found");
    const location = await Location.findById(locationId);
    if (!location) return res.status(404).send("Location not found");

    const reservation = new Reservation({
      userId,
      bikeId,
      locationId,
      startDate,
      endDate,
    });
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.send(reservations);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getReservationById = async (req, res) => {
  const id = req.params.id;
  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) return res.status(404).send("Reservation not found");
    res.send(reservation);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateReservation = async (req, res) => {
  const id = req.params.id;
  const updates = Object.keys(req.body);
  try {
    const reservation = await Reservation.findById(id);
    if (!reservation) return res.status(404).send("Reservation not found");
    updates.forEach((update) => (reservation[update] = req.body[update]));
    await reservation.save();
    res.send(reservation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteReservation = async (req, res) => {
  const id = req.params.id;
  try {
    const reservation = await Reservation.findByIdAndDelete(id);
    if (!reservation) return res.status(404).send("Reservation not found");
    res.send(reservation);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
