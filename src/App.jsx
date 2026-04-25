import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/Navbar";
import ThemeProvider from "./modules/context/ThemeContext";
import Home from "./modules/context/Home";
import About from "./modules/context/About";
import Project from "./modules/context/Project";
import Contact from "./modules/context/Contact";

function App() {
  return (
  <ThemeProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
   </ThemeProvider> 
  );
}

export default App;