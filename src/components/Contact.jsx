import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section section-alt">
            <div className="container">
                <div className="contact-topbar" />
                <h2 className="section-title" style={{ paddingTop: '4rem' }}>Get In Touch</h2>
                <div className="section-title-line" />

                <p className="contact-sub">
                    I'm actively looking for new opportunities. Whether you have a role, project, or just want to connect — my inbox is open!
                </p>

                <div className="contact-grid">
                    <a href="mailto:abhiraju5884@gmail.com" className="contact-card card">
                        <span className="contact-icon">✉</span>
                        <div>
                            <p className="contact-label">Email</p>
                            <p className="contact-value">abhiraju5884@gmail.com</p>
                        </div>
                    </a>
                    <a href="tel:+918129145068" className="contact-card card">
                        <span className="contact-icon">☏</span>
                        <div>
                            <p className="contact-label">Phone</p>
                            <p className="contact-value">+91 8129145068</p>
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/abhiraju-rk" target="_blank" rel="noopener noreferrer" className="contact-card card">
                        <span className="contact-icon">in</span>
                        <div>
                            <p className="contact-label">LinkedIn</p>
                            <p className="contact-value">linkedin.com/in/abhiraju-rk</p>
                        </div>
                    </a>
                    <a href="https://github.com/Abhiraju-RK" target="_blank" rel="noopener noreferrer" className="contact-card card">
                        <span className="contact-icon">⌥</span>
                        <div>
                            <p className="contact-label">GitHub</p>
                            <p className="contact-value">github.com/Abhiraju-RK</p>
                        </div>
                    </a>
                </div>

                <div className="copyright">
                    <hr className="divider" />
                    <p>© 2026 Abhi Raju R.K &nbsp;·&nbsp; Kerala, India &nbsp;·&nbsp; All rights reserved.</p>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding-bottom: 3rem;
                }

                .contact-topbar {
                    height: 4px;
                    background: linear-gradient(90deg, var(--navy) 50%, var(--accent) 100%);
                    margin: 0 -2rem;
                }

                .contact-sub {
                    text-align: center;
                    color: var(--text-muted);
                    max-width: 500px;
                    margin: 0 auto 3rem;
                    font-size: 1rem;
                    line-height: 1.75;
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1.5rem;
                    max-width: 820px;
                    margin: 0 auto;
                }

                .contact-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.4rem 1.6rem;
                    color: var(--text);
                    transition: var(--transition);
                }

                .contact-card:hover {
                    border-color: var(--accent);
                    box-shadow: var(--shadow-md);
                    transform: translateY(-3px);
                }

                .contact-icon {
                    font-size: 1.4rem;
                    color: var(--accent);
                    min-width: 32px;
                    text-align: center;
                    font-weight: 700;
                }

                .contact-label {
                    font-size: 0.72rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-muted);
                    margin-bottom: 0.2rem;
                }

                .contact-value {
                    font-size: 0.9rem;
                    color: var(--navy);
                    font-weight: 500;
                }

                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                }

                .copyright p {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    margin-top: 1.5rem;
                }

                @media (max-width: 600px) {
                    .contact-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </footer>
    );
};

export default Contact;
