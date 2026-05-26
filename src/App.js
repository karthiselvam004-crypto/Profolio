import "./App.css";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Experience from "./Screens/Experience";
import Footer from "./Screens/Footer";
import Navbar from "./Screens/Navbar";
import Profile from "./Screens/Profile";
import Projects from "./Screens/Projects";
import ScrollToTopButton from "./Screens/ScrollToTop";
import Skills from "./Screens/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;