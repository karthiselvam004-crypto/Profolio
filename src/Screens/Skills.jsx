const skillCategories = [
    {
        title: "Web Technologies",
        skills: [
            
            { name: "JavaScript" },
            { name: "React js" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Bootstrap" },
            { name: "Angular" },

        ],
    },
    {
        title: "Backend",
        skills: [{ name: "Java", highlight: true }],
    },
    {
        title: "Database",
        skills: [{ name: "MySQL", highlight: true }],
    },
    {
        title: "Tools",
        skills: [{ name: "VS Code" }, { name: "GitHub" }],
    },
];

export default function Skills() {
    return (
        <section className="page-section">
            <div className="section-label">Skills</div>
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
                {skillCategories.map((cat) => (
                    <div className="skill-cat" key={cat.title}>
                        <h3>{cat.title}</h3>
                        <div className="skill-tags">
                            {cat.skills.map((s) => (
                                <span
                                    key={s.name}
                                    className={`tag${s.highlight ? " highlight" : ""}`}
                                >
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}