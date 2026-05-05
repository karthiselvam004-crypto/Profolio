export default function Home() {
  return (
    <div className="home-wrapper">

      {/* ── HERO ROW ── */}
      <div className="home-hero-row">
        <div className="home-hero-text">
          <h1 className="home-heading">
            Hi, I'm Karthikeyan —{" "}
            <span className="home-heading-accent">Full-Stack Developer</span>
          </h1>
          <p className="home-sub">
            I build modern web applications using Java and Angular. I focus on
            creating performant, accessible, and maintainable software.
            Currently working on scalable enterprise solutions and improving
            developer experience.
          </p>
          <div className="home-cta">
            <a href="/projects" className="home-btn-primary">→ View Projects</a>
            <a href="/contact" className="home-btn-outline">Contact Me</a>
          </div>

          {/* ── STAT CARDS ── */}
          <div className="home-stats">
            <div className="home-stat-card">
              <div className="stat-label">Projects</div>
              <div className="stat-number">3+</div>
            </div>
            <div className="home-stat-card">
              <div className="stat-label">Certifications</div>
              <div className="stat-number">3</div>
            </div>
            <div className="home-stat-card">
              <div className="stat-label">Internships</div>
              <div className="stat-number">2</div>
            </div>
          </div>
        </div>

        {/* ── PROFILE CIRCLE ── */}
        <div className="home-photo-wrap">
          <div className="home-photo-circle">
            <div className="home-photo-placeholder">KS</div>
          </div>
        </div>
      </div>

      {/* ── SPECIALTY CARDS ── */}
      <div className="home-specialty-grid">
        <div className="home-specialty-card">
          <div className="specialty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <div className="specialty-title">Frontend</div>
          <div className="specialty-desc">Angular, JavaScript, HTML5, CSS3, Bootstrap</div>
        </div>

        <div className="home-specialty-card home-specialty-card--active">
          <div className="specialty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            </svg>
          </div>
          <div className="specialty-title">Backend</div>
          <div className="specialty-desc">Java, MySQL, REST APIs, Spring Boot</div>
        </div>

        <div className="home-specialty-card">
          <div className="specialty-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
          </div>
          <div className="specialty-title">Tools & DevOps</div>
          <div className="specialty-desc">Git, GitHub, VS Code, Postman,Server Deployement</div>
        </div>
      </div>

    </div>
  );
}