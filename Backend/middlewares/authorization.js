const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  const token = req.headers && req.headers.authorization;
  if (!token) {
    if (res) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    return next(new Error("No token, authorization denied"));
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    if (res) {
      return res.status(401).json({ msg: "Token is not valid" });
    }
    return next(err);
  }
};
