import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Smart Asset & Inventory Management System",
            year: "2026",
            category: "Full Stack · Production",
            tech: ["Python", "Django", "PostgreSQL", "Redis", "JWT", "React.js", "CSS", "Render"],
            link: "https://github.com/Abhiraju-RK/Business-full",
            points: [
                "Built a full-stack asset management system with real-time CRUD operations supporting 500+ product records, 3 roles (RBAC), and JWT authentication enforced across all API endpoints.",
                "Configured and deployed on Render with PostgreSQL; implemented Redis caching for stable production uptime and environment-variable–driven configuration."
            ]
        },
        {
            title: "Travel Diary Web Application",
            year: "2026",
            category: "Full Stack · Deployed",
            preview: `${import.meta.env.BASE_URL}travel_diary_preview.png`,
            tech: ["Python", "Django", "PostgreSQL", "HTML5", "CSS", "Bootstrap", "PythonAnywhere"],
            link: "https://github.com/Abhiraju-RK/Travel-Diary",
            points: [
                "Developed a full-stack travel booking platform with a user dashboard, hotel search, destination explorer (with ratings & filters), tour packages, and multi-step reservation workflows.",
                "Built a responsive UI with Bootstrap for cross-browser and mobile compatibility; deployed live on PythonAnywhere."
            ]
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="section-title-line" />

                <div className="projects-list">
                    {projects.map((project, i) => (
                        <div key={i} className="project-card card">
                            <div className="project-meta-row">
                                <span className="project-cat">{project.category}</span>
                                <span className="project-year">{project.year}</span>
                            </div>

                            <h3 className="project-title">{project.title}</h3>

                            {project.preview && (
                                <div className="project-preview">
                                    <img src={project.preview} alt={`${project.title} preview`} />
                                </div>
                            )}

                            <ul className="project-points">
                                {project.points.map((pt, j) => (
                                    <li key={j}>{pt}</li>
                                ))}
                            </ul>

                            <div className="project-footer">
                                <div className="project-tech">
                                    {project.tech.map((t, j) => (
                                        <span key={j} className="tag">{t}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link btn btn-outline">
                                        View on GitHub ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .projects-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .project-card {
                    padding: 2.2rem 2.4rem;
                    border-left: 5px solid var(--accent);
                }

                .project-meta-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.75rem;
                }

                .project-cat {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--accent-dark);
                    background: var(--accent-light);
                    padding: 3px 10px;
                    border-radius: 2rem;
                    border: 1px solid #d4b56a;
                }

                .project-year {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--text-muted);
                }

                .project-title {
                    font-family: var(--font-heading);
                    font-size: 1.4rem;
                    color: var(--navy);
                    margin-bottom: 1.2rem;
                    line-height: 1.3;
                }

                .project-preview {
                    margin-bottom: 1.2rem;
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                }

                .project-preview img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .project-points {
                    list-style: disc;
                    padding-left: 1.2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    margin-bottom: 1.8rem;
                }

                .project-points li {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.7;
                }

                .project-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding-top: 1.2rem;
                    border-top: 1px solid var(--border);
                }

                .project-tech {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem;
                }

                .project-link {
                    font-size: 0.82rem;
                    padding: 8px 18px;
                    white-space: nowrap;
                }

                @media (max-width: 600px) {
                    .project-card { padding: 1.6rem 1.4rem; }
                    .project-footer { flex-direction: column; align-items: flex-start; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
