import { Link } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useContext} from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {Container } from "@mui/material";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Container 
      maxWidth="lg"
      sx={{
        background: darkMode ? "rgb(17, 17, 17)" : "#eee",
        color: darkMode ? "#ffffff" : "rgb(17, 17, 17)",
        py: 2}}>
       <nav>
       <h2>MyPortfolio</h2>
       <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/project" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
       </div>
       <button onClick={toggleTheme} style={{ cursor: "pointer" }}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </nav>
    </Container>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "rgb(255, 255, 255)",
  },
  link: {
    margin: "10px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;