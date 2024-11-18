function Experience() {
  const experiences = [
    {
      role: "Web Developer",
      company: "Triveni Group",
      duration: "Jan 2022 - August 2022",
      description:
        "Developed responsive web applications using php, html, css, jquery and ajax with javascript interactive programming language. ",
    },
  ];

  return (
    <section id="experience" className="container my-5">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content shadow-sm p-3 rounded">
              <h5 className="mb-1">{experience.role}</h5>
              <h6 className="text-muted mb-2">{experience.company}</h6>
              <p className="text-primary">{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
