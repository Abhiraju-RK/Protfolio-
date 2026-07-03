import React from 'react';

const About = () => {
    return (
        <section id="about" className="section section-alt">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="section-title-line" />

                <div className="about-grid">
                    {/* Summary */}
                    <div className="about-text">
                        <p>
                            Junior Python Developer with 1+ year of internship experience building and deploying scalable web
                            applications and RESTful APIs using Python, Django, DRF, React.js, PostgreSQL, and Redis.
                        </p>
                        <p>
                            Skilled in API testing, database design, JWT authentication, Docker, CI/CD, and Agile/Scrum.
                            Certified Python Full Stack Developer, passionate about clean architecture and seamless
                            full-stack experiences.
                        </p>

                        <div className="cert-block">
                            <h3 className="block-heading">Certifications</h3>
                            <ul className="cert-list">
                                <li>
                                    <span className="cert-dot" />
                                    <div>
                                        <strong>Python Full Stack Developer</strong>
                                        <span>Brilliance Institute of Information Technology · 2024</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="cert-dot" />
                                    <div>
                                        <strong>Python Developer Internship Certificate</strong>
                                        <span>Ziya Academy · Dec 2025</span>
                                    </div>
                                </li>
                                <li>
                                    <span className="cert-dot" />
                                    <div>
                                        <strong>1+ Year Internship Experience</strong>
                                        <span>Independent full-stack projects · Certified Python Full Stack Developer</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="edu-block">
                        <h3 className="block-heading">Education</h3>
                        <div className="edu-timeline">
                            <div className="edu-item">
                                <div className="edu-year">2019 – 2022</div>
                                <div className="edu-details">
                                    <h4>BA English Literature</h4>
                                    <p>Cooperative Arts and Science College, Trivandrum</p>
                                </div>
                            </div>
                            <div className="edu-item">
                                <div className="edu-year">2019</div>
                                <div className="edu-details">
                                    <h4>Higher Secondary — Computer Science</h4>
                                    <p>GHSS Kamaleswaram, Trivandrum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    gap: 4rem;
                    align-items: start;
                }

                .about-text p {
                    font-size: 1rem;
                    color: var(--text-muted);
                    margin-bottom: 1.2rem;
                    line-height: 1.8;
                }

                .block-heading {
                    font-family: var(--font-heading);
                    font-size: 1.25rem;
                    color: var(--navy);
                    margin-bottom: 1.2rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid var(--accent);
                    display: inline-block;
                }

                .cert-block {
                    margin-top: 2rem;
                }

                .cert-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .cert-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.8rem;
                }

                .cert-dot {
                    width: 10px; height: 10px;
                    border-radius: 50%;
                    background: var(--accent);
                    flex-shrink: 0;
                    margin-top: 5px;
                }

                .cert-list li div {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                }

                .cert-list strong {
                    color: var(--text);
                    font-size: 0.95rem;
                }

                .cert-list span {
                    color: var(--text-muted);
                    font-size: 0.85rem;
                }

                /* Education */
                .edu-block {
                    background: var(--surface);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    box-shadow: var(--shadow-sm);
                }

                .edu-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .edu-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                    padding-left: 1rem;
                    border-left: 3px solid var(--accent);
                }

                .edu-year {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--accent-dark);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .edu-details h4 {
                    font-size: 1rem;
                    color: var(--navy);
                    font-weight: 600;
                }

                .edu-details p {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }

                @media (max-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
