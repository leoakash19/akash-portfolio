import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="container navbar-container">

        <a href="#hero" className="logo">
          AKASH S
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Tech Stack
          </a>

          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#journey"
            className={active === "journey" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Journey
          </a>

          <a
            href="#education"
            className={active === "education" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>

          <a
            href="#certifications"
            className={active === "certifications" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Certifications
          </a>

          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </nav>

        <a
          href="/Akash-resume(IT).pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

    </header>
  );
}