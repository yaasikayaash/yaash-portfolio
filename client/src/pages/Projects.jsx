import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper } from "@mui/material";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "90vh",
        px: 3,
        py: 8,
        background:
          "linear-gradient(135deg, #fff0f6, #e3f2fd, #f3e7ff)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 5,
          textAlign: "center",
          color: "#7b1fa2",
        }}
      >
        My Projects
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
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <Paper
            key={project.title}
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              borderTop: "6px solid #e91e63",
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
              {project.title}
            </Typography>

            <Typography>
              {project.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;