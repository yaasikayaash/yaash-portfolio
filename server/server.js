const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    app.get("/api/projects", (req, res) => {
  res.json([
    {
      title: "Portfolio Website",
      description: "React, React Router and Material UI portfolio.",
    },
    {
      title: "Full-Stack Web Application",
      description: "React, Node.js, Express.js and MongoDB application.",
    },
    {
      title: "REST API Project",
      description: "REST API built with Node.js and Express.js.",
    },
  ]);
});
  res.json({
    message: "Yaash Portfolio Backend is running!",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});