const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Yaash Portfolio Backend is running!",
  });
});

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

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Message received successfully!",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

setInterval(() => {}, 1000);