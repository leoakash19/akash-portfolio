import { motion } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <h2 className="section-title">
          Tech Stack
        </h2>

        <div className="skills-grid">

          {skills.map((group, index) => (

            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
            >

              <h3>{group.category}</h3>

              <div className="skill-tags">

                {group.items.map((skill, i) => (

                  <span key={i}>
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}