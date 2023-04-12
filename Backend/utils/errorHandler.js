const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      error: err.message,
    });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      error: "Invalid Token",
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      error: "Duplicate Key",
    });
  }

  if (err.message === "User not found") {
    return res.status(404).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    error: "Internal Server Error",
  });
};

module.exports = errorHandler;
