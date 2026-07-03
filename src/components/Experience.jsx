import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Python Full Stack Developer Intern",
            company: "Knovista",
            location: "Remote — Kochi",
            period: "Mar 2026 – Jun 2026",
            points: [
                "Designed and maintained 10+ RESTful endpoints using Django REST Framework for backend API development, reducing manual processing time by 30%.",
                "Tested and validated API endpoints using Postman, verifying request/response integrity and authentication flows.",
                "Implemented JWT authentication and RBAC securing data access for 3 user roles (Admin, Manager, Staff).",
                "Integrated React.js frontend with Django backend via Axios across 5+ modules with full error handling.",
                "Containerized application using Docker & set up a CI/CD pipeline; followed Git branching workflows and Agile/Scrum sprint delivery."
            ]
        },
        {
            role: "Python Developer Intern",
            company: "ZiyaAcademy",
            location: "Kochi, Aluva",
            period: "Jun 2025 – Dec 2025",
            points: [
                "Developed Django backend modules for 5+ features (user management, authentication, data processing), supporting 100+ user records and reducing manual handling by ~25%.",
                "Implemented CRUD operations with Django ORM and MySQL across 5+ data models, enforcing validation logic that reduced input errors by ~20%.",
                "Designed normalized database schemas and applied indexing on 10+ SQL queries, improving response time by ~30% and eliminating 15+ bugs across migrations.",
                "Maintained clean, documented codebase across 6-month sprint cycles; contributed to 10+ code reviews following PEP 8 and Django best practices."
            ]
        }
    ];

    return (
        <section id="experience" className="section section-alt">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="section-title-line" />

                <div className="exp-list">
                    {experiences.map((exp, i) => (
                        <div key={i} className="exp-entry">
                            <div className="exp-sidebar">
                                <p className="exp-period">{exp.period}</p>
                                <p className="exp-company">{exp.company}</p>
                                <p className="exp-location">{exp.location}</p>
                            </div>
                            <div className="exp-body card">
                                <h3 className="exp-role">{exp.role}</h3>
                                <ul className="exp-bullets">
                                    {exp.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .exp-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                    max-width: 980px;
                    margin: 0 auto;
                }

                .exp-entry {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    gap: 2rem;
                    align-items: start;
                }

                .exp-sidebar {
                    text-align: right;
                    padding-top: 1.8rem;
                }

                .exp-period {
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: var(--accent-dark);
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    margin-bottom: 0.5rem;
                }

                .exp-company {
                    font-family: var(--font-heading);
                    font-size: 1.05rem;
                    color: var(--navy);
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                }

                .exp-location {
                    font-size: 0.82rem;
                    color: var(--text-muted);
                }

                .exp-body {
                    padding: 1.8rem 2rem;
                    border-left: 4px solid var(--accent);
                }

                .exp-role {
                    font-family: var(--font-heading);
                    font-size: 1.15rem;
                    color: var(--navy);
                    margin-bottom: 1.2rem;
                    padding-bottom: 0.8rem;
                    border-bottom: 1px solid var(--border);
                }

                .exp-bullets {
                    display: flex;
                    flex-direction: column;
                    gap: 0.65rem;
                    padding-left: 1.2rem;
                    list-style: disc;
                }

                .exp-bullets li {
                    color: var(--text-muted);
                    font-size: 0.94rem;
                    line-height: 1.7;
                }

                @media (max-width: 768px) {
                    .exp-entry {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }
                    .exp-sidebar {
                        text-align: left;
                        padding-top: 0;
                        border-left: 4px solid var(--accent);
                        padding-left: 1rem;
                    }
                    .exp-body {
                        border-left: none;
                        border-top: 4px solid var(--accent);
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
