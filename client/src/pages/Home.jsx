import { Box, Button, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        background:
          "linear-gradient(135deg, #f3e7ff 0%, #e3f2fd 50%, #ffe4f1 100%)",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "#7b1fa2",
            fontWeight: "bold",
            letterSpacing: 2,
            mb: 2,
          }}
        >
          HELLO, I'M
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            mb: 1,
            background:
              "linear-gradient(90deg, #7b1fa2, #1976d2, #e91e63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Yaash
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: "#303f9f",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Full-Stack Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: "auto",
            mb: 4,
            color: "#444",
          }}
        >
          I build clean, responsive and user-friendly web
          applications using modern technologies.
        </Typography>

        <Button
          variant="contained"
          href="/projects"
          sx={{
            mr: 2,
            px: 3,
            py: 1.2,
            borderRadius: 3,
            background:
              "linear-gradient(90deg, #7b1fa2, #1976d2)",
          }}
        >
          View Projects
        </Button>

        <Button
          variant="contained"
          href="/contact"
          sx={{
            px: 3,
            py: 1.2,
            borderRadius: 3,
            background:
              "linear-gradient(90deg, #e91e63, #ff6f61)",
          }}
        >
          Contact Me
        </Button>

        <Typography
          variant="body2"
          sx={{
            mt: 5,
            color: "#6a1b9a",
            fontWeight: "bold",
          }}
        >
          HTML • CSS • JavaScript • React • Node.js • MongoDB
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;