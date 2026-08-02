import about from "../../data/about";

export default function About() {
  return (
    <section id="about">

      <div className="container">

        <h2 className="section-title">
          {about.title}
        </h2>

        <div className="about-container">

          <div className="about-text">

            <p className="about-intro">
              {about.intro}
            </p>

            <p>
              {about.description}
            </p>

            <p>
              {about.objective}
            </p>

          </div>

          <div className="about-highlights">

            {about.highlights.map((item) => (

              <div
                className="highlight-card"
                key={item}
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}