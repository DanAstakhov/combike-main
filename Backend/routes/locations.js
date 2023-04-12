const express = require("express");
const router = express.Router();
const Location = require("../models/location.js");

// Get all locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Get one location
router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new location
router.post("/", async (req, res) => {
  const { id, status, address, slots, latitude, longitude, bikes } = req.body;
  const location = new Location({
    id,
    status,
    address,
    slots,
    latitude,
    longitude,
    bikes,
  });
  try {
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a location
router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "status",
    "address",
    "slots",
    "latitude",
    "longitude",
    "bikes",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).json({ error: "Invalid updates!" });
  }
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }
    updates.forEach((update) => (location[update] = req.body[update]));
    await location.save();
    res.json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a location
router.delete("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: "Location not found" });
    }
    await location.remove();
    res.json({ message: "Location deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
