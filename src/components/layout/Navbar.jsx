import personal from "../../data/personal";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="container navbar-container">

        <a href="#hero" className="logo">
          {personal.name}
        </a>

        <ul className="nav-links">

          <li><a href="#about">About</a></li>

          <li><a href="#journey">Journey</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#contact">Contact</a></li>

          <li><a href="#education">Education</a></li>

          <li><a href="#certifications">Certifications</a></li>

        </ul>

        <a
          href={personal.resume}
          download
          className="resume-btn"
        >
          Resume
        </a>

      </div>

    </nav>
  );
}
