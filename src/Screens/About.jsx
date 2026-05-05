import { useEffect, useRef } from "react";

const skillCards = [
  {
    icon: "💼",
    title: "Experience",
    items: [
      { bold: "1 year", rest: " of professional experience" },
      { bold: null, rest: "• Full-stack web application development" },
      { bold: null, rest: "• Building scalable backend systems" },
      { bold: null, rest: "• Enterprise software solutions" },
      { bold: null, rest: "• Agile & team collaboration" },
    ],
  },
  {
    icon: "⚛️",
    title: "Frontend Stack",
    items: [
      { bold: "React Js", rest: " - Modern UI development" },
      { bold: "JavaScript", rest: " - Core language" },
      { bold: "HTML5 & CSS3", rest: " - Web standards" },
      { bold: "Bootstrap", rest: " - UI components" },
      { bold: "Responsive Design", rest: " - Mobile-first" },
    ],
  },
  {
    icon: "🔧",
    title: "Backend Stack",
    items: [
      { bold: "Java", rest: " - Core technology" },
      { bold: "MySQL", rest: " - Database design" },
      { bold: "RESTful APIs", rest: " - API development" },
      { bold: "Spring Boot", rest: " - Enterprise apps (learning)" },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Technologies",
    items: [
      { bold: "Git/GitHub", rest: " - Version control" },
      { bold: "VS Code", rest: " - Primary IDE" },
      { bold: "Eclipse", rest: " - Java development" },
      { bold: "Postman", rest: " - API testing" },
    ],
  },
  {
    icon: "🎓",
    title: "Certifications",
    items: [
      { bold: "Java Foundations", rest: " - Oracle Academy, 2023" },
      { bold: "Front-End Dev", rest: " - Great Learning (HTML, CSS)" },
      { bold: "Full Front-End", rest: " - Capgemini CSR (HTML, CSS, JS, Angular)" },
    ],
  },
  {
    icon: "🎯",
    title: "Soft Skills",
    items: [
      { bold: "Problem Solving", rest: " - Analytical thinking" },
      { bold: "Quick Learner", rest: " - Adapts fast to new tech" },
      { bold: "Team Player", rest: " - Collaborative mindset" },
      { bold: "Communication", rest: " - Clear & concise" },
    ],
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".skill-detail-card");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-wrapper" ref={sectionRef}>

      {/* ── INTRO CARD ── */}
      <div className="about-intro-card">
        <div className="about-avatar-lg">KS</div>
        <div className="about-intro-body">
          <div className="section-label">About Me</div>
          <h2 className="about-intro-heading">
            Hi, I'm Karthikeyan —{" "}
            <span className="about-intro-accent">a passionate Full-Stack Developer</span>
          </h2>
          <p className="about-intro-text">
            I'm a passionate Full-Stack Developer with expertise in building
            modern, scalable, and user-friendly web applications. With
            hands-on experience in <strong>Java</strong>,{" "}
            <strong>React Js</strong>, and <strong>MySQL</strong>, I craft
            efficient solutions that make a real impact.
          </p>
          
          <p className="about-intro-text">
            I'm always eager to learn, grow, and take on new challenges. My
            goal is to work in an organization where I can contribute
            meaningfully while continuously improving my skills.
          </p>
          
        </div>
      </div>

      {/* ── SKILL DETAIL CARDS ── */}
      <div className="skill-detail-grid">
        {skillCards.map((card) => (
          <div
            className="skill-detail-card"
            key={card.title}
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}
          >
            <h3 className="sdk-title">
              <span className="sdk-icon">{card.icon}</span>
              {card.title}
            </h3>
            <ul className="sdk-list">
              {card.items.map((item, i) => (
                <li key={i} className="sdk-item">
                  {item.bold ? <strong>{item.bold}</strong> : null}
                  <span className="sdk-rest">{item.rest}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}