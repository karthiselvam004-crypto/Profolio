import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

import "../App.css";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;