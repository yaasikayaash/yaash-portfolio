import { Box, Typography, Paper, Button } from "@mui/material";

function Contact() {
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
            background:
              "linear-gradient(90deg, #7b1fa2, #1976d2, #e91e63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#7b1fa2", mb: 2 }}>
            Let's Connect
          </Typography>

          <Typography sx={{ mb: 3 }}>
            I'd love to hear from you! Feel free to get in touch for projects,
            collaborations or opportunities.
          </Typography>

          <Typography variant="h6">📧 Email</Typography>
          <Typography sx={{ mb: 2 }}>yaasikayaasika170@gmail.com</Typography>

          <Typography variant="h6">💻 GitHub</Typography>
          <Typography sx={{ mb: 2 }}>github.com/yaasikayaash</Typography>

          <Typography variant="h6">📍 Location</Typography>
          <Typography sx={{ mb: 3 }}>Thanjavur, Tamil Nadu</Typography>

          <Button
            variant="contained"
            href="mailto:yaasikayaasika170@gmail.com"
            sx={{
              borderRadius: 3,
              background: "linear-gradient(90deg, #e91e63, #7b1fa2)",
            }}
          >
            Send Email
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default Contact;