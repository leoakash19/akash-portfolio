import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import profile from "../../assets/images/profile.png";
import personal from "../../data/personal";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-greeting">
            👋 Hello, I'm
          </p>

          <h1>{personal.name}</h1>

          <h2>{personal.role}</h2>

          <h3>{personal.subtitle}</h3>

          <p>
            {personal.description}
          </p>

          <div className="hero-buttons">

            <a
              href={personal.resume}
              download
              className="primary-btn"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="secondary-btn"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={profile}
            alt={personal.name}
          />

        </motion.div>

      </div>

    </section>
  );
}