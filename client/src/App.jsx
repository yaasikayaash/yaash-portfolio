import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #c2185b, #e91e63, #ad1457)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", flexGrow: 1 }}
          >
            Yaash Bloom 🌸
          </Typography>

          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            <Button color="inherit" component={Link} to="/flowers">
              Flowers
            </Button>

            <Button color="inherit" component={Link} to="/gifts">
              Gifts
            </Button>

            <Button color="inherit" component={Link} to="/about">
              About
            </Button>

            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowers" element={<Projects />} />
        <Route path="/gifts" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;