import {Container,Typography,Button,Stack} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Home() {
  const { darkMode } = useContext(ThemeContext);
  return (
   
    <Container  maxWidth="md"
      sx={{
        textAlign: "center",
        mt: 8,
        minHeight: "100vh",
        backgroundColor: darkMode ? "#000000" : "#fff",
        color: darkMode ? "#ffffff" : "#000",
      }}
    >
    <Stack spacing={2} sx={{alignItems:"center"}}>
       <Typography variant="h2">Hi,I'M VIDULA </Typography>
       <Typography variant="h4">
           Student at CIT|Chemical Engineering|Data Analyst|MERN Stack|
       </Typography>
         <Typography variant="h5" sx={{maxWidth: 600}}>
          I'm a passinate student and actively interested in learning new things.
       </Typography>
       <Button variant="contained" color="primary" href="/about">
        learn more </Button>
        <Button variant="contained" color="primary" href="/project">
         view my projects</Button>
      </Stack>
    </Container>
 
  );
}
export default Home;