import{Container,Typography,Button,TextField,Stack} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Contact() {
  const { darkMode } = useContext(ThemeContext);
  return (
        <Container sx={{
        mt: 8,
        minHeight: "100vh",
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}>
      <Stack spacing={2}>
        <TextField label ="Name" variant="outlined"/>
        <TextField label ="Email" variant="outlined"/>
        <TextField label ="Message" variant="outlined" multiline rows={4}/>
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </Stack>
    </Container>
  );
}

export default Contact;