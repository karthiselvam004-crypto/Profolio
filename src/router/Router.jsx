import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Screens/Home";
import About from "../Screens/About";
import Skills from "../Screens/Skills";
import Projects from "../Screens/Projects";
import Education from "../Screens/Education";
import Contact from "../Screens/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}