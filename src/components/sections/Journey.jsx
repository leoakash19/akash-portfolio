import journey from "../../data/journey";

export default function Journey() {
  return (
    <section id="journey">

      <div className="container">

        <h2 className="section-title">
          Engineering Journey
        </h2>

        <div className="timeline">

          {journey.map((item) => (

            <div
              className="timeline-item"
              key={item.year}
            >

              <div className="timeline-year">

                {item.year}

              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}