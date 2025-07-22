const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routers
app.use("/api/auth", require("./routes/auth"));
app.use("/api/logs", require("./routes/logs"));

// Health check route
app.get("/", (req, res) => res.send("Backend running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend on port ${PORT}`));
