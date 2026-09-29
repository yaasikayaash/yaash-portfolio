import { Box, Typography, Paper, Button } from "@mui/material";

function Skills() {
  const gifts = [
    {
      name: "Love Gift Box",
      price: "₹799",
      emoji: "🎁",
      description: "A beautiful gift box with flowers and sweet surprises.",
    },
    {
      name: "Birthday Special",
      price: "₹999",
      emoji: "🎂",
      description: "Flowers and gifts specially arranged for birthdays.",
    },
    {
      name: "Flower Hamper",
      price: "₹899",
      emoji: "🧺",
      description: "A lovely hamper filled with flowers and thoughtful gifts.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 7,
        background: "#fff0f5",
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
        Gifts & Hampers 🎁
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
        {gifts.map((gift) => (
          <Paper
            key={gift.name}
            elevation={5}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <Typography sx={{ fontSize: 70 }}>
              {gift.emoji}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#ad1457",
                mb: 1,
              }}
            >
              {gift.name}
            </Typography>

            <Typography sx={{ mb: 2 }}>
              {gift.description}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#c2185b",
                mb: 2,
              }}
            >
              {gift.price}
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                background: "#c2185b",
              }}
            >
              Shop Now
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;