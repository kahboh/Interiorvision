console.log("STARTING SERVER...");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    style: "Modern"
  },
  {
    id: 2,
    title: "Luxury Bedroom",
    style: "Contemporary"
  }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});