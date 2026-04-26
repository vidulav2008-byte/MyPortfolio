import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ProjectCard({ title, description }) {
  return (
    <Card sx={{ maxWidth:"100%",height:"100%"}}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description} 
        </Typography>
      </CardContent>
    </Card>
  );
}

const projects = [
  {
    title: "Presentation on carbon emission",
    description: "Due to technologies"
  },
  {
    title: "Dehydration detection system",
    description: "A project with the help of machine learning"
  }
];

function Project() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container
      sx={{
        mt: 8,
        minHeight: "100vh",
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Project;