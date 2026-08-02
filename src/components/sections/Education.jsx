import experience from "../../data/experience";

export default function Education() {
  return (
    <section id="education">

      <div className="container">

        <h2 className="section-title">
          Education
        </h2>

        {experience.education.map((item) => (

          <div
            className="experience-card"
            key={item.degree}
          >

            <h3>{item.degree}</h3>

            <h4>{item.college}</h4>

            <span>{item.duration}</span>

            <p>{item.cgpa}</p>

          </div>

        ))}

      </div>

    </section>
  );
}