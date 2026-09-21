import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import projects from "../../data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`featured-project ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">

              {project.featuredText && (
                <span className="featured-badge">
                  <Star size={16} />
                  {project.featuredText}
                </span>
              )}

              <h3>{project.title}</h3>

              <h4>{project.subtitle}</h4>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-footer">

                <div className="project-status">
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>

                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>

              </div>

            </div>

          </motion.div>
        ))}

        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: "120px" }}
        >
          More Projects
        </motion.h2>

        <div className="projects-grid">

          {otherProjects.map((project) => (

            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -8 }}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="card-content">

                <h3>{project.title}</h3>

                <p>{project.subtitle}</p>

                <div className="tech-stack">
                  {project.technologies
                    .slice(0, 3)
                    .map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}