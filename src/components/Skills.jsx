import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: "Languages",
            icon: "{ }",
            items: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"]
        },
        {
            category: "Frontend",
            icon: "◈",
            items: ["React.js", "Bootstrap", "JSX", "Responsive Web Design"]
        },
        {
            category: "Backend",
            icon: "⚙",
            items: ["Django", "Django REST Framework", "RESTful APIs", "JWT Auth", "RBAC", "OOP", "MVC", "LLM API (Ollama)"]
        },
        {
            category: "Databases",
            icon: "▦",
            items: ["PostgreSQL", "MySQL", "Redis", "Django ORM", "Indexing", "Query Optimization"]
        },
        {
            category: "DevOps / Tools",
            icon: "⬡",
            items: ["Git", "GitHub", "Docker", "CI/CD", "Render", "PythonAnywhere", "Postman", "Linux"]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="section-title-line" />

                <div className="skills-grid">
                    {skills.map((group, i) => (
                        <div key={i} className="skill-card card">
                            <div className="skill-icon">{group.icon}</div>
                            <h3 className="skill-cat">{group.category}</h3>
                            <div className="skill-tags">
                                {group.items.map((s, j) => (
                                    <span key={j} className="tag">{s}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 1.5rem;
                }

                .skill-card {
                    padding: 2rem 1.75rem;
                }

                .skill-icon {
                    font-size: 1.6rem;
                    color: var(--accent);
                    margin-bottom: 0.8rem;
                    font-family: monospace;
                }

                .skill-cat {
                    font-family: var(--font-heading);
                    font-size: 1.05rem;
                    color: var(--navy);
                    margin-bottom: 1.2rem;
                    padding-bottom: 0.6rem;
                    border-bottom: 1px solid var(--border);
                }

                .skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
            `}</style>
        </section>
    );
};

export default Skills;
