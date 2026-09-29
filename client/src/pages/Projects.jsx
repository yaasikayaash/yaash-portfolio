import { Box, Typography, Paper, Button } from "@mui/material";

function Projects() {
  const flowers = [
    {
      name: "Rose Bouquet",
      price: "₹499",
      emoji: "🌹",
      description: "Beautiful fresh roses arranged with love.",
    },
    {
      name: "Lily Bouquet",
      price: "₹599",
      emoji: "🌷",
      description: "Elegant lilies for every special moment.",
    },
    {
      name: "Mixed Flower Bouquet",
      price: "₹699",
      emoji: "💐",
      description: "A colourful mix of fresh seasonal flowers.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 7,
        background: "#fff5f8",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#c2185b",
          mb: 5,
        }}
      >
        Our Flowers 🌷
      </Typography>

      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {flowers.map((flower) => (
          <Paper
            key={flower.name}
            elevation={5}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <Typography sx={{ fontSize: 70 }}>
              {flower.emoji}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#ad1457",
                mb: 1,
              }}
            >
              {flower.name}
            </Typography>

            <Typography sx={{ mb: 2 }}>
              {flower.description}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#c2185b",
                mb: 2,
              }}
            >
              {flower.price}
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                background: "#c2185b",
              }}
            >
              Order Now
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;