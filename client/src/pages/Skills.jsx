import { Box, Typography, Paper } from "@mui/material";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: "HTML, CSS, JavaScript, React.js",
      color: "#7b1fa2",
    },
    {
      title: "React & UI",
      items: "React Router, Material UI, DOM Manipulation",
      color: "#1976d2",
    },
    {
      title: "Backend",
      items: "Node.js, Express.js, REST APIs, Middleware & Routing",
      color: "#00897b",
    },
    {
      title: "Database & Security",
      items: "MongoDB, Schema Design, Bcrypt, JWT Authentication",
      color: "#e91e63",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 8,
        background:
          "linear-gradient(135deg, #e3f2fd 0%, #f3e7ff 50%, #fff0f6 100%)",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
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
          My Skills
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {skills.map((skill) => (
            <Paper
              key={skill.title}
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                borderTop: `6px solid ${skill.color}`,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: skill.color,
                  mb: 2,
                }}
              >
                {skill.title}
              </Typography>

              <Typography variant="body1" sx={{ color: "#444" }}>
                {skill.items}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;