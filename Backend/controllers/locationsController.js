const Bike = require("../models/bike");
const Location = require("../models/location");

// Get all locations
exports.getAllLocations = (req, res) => {
  Location.find({})
    .then((locations) => {
      res.json(locations);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get one location
exports.getLocationById = (req, res) => {
  Location.findById(req.params.id)
    .then((location) => {
      if (!location) {
        return res.status(404).json({ error: "Location not found" });
      }
      res.json(location);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Create a new location
exports.createLocation = (req, res) => {
  const newLocation = new Location(req.body);
  newLocation
    .save()
    .then((location) => {
      res.status(201).json(location);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// Update a location
exports.updateLocation = (req, res) => {
  Location.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((location) => {
      if (!location) {
        return res.status(404).json({ error: "Location not found" });
      }
      res.json(location);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Delete a location
exports.deleteLocation = (req, res) => {
  Location.findByIdAndRemove(req.params.id)
    .then((location) => {
      if (!location) {
        return res.status(404).json({ error: "Location not found" });
      }
      Bike.updateMany({ location: location._id }, { $unset: { location: "" } })
        .then(() => {
          res.json({ message: "Location deleted" });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
