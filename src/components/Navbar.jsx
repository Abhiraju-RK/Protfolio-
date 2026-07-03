import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home',       href: '#home' },
        { name: 'About',      href: '#about' },
        { name: 'Skills',     href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects',   href: '#projects' },
        { name: 'Contact',    href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-inner">
                <a href="#home" className="nav-logo">
                    <span className="logo-first">Abhi</span><span className="logo-last">raju</span>
                </a>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-gold nav-cta" onClick={() => setIsOpen(false)}>
                        Hire Me
                    </a>
                </div>

                <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
            </div>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0; left: 0; width: 100%;
                    padding: 1.2rem 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    background: transparent;
                }

                .navbar.scrolled {
                    background: #ffffff;
                    border-bottom: 1px solid var(--border);
                    box-shadow: var(--shadow-sm);
                    padding: 0.9rem 0;
                }

                .nav-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .nav-logo {
                    font-family: var(--font-heading);
                    font-size: 1.6rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }

                .logo-first { color: var(--navy); }
                .logo-last  { color: var(--accent); }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .nav-link {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--text);
                    letter-spacing: 0.03em;
                    position: relative;
                    padding-bottom: 2px;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px; left: 0;
                    width: 0; height: 2px;
                    background: var(--accent);
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after { width: 100%; }
                .nav-link:hover { color: var(--navy); }

                .nav-cta {
                    padding: 8px 20px;
                    font-size: 0.82rem;
                }

                /* Hamburger */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                }

                .hamburger span {
                    display: block;
                    width: 24px; height: 2px;
                    background: var(--navy);
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }

                .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
                .hamburger.open span:nth-child(2) { opacity: 0; }
                .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

                @media (max-width: 768px) {
                    .hamburger { display: flex; }

                    .nav-links {
                        position: fixed;
                        top: 0; right: -100%;
                        width: 72%; max-width: 300px;
                        height: 100vh;
                        background: var(--surface);
                        border-left: 1px solid var(--border);
                        box-shadow: var(--shadow-lg);
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        padding: 2rem;
                        gap: 1.5rem;
                        transition: right 0.3s ease;
                    }

                    .nav-links.open { right: 0; }
                    .nav-link { font-size: 1.1rem; }
                    .nav-cta { margin-top: 1rem; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
