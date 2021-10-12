const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();
require("colors");

// Create app
const app = express();

// Middleware
app.use(express.json({ extended: false }));

// Connect to DB
connectDB();

// Routes
app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/contacts", require("./routes/contacts"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder

  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}`.yellow.bold)
);
