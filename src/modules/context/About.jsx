import {Container,Typography,Button} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function About() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
    <Container  maxWidth="md"
      sx={{
        mt: 8,
        minHeight: "100vh",
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
        <Typography variant="h3">About Me</Typography>
        <Typography variant="h4">
          I'm Vidula currently pursuing my b.tech degree in Chemical Engineering at Coimbatore Institute of Technology.
          I'm interested in learning new things that too in this technology world.
        </Typography>
        <Button variant="contained" color="primary" href="/project">
                 view my projects</Button>
      </Container>
    </>
  );
}

export default About;