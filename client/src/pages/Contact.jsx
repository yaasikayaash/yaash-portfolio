import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received. 🌸");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 7,
        background: "#fff0f5",
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#c2185b",
            mb: 5,
          }}
        >
          Contact Yaash Bloom 💌
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 4,
          }}
        >
          {/* Shop Details */}
          <Paper
            elevation={5}
            sx={{
              p: 4,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#ad1457",
                mb: 3,
              }}
            >
              Visit Our Shop 🌸
            </Typography>

            <Typography sx={{ mb: 2 }}>
              📍 <b>Location:</b> Thanjavur, Tamil Nadu
            </Typography>

            <Typography sx={{ mb: 2 }}>
              📞 <b>Phone:</b> +91 XXXXX XXXXX
            </Typography>

            <Typography sx={{ mb: 2 }}>
              ✉️ <b>Email:</b> yaashbloom@gmail.com
            </Typography>

            <Typography sx={{ mb: 2 }}>
              🕐 <b>Opening Hours:</b> 9:00 AM – 8:00 PM
            </Typography>

            <Typography
              sx={{
                mt: 3,
                lineHeight: 1.7,
                color: "#555",
              }}
            >
              Fresh flowers, beautiful bouquets and thoughtful
              gifts for every special occasion.
            </Typography>
          </Paper>

          {/* Contact Form */}
          <Paper
            elevation={5}
            sx={{
              p: 4,
              borderRadius: 5,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#ad1457",
                mb: 3,
              }}
            >
              Send Us a Message 💗
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <TextField
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />

              <TextField
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />

              <TextField
                label="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                multiline
                rows={4}
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  py: 1.5,
                  borderRadius: 3,
                  background: "#c2185b",
                }}
              >
                Send Message 🌷
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;