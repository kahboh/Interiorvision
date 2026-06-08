console.log("STARTING SERVER...");

const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE (optional but useful)
app.get("/", (req, res) => {
  res.send("InteriorVision API is running 🚀");
});

// GET ALL PROJECTS (FROM POSTGRESQL)
app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});