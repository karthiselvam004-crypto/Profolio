const projects = [
  {
    icon: "🌦",
    title: "Weather App",
    desc: "A web application that provides real-time weather information for any city worldwide.",
    stack: ["HTML", "JavaScript", "CSS", "Bootstrap"],
    link: "https://github.com/Karthis7/Weather-app",
    featured: false,
  },
  {
    icon: "🕐",
    title: "Digital Clock",
    desc: "A dynamic digital clock that displays current time using the Date object with a clean, styled interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Karthis7/Digital-Clock",
    featured: false,
  },
  {
    icon: "🧮",
    title: "Web Calculator",
    desc: "A calculator with arithmetic operations (add, subtract, multiply, divide) and a user-friendly dynamic interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Karthis7/Calculator",
    featured: false,
  },
  {
    icon: "📋",
    title: "Dynamic Form Builder with Approver Workflow",
    desc: "A Zoho-style form builder where users can create forms with dynamic fields at runtime. Built-in multi-step approver workflow — each approver digitally signs the form, and the submission is processed only after all approvals are completed.",
    stack: ["Java", "React.js", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "⚡ Dynamic field creation",
      "✍️ Digital signature by approvers",
      "🔄 Multi-step approval workflow",
    ],
    link: null,
    featured: true,
  },
];

export default function Projects() {
  return (
    <section className="page-section">
      <div className="section-label">Projects</div>
      <h2 className="section-title">What I've Built</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div
            className={`project-card${p.featured ? " featured-project" : ""}`}
            key={p.title}
          >
            {p.featured && <div className="project-badge">Featured</div>}
            <div className="project-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.highlights && (
              <div className="project-highlights">
                {p.highlights.map((h) => (
                  <div className="highlight-item" key={h}>
                    {h}
                  </div>
                ))}
              </div>
            )}
            <div className="project-stack" style={{ marginTop: "1rem" }}>
              {p.stack.map((s) => (
                <span
                  key={s}
                  className={`tag${
                    ["Java", "React.js"].includes(s) ? " highlight" : ""
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}