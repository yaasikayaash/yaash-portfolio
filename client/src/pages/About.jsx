import { Box, Typography, Paper } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: { xs: 2, md: 5 },
        py: 7,
        background: "linear-gradient(135deg, #fff5f8, #ffe4ec)",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#c2185b",
            mb: 1,
          }}
        >
          About Yaash Bloom 🌸
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#777",
            fontSize: 18,
            mb: 5,
          }}
        >
          Bringing beauty, happiness and love through flowers
        </Typography>

        {/* Who We Are */}
        <Paper
          elevation={5}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            mb: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#ad1457",
              mb: 2,
            }}
          >
            Who We Are 💗
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
            flowers, elegant bouquets and thoughtful gifts for
            birthdays, celebrations and memorable occasions.
          </Typography>
        </Paper>

        {/* What We Offer */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#c2185b",
            mb: 3,
          }}
        >
          What We Offer 🌷
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            mb: 5,
          }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <Typography sx={{ fontSize: 55 }}>🌹</Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#ad1457", mb: 1 }}
            >
              Fresh Flowers
            </Typography>

            <Typography sx={{ color: "#666", lineHeight: 1.6 }}>
              Beautiful and fresh flowers for every special moment.
            </Typography>
          </Paper>

          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <Typography sx={{ fontSize: 55 }}>💐</Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#ad1457", mb: 1 }}
            >
              Custom Bouquets
            </Typography>

            <Typography sx={{ color: "#666", lineHeight: 1.6 }}>
              Elegant bouquets carefully arranged with love and care.
            </Typography>
          </Paper>

          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <Typography sx={{ fontSize: 55 }}>🎁</Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#ad1457", mb: 1 }}
            >
              Special Gifts
            </Typography>

            <Typography sx={{ color: "#666", lineHeight: 1.6 }}>
              Thoughtful gifts and hampers for your loved ones.
            </Typography>
          </Paper>
        </Box>

        {/* Mission */}
        <Paper
          elevation={5}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            textAlign: "center",
            background: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#c2185b",
              mb: 2,
            }}
          >
            Our Mission ✨
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            Our mission is to make gifting simple, beautiful and
            meaningful. At Yaash Bloom, every flower is chosen and
            every bouquet is created to bring a little more happiness
            to someone's special day.
          </Typography>
        </Paper>

      </Box>
    </Box>
  );
}

export default About;