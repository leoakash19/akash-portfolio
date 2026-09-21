import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import personal from "../../data/personal";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            Available for Full-Time Roles
          </span>

          <h1>{personal.name}</h1>

          <TypeAnimation
            sequence={[
              "Python Full Stack Developer", 2000,
              "Backend Engineer", 2000,
              "Django Developer", 2000,
              "AWS Cloud Engineer", 2000,
              "REST API Developer", 2000,
              "AI & Cloud Developer", 2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="typing-role"
          />

          <p>{personal.description}</p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-btn"
            >
              View Projects
            </a>

            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-status">

            <div className="status-item">
              <span className="status-label">📍 Location</span>
              <h4>Chennai, India</h4>
            </div>

            <div className="status-item">
              <span className="status-label">💼 Status</span>
              <h4>Open to Full-Time Opportunities</h4>
            </div>

            <div className="status-item">
              <span className="status-label">⚡ Focus</span>
              <h4>Backend • Cloud • AI</h4>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}