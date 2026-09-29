import { Box, Typography, Paper } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 7,
        background: "#fff5f8",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#c2185b",
            mb: 4,
          }}
        >
          About Yaash Bloom 🌸
        </Typography>

        <Paper
          elevation={4}
          sx={{
            p: 5,
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#ad1457",
              mb: 2,
            }}
          >
            Bringing Happiness Through Flowers
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            Yaash Bloom is a flower and gift shop created to make
            every special moment more beautiful. We offer fresh
            flowers, beautiful bouquets and thoughtful gifts for
            birthdays, celebrations and memorable occasions.
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "#555",
              mt: 3,
            }}
          >
            Our goal is to make gifting simple, beautiful and
            meaningful with carefully selected flowers and gifts.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default About;