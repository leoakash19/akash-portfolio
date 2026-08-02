import certifications from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">

        <h2 className="section-title">
          Certifications
        </h2>

        <div className="skills-grid">

          {certifications.map((cert) => (

            <div
              className="skill-card"
              key={cert.title}
            >

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

              <span>{cert.year}</span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}