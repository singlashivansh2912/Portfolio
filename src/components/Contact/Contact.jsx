import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const GmailIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/singlashivansh2912' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://lnk.ink/si2910' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/sh.ivansh_1010?igsh=MXYzYW1sMDV5anJicw==' },
  { icon: GmailIcon, label: 'Email', href: 'mailto:Shivanshsingla2912@gmail.com' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const waveTimelinesRef = useRef([]);
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-label',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-label', start: 'top 85%' } }
      );
      const chars = document.querySelectorAll('.wave-char');
      gsap.fromTo(chars,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.03, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-headline', start: 'top 80%',
            onEnter: () => {
              const waveDelay = setTimeout(() => {
                const tweens = [];
                chars.forEach((char, i) => {
                  const tween = gsap.to(char, {
                    y: -8, repeat: 3, yoyo: true, duration: 0.6 + Math.random() * 0.3,
                    delay: i * 0.04, ease: 'sine.inOut',
                    onComplete: () => { gsap.to(char, { y: 0, duration: 0.4, ease: 'power2.out' }); }
                  });
                  tweens.push(tween);
                });
                waveTimelinesRef.current = tweens;
              }, 800);
              return () => clearTimeout(waveDelay);
            }
          }
        }
      );
      gsap.fromTo('.contact-form-wrap',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-form-wrap', start: 'top 85%' } }
      );
      gsap.fromTo('.social-link',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'elastic.out(1, 0.5)',
          scrollTrigger: { trigger: '.socials-row', start: 'top 90%' } }
      );
    }, sectionRef);
    return () => { ctx.revert(); waveTimelinesRef.current.forEach(t => t.kill()); };
  }, []);

  const headlineText = "Let's create something extraordinary";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      gsap.to(formRef.current, { x: [-10, 10, -8, 8, -4, 4, 0], duration: 0.5, ease: 'power2.out' });
      return;
    }
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
    setTimeout(() => { setFormState('idle'); setFormData({ name: '', email: '', message: '' }); }, 4000);
  };

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section ref={sectionRef} className="section contact-section" id="contact">
      <div className="contact-aurora">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>

      <div className="container contact-container">
        <div className="contact-label section-label">Contact</div>

        <h2 className="contact-headline text-h1">
          {headlineText.split('').map((char, i) => (
            <span key={i} className="wave-char" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        <p className="contact-sub" style={{ maxWidth: '500px', margin: 'var(--sp-5) auto var(--sp-8)', textAlign: 'center', color: 'var(--text-muted)' }}>
          Have a project in mind? Let's talk about how we can work together to bring your vision to life.
        </p>

        <form ref={formRef} className="contact-form-wrap" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="contact-name" className="form-input" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <label htmlFor="contact-name" className={`form-label ${formData.name ? 'filled' : ''}`}>Your Name</label>
            <div className="form-line" />
          </div>
          <div className="form-group">
            <input type="email" id="contact-email" className="form-input" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <label htmlFor="contact-email" className={`form-label ${formData.email ? 'filled' : ''}`}>Your Email</label>
            <div className="form-line" />
          </div>
          <div className="form-group">
            <textarea id="contact-message" className="form-input form-textarea" rows={4} value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
            <label htmlFor="contact-message" className={`form-label ${formData.message ? 'filled' : ''}`}>Your Message</label>
            <div className="form-line" />
          </div>
          <button type="submit" className={`submit-btn ${formState}`} onClick={handleRipple} disabled={formState !== 'idle'}>
            {formState === 'idle' && <><Send size={18} /><span>Send Message</span></>}
            {formState === 'sending' && <div className="spinner" />}
            {formState === 'sent' && <><CheckCircle size={20} /><span>Sent!</span></>}
          </button>
        </form>

        <div className="socials-row">
          {socials.map((social, i) => (
            <a key={i} href={social.href}
               className="social-link"
               aria-label={social.label}
               target={social.href.startsWith('mailto') ? undefined : '_blank'}
               rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
               data-tooltip={social.label}>
              <social.icon size={22} />
              <span className="social-tooltip">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-section { position: relative; overflow: hidden; }
        .contact-container { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; }
        .contact-headline { text-align: center; margin-bottom: var(--sp-3); }
        .contact-aurora { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .aurora-blob { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.12; }
        .aurora-1 { width: 500px; height: 500px; background: var(--accent); top: 10%; left: -10%; animation: auroraFloat1 8s ease-in-out infinite; }
        .aurora-2 { width: 400px; height: 400px; background: #a0e000; bottom: 10%; right: -5%; animation: auroraFloat2 10s ease-in-out infinite; }
        .aurora-3 { width: 300px; height: 300px; background: #6ee7b7; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: auroraFloat3 12s ease-in-out infinite; }
        @keyframes auroraFloat1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(60px, -40px) scale(1.2); } }
        @keyframes auroraFloat2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-40px, 30px) scale(1.15); } }
        @keyframes auroraFloat3 { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-40%, -60%) scale(1.3); } }
        .contact-form-wrap { width: 100%; max-width: 520px; display: flex; flex-direction: column; gap: var(--sp-6); }
        .form-group { position: relative; }
        .form-input { width: 100%; padding: var(--sp-4) 0 var(--sp-3); font-size: var(--fs-body); color: var(--text-primary); background: transparent; border-bottom: 1px solid var(--border); transition: border-color 0.3s; }
        .form-input:focus ~ .form-line, .form-input:valid ~ .form-line { transform: scaleX(1); }
        .form-input:focus ~ .form-label, .form-input:valid ~ .form-label, .form-label.filled { transform: translateY(-24px) scale(0.8); color: var(--accent); }
        .form-label { position: absolute; left: 0; top: var(--sp-4); font-size: var(--fs-body); color: var(--text-muted); pointer-events: none; transition: all 0.3s var(--ease-out); transform-origin: left; }
        .form-line { position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform 0.4s var(--ease-out); }
        .form-textarea { resize: vertical; min-height: 100px; }
        .submit-btn { display: inline-flex; align-items: center; justify-content: center; gap: var(--sp-2); padding: var(--sp-4) var(--sp-7); background: var(--accent); color: var(--accent-text); font-family: var(--font-display); font-weight: 600; font-size: var(--fs-body); border-radius: var(--radius-full); transition: all 0.35s var(--ease-out); position: relative; overflow: hidden; align-self: center; min-width: 200px; min-height: 52px; }
        .submit-btn:hover:not(:disabled) { transform: scale(1.05); box-shadow: 0 0 40px var(--accent-dim); }
        .submit-btn:disabled { opacity: 0.8; }
        .submit-btn.sent { background: #22c55e; }
        .spinner { width: 22px; height: 22px; border: 3px solid rgba(0,0,0,0.2); border-top-color: var(--bg-primary); border-radius: 50%; animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .ripple { position: absolute; width: 20px; height: 20px; border-radius: 50%; background: rgba(255,255,255,0.4); transform: translate(-50%, -50%) scale(0); animation: rippleAnim 0.6s ease-out; pointer-events: none; }
        @keyframes rippleAnim { to { transform: translate(-50%, -50%) scale(10); opacity: 0; } }
        .socials-row { display: flex; gap: var(--sp-4); margin-top: var(--sp-8); }
        .social-link { width: 52px; height: 52px; border-radius: 50%; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: all 0.35s var(--ease-elastic); position: relative; text-decoration: none; }
        .social-link:hover { color: var(--accent); border-color: var(--accent); transform: scale(1.15) translateY(-4px); box-shadow: 0 4px 25px var(--accent-dim), 0 0 15px var(--accent-glow); }
        .social-tooltip { position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%) translateY(4px); background: var(--bg-elevated); color: var(--text-primary); font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: var(--radius-sm); white-space: nowrap; pointer-events: none; opacity: 0; transition: all 0.3s var(--ease-out); border: 1px solid var(--border); }
        .social-tooltip::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 5px solid transparent; border-top-color: var(--bg-elevated); }
        .social-link:hover .social-tooltip { opacity: 1; transform: translateX(-50%) translateY(0); }
      `}</style>
    </section>
  );
}
