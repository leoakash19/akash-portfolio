import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import DeveloperConsole from "./components/sections/DeveloperConsole";
import Journey from "./components/sections/Journey";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <DeveloperConsole />
      <About />

      <Skills />

      <Projects />

      <Journey />

      <Experience />

      <Education />

      <Certifications />

      <Contact />

      <Footer />
    </>
  );
}