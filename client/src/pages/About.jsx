import { Box, Typography, Paper } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 8,
        background:
          "linear-gradient(135deg, #fff0f6 0%, #f3e7ff 50%, #e3f2fd 100%)",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            background:
              "linear-gradient(90deg, #e91e63, #7b1fa2, #1976d2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </Typography>

        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 5,
            border: "2px solid #ead7ff",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#7b1fa2",
              mb: 2,
            }}
          >
            Hi, I'm Yaash 👋
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, color: "#444" }}>
            I'm a B.Tech Biotechnology student interested in
            Full-Stack Web Development.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, color: "#444" }}>
            I am learning modern web technologies and building
            responsive and user-friendly applications.
          </Typography>

          <Typography variant="body1" sx={{ color: "#444" }}>
            My goal is to develop practical projects using
            React, Node.js, Express.js and MongoDB.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default About;