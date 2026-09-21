import { motion } from "framer-motion";
import about from "../../data/about";

export default function About() {
  return (
    <section id="about">

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          {about.title}
        </motion.h2>

        <div className="about-grid">

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3>
              Backend Engineer
            </h3>

            <p>
              {about.summary}
            </p>

            <div className="highlight-container">

              {about.highlights.map((item, index) => (

                <span
                  key={index}
                  className="highlight"
                >
                  {item}
                </span>

              ))}

            </div>

          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            {about.stats.map((item, index) => (

              <div
                key={index}
                className="stat-card"
              >

                <h2>
                  {item.number}
                </h2>

                <p>
                  {item.title}
                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}