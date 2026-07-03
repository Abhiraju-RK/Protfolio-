import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Classic decorative top bar */}
      <div className="hero-topbar" />

      <div className="container hero-inner">
        <div className="hero-badge fade-in">Available for Opportunities</div>

        <h1 className="hero-name fade-up">ABHI RAJU R.K</h1>
        <div className="hero-rule" />
        <h2 className="hero-title fade-up">Junior Python Full Stack Developer</h2>

        <p className="hero-desc fade-up">
          Building and deploying scalable web applications with RESTful APIs using Python, Django,
          React, PostgreSQL &amp; Redis. Skilled in API testing, database design, JWT authentication,
          Docker, CI/CD, and Agile/Scrum. Certified Python Full Stack Developer.
        </p>

        <div className="hero-meta fade-up">
          <span>📍 Kerala, India</span>
          <span className="meta-sep">|</span>
          <span>📞 +91 8129145068</span>
          <span className="meta-sep">|</span>
          <a href="mailto:abhiraju5884@gmail.com">✉️ abhiraju5884@gmail.com</a>
        </div>

        <div className="hero-actions fade-up">
          <a href="#projects"   className="btn btn-primary">View Projects</a>
          <a href="#contact"    className="btn btn-outline">Get In Touch</a>
          <a href="https://github.com/Abhiraju-RK"       target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub ↗</a>
          <a href="https://linkedin.com/in/abhiraju-rk"  target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          position: relative;
          padding-top: 80px;
          text-align: center;
        }

        /* decorative thick top stripe */
        .hero-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 5px;
          background: linear-gradient(90deg, var(--navy) 50%, var(--accent) 100%);
        }

        .hero-inner {
          max-width: 780px;
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--accent-light);
          border: 1px solid #d4b56a;
          color: var(--accent-dark);
          border-radius: 2rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-name {
          font-family: var(--font-heading);
          font-size: 4.2rem;
          font-weight: 700;
          color: var(--navy);
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-rule {
          width: 72px;
          height: 3px;
          background: var(--accent);
          margin: 0 auto 1.2rem;
          border-radius: 2px;
        }

        .hero-title {
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 400;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.8rem;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 640px;
          margin: 0 auto 1.8rem;
        }

        .hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 2.4rem;
        }

        .hero-meta a { color: var(--accent-dark); font-weight: 500; }
        .hero-meta a:hover { color: var(--accent); }
        .meta-sep { color: var(--border); }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-ghost {
          background: transparent;
          color: var(--text-muted);
          border: 1px solid var(--border);
          padding: 12px 24px;
          border-radius: var(--radius);
          font-size: 0.85rem;
          font-weight: 500;
          transition: var(--transition);
          letter-spacing: 0.02em;
        }

        .btn-ghost:hover {
          border-color: var(--navy);
          color: var(--navy);
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .hero-name  { font-size: 2.8rem; }
          .hero-title { font-size: 1rem; }
          .hero-meta  { flex-direction: column; gap: 0.4rem; }
          .meta-sep   { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
