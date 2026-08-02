import projects from "../../data/projects";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">

                <h2 className="section-title">
                    Featured Projects
                </h2>

                <div className="projects-grid">

                    {projects.map((project) => (

                        <div
                            className="project-card"
                            key={project.title}
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />

                            <div className="project-content">

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <div className="project-tags">

                                    {project.technologies.map((tech) => (

                                        <span
                                            className="project-tag"
                                            key={tech}
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                <div className="project-buttons">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}