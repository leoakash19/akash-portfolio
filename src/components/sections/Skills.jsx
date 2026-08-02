import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              className="skill-card"
              key={skill.category}
            >

              <h3>{skill.category}</h3>

              <div className="skill-tags">

                {skill.items.map((item) => (

                  <span
                    className="skill-tag"
                    key={item}
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}