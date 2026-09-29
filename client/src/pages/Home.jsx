import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
          "linear-gradient(135deg, #fff0f5, #ffe4ec, #fce4ec)",
      }}
    >
      <Box sx={{ maxWidth: 800 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "#c2185b",
            mb: 2,
          }}
        >
          Yaash Bloom 🌸
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: "#6a1b4d",
            mb: 3,
          }}
        >
          Flowers that make every moment beautiful
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#555",
            mb: 4,
            lineHeight: 1.7,
          }}
        >
          Fresh flowers, beautiful bouquets and thoughtful gifts
          for every special occasion.
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/flowers"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 4,
            background:
              "linear-gradient(90deg, #c2185b, #e91e63)",
          }}
        >
          Explore Flowers
        </Button>
      </Box>
    </Box>
  );
}

export default Home;