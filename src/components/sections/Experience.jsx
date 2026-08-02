import experience from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience">

      <div className="container">

        <h2 className="section-title">
          Experience
        </h2>

        {experience.experience.map((item) => (

          <div
            className="experience-card"
            key={item.title}
          >

            <h3>{item.title}</h3>

            <h4>{item.company}</h4>

            <span>{item.duration}</span>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}