import personal from "../../data/personal";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <div className="experience-card">

          <h3>Let's Connect</h3>

          <p>Email</p>

          <a href={`mailto:${personal.email}`}>
            {personal.email}
          </a>

          <br /><br />

          <p>GitHub</p>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
          >
            {personal.github}
          </a>

          <br /><br />

          <p>LinkedIn</p>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {personal.linkedin}
          </a>

        </div>

      </div>
    </section>
  );
}