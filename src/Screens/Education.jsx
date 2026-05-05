const education = [
  {
    degree: "B.E — Electronics & Communication Engineering",
    institution: "Knowledge Institute of Technology",
    score: "75%",
    year: "2021 – 2025",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Government Boys Hr Sec School",
    score: "88.6%",
    year: "2021",
  },
  {
    degree: "Secondary Education (SSLC)",
    institution: "SRV Boys Hr Sec School",
    score: "85.4%",
    year: "2019",
  },
];

const certifications = [
  "Java Foundations Certification – Oracle Academy, May 2023",
  "Front-End Web Development (HTML, CSS) – Great Learning",
  "Front-End Web Development (HTML, CSS, JS, Angular) – Capgemini CSR Initiative",
];

const internships = [
  "TC Career Edge: Young Professional — June 2022 to July 2022",
  "Techvoit Software Pvt. Ltd. — Hardware Design, Software Development & Embedded Systems, July 2023",
];

export default function Education() {
  return (
    <section className="page-section">
      <div className="section-label">Education</div>
      <h2 className="section-title">Academic Background</h2>
      <div className="edu-list">
        {education.map((e) => (
          <div className="edu-card" key={e.degree}>
            <div>
              <h3>{e.degree}</h3>
              <p>{e.institution}</p>
              <p className="edu-pct">{e.score}</p>
            </div>
            <span className="edu-year">{e.year}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem" }}>
        <div className="section-label">Certifications</div>
        <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
          Credentials
        </h2>
        <div className="list-cards">
          {certifications.map((c) => (
            <div className="list-item" key={c}>
              {c}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <div className="section-label">Internships</div>
        <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
          Experience
        </h2>
        <div className="list-cards">
          {internships.map((i) => (
            <div className="list-item" key={i}>
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}