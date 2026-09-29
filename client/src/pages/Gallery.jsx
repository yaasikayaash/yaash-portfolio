import { Box, Typography, Paper } from "@mui/material";

function Gallery() {
  const flowers = [
    {
      name: "Red Glow Bouquet",
      image: "/images/red-glow-bouquet.jpg",
    },
    {
      name: "Colorful Flowers",
      image: "/images/colorful-flowers.jpg",
    },
    {
      name: "Floral Arrangements",
      image: "/images/floral-arrangements.jpg",
    },
    {
      name: "Blue Bouquet",
      image: "/images/blue-bouquet.jpg",
    },
    {
      name: "Pink Tulip",
      image: "/images/pink-tulip.jpg",
    },
    {
      name: "Pink Rose",
      image: "/images/pink-rose.jpg",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: { xs: 2, md: 4 },
        py: 7,
        background: "linear-gradient(135deg, #fff5f8, #ffeaf1)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#c2185b",
            mb: 1,
          }}
        >
          Our Gallery 🌸
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#777",
            mb: 5,
            fontSize: 18,
          }}
        >
          Beautiful flowers and bouquets from Yaash Bloom
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
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
                overflow: "hidden",
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 10,
                },
              }}
            >
              <Box
                component="img"
                src={flower.image}
                alt={flower.name}
                sx={{
                  width: "100%",
                  height: 360,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <Box sx={{ p: 2.5, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#ad1457",
                  }}
                >
                  {flower.name}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Gallery;