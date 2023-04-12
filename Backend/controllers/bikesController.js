const Bike = require("../models/bike");

// Get all bikes
exports.getAllBikes = async (req, res, next) => {
  try {
    const bikes = await Bike.find({});
    res.status(200).json({
      status: "success",
      results: bikes.length,
      data: {
        bikes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Get bike by ID
exports.getBike = async (req, res, next) => {
  try {
    const bike = await Bike.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        bike,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Add a new bike
exports.createBike = async (req, res, next) => {
  try {
    const newBike = await Bike.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        bike: newBike,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update bike
exports.updateBike = async (req, res, next) => {
  try {
    const bike = await Bike.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        bike,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete bike
exports.deleteBike = async (req, res, next) => {
  try {
    await Bike.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
