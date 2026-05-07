import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === '/';
  const isProjectPage = location.pathname.startsWith('/projects/');

  useEffect(() => {
    // Show navbar after 2 seconds automatically (or immediately on project pages)
    if (isProjectPage) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      // Also track active section on scroll
      const handleScroll = () => {
        if (isLanding) {
          const sections = ['work', 'about', 'process', 'contact'];
          const y = window.scrollY;
          for (const id of [...sections].reverse()) {
            const el = document.getElementById(id);
            if (el && y >= el.offsetTop - 300) {
              setActiveSection(id);
              break;
            }
          }
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => { clearTimeout(timer); window.removeEventListener('scroll', handleScroll); };
    }
  }, [isLanding, isProjectPage]);

  useEffect(() => {
    if (isVisible && navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isVisible]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    if (!isLanding) {
      // Navigate to landing page with hash
      navigate('/' + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className={`navbar ${isVisible || isProjectPage ? 'visible' : ''}`}>
      {isProjectPage ? (
        <>
          <Link to="/" className="nav-back-btn">
            <ArrowLeft size={16} />
            <span>Home</span>
          </Link>
          <div className="nav-links">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link"
                onClick={(e) => { e.preventDefault(); navigate('/' + link.href); }}>
                {link.label}
              </a>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="nav-logo" onClick={(e) => { e.preventDefault(); if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.2 }); else window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/Logo_P.png" alt="Logo" className="nav-logo-img" />
          </div>
          <div className="nav-links">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => scrollTo(e, link.href)}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="nav-cta" onClick={(e) => scrollTo(e, '#contact')}>
            Let's Talk
          </a>
        </>
      )}
      <style>{`
        .navbar {
          position: fixed;
          top: var(--sp-5);
          left: 50%;
          transform: translateX(-50%);
          z-index: var(--z-nav);
          display: flex;
          align-items: center;
          gap: var(--sp-6);
          padding: var(--sp-3) var(--sp-6);
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .navbar.visible {
          opacity: 1;
          pointer-events: auto;
        }
        .nav-logo {
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nav-logo-img {
          height: 28px;
          width: auto;
          object-fit: contain;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--sp-5);
        }
        .nav-link {
          font-size: var(--fs-small);
          font-weight: 500;
          color: var(--text-muted);
          transition: color var(--duration-fast);
          position: relative;
          padding: var(--sp-1) 0;
          text-decoration: none;
        }
        .nav-link:hover,
        .nav-link.active {
          color: var(--text-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent);
          border-radius: 1px;
        }
        .nav-cta {
          font-size: var(--fs-small);
          font-weight: 600;
          color: var(--accent-text);
          background: var(--accent);
          padding: var(--sp-2) var(--sp-4);
          border-radius: var(--radius-full);
          transition: all var(--duration-fast) var(--ease-out);
          text-decoration: none;
        }
        .nav-cta:hover {
          background: var(--accent-hover);
          transform: scale(1.05);
        }
        .nav-back-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--sp-2);
          font-size: var(--fs-small);
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.3s;
          text-decoration: none;
        }
        .nav-back-btn:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .navbar {
            padding: var(--sp-2) var(--sp-4);
            gap: var(--sp-3);
          }
          .nav-links { display: none; }
          .nav-logo-img { height: 22px; }
          .nav-cta {
            font-size: var(--fs-caption);
            padding: var(--sp-2) var(--sp-3);
          }
        }
      `}</style>
    </nav>
  );
}
