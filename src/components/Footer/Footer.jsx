import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/singlashivansh2912' },
  { label: 'LinkedIn', href: 'https://lnk.ink/si2910' },
  { label: 'Instagram', href: 'https://www.instagram.com/sh.ivansh_1010?igsh=MXYzYW1sMDV5anJicw==' },
  { label: 'Email', href: 'mailto:Shivanshsingla2912@gmail.com' },
  { label: 'Behance', href: 'https://www.behance.net/shivanshsingla2912' },
];

export default function Footer() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  const handleNavClick = (e, href) => {
    if (!isLanding) return; // Let Link handle navigation
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src="/Logo_P.png" alt="Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">Designing experiences that people remember.</p>
          <span className="footer-copy">© 2025 Shivansh Singla. All rights reserved.</span>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            {footerLinks.map(link => (
              <li key={link.href}>
                {isLanding ? (
                  <a href={link.href} className="footer-link" onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
                ) : (
                  <Link to={`/${link.href}`} className="footer-link">{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Connect</h4>
          <ul className="footer-links">
            {socialLinks.map(link => (
              <li key={link.label}>
                <a href={link.href}
                   className="footer-link"
                   target={link.href.startsWith('mailto') ? undefined : '_blank'}
                   rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-made">
          Crafted with <Heart size={14} className="footer-heart" /> & precision
        </span>
      </div>

      <style>{`
        .footer { padding: var(--sp-9) 0 var(--sp-7); border-top: 1px solid var(--border); }
        .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: var(--sp-8); margin-bottom: var(--sp-8); }
        .footer-brand { display: flex; flex-direction: column; gap: var(--sp-4); }
        .footer-logo-link { display: inline-block; text-decoration: none; }
        .footer-logo-img { height: 28px; width: auto; object-fit: contain; }
        .footer-tagline { font-size: var(--fs-small); color: var(--text-secondary); line-height: 1.6; max-width: 280px; }
        .footer-copy { font-size: var(--fs-caption); color: var(--text-muted); }
        .footer-col-title { font-family: var(--font-display); font-size: var(--fs-small); font-weight: 600; color: var(--text-primary); margin-bottom: var(--sp-4); text-transform: uppercase; letter-spacing: 0.08em; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: var(--sp-3); }
        .footer-link { font-size: var(--fs-small); color: var(--text-muted); transition: color 0.3s var(--ease-out); text-decoration: none; }
        .footer-link:hover { color: var(--accent); }
        .footer-bottom { display: flex; justify-content: center; padding-top: var(--sp-7); border-top: 1px solid var(--border); }
        .footer-made { display: flex; align-items: center; gap: var(--sp-1); font-size: var(--fs-caption); color: var(--text-muted); }
        .footer-heart { color: #ef4444; animation: heartbeat 1.5s ease-in-out infinite; }
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: var(--sp-7); text-align: center; }
          .footer-brand { align-items: center; }
          .footer-tagline { max-width: 100%; }
          .footer-links { align-items: center; }
        }
      `}</style>
    </footer>
  );
}
