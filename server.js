const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Enable credentials (if needed)
  })
);

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
