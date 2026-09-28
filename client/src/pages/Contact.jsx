import { useState } from "react";
import axios from "axios";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        {
          name,
          email,
          message,
        }
      );

      alert(response.data.message);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 8,
        background:
          "linear-gradient(135deg, #e3f2fd, #f3e7ff, #fff0f6)",
      }}
    >
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 5,
            textAlign: "center",
            color: "#7b1fa2",
          }}
        >
          Contact Me
        </Typography>

        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 5,
            borderTop: "6px solid #e91e63",
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, color: "#7b1fa2" }}>
            Let's Connect
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
              required
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              required
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ mb: 3 }}
              required
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: 3,
                background:
                  "linear-gradient(90deg, #e91e63, #7b1fa2)",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Contact;