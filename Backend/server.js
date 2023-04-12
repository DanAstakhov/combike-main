const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const errorHandler = require("./utils/errorHandler");

dotenv.config();

const app = express();

app.use(cors());
// Routes
const locationsRouter = require("./routes/locations");
app.use("/locations", locationsRouter);
const bikesRouter = require("./routes/bikes");
// app.use('/bikes', bikesRouter);
const usersRouter = require("./routes/users");
// app.use('/users', usersRouter);
const reservationsRouter = require("./routes/reservations");
// app.use('/reservations', reservationsRouter);

// Connect to MongoDB
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.use(express.json());

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
