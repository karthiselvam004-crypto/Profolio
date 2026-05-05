const contacts = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 95143 52753",
    href: "tel:+919514352753",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "karthi.selvam004@gmail.com",
    href: "mailto:karthi.selvam004@gmail.com",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "Karthis7",
    href: "https://github.com/Karthis7",
    external: true,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "View Profile",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section className="page-section">
      <div className="section-label">Contact</div>
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="contact-card"
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noreferrer" : undefined}
          >
            <div className="contact-icon">{c.icon}</div>
            <div className="contact-info">
              <div className="label">{c.label}</div>
              <div className="value">{c.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}