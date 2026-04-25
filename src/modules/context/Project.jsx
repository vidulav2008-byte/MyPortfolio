import {Container,Card,CardContent,Typography,Grid} from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function ProjectCard({title,description}) {
  const { darkMode } = useContext(ThemeContext);
  return (
      <Card sx={{maxWidth:600}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body" color="text.secondary">
            {description} 
            Brief description of the project goes here. This included presentation and hackathons too.</Typography>  
        </CardContent>
    </Card>
  );
}
const projects = [
  {
  title: "Presentation on carbon emission",
  description: "due to technologies"
},
{
title:"Dehydration detection System",
description: "a project with the help of machine learning"
},
];

function Project()
{
  return(
    <Container sx={{
        mt: 8,
        minHeight: "100vh",
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}>
      <Grid Container spacing ={4}>
        {projects.map((projects,index)=>(
            <Grid item size={{xs:12,sm:6,md:4}}>
              <ProjectCard title={projects.title} description={projects.description}/>
            </Grid>
        ))
}
      </Grid>
    </Container>
  );
}
export default Project;