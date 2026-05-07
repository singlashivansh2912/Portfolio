import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';

export default function CaseStudy({ project, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
    tl.fromTo(contentRef.current,
      { y: 60, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    );

    // Stagger sections
    tl.fromTo('.cs-section',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    );

    // Animate metrics
    tl.fromTo('.cs-metric',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onClose();
      }
    });
    tl.to(contentRef.current, { y: 40, opacity: 0, duration: 0.3, ease: 'power2.in' });
    tl.to(overlayRef.current, { opacity: 0, duration: 0.3 }, '-=0.1');
  };

  const cs = project.caseStudy;

  return (
    <div ref={overlayRef} className="cs-overlay" onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}>
      <div ref={contentRef} className="cs-container">
        <button className="cs-close" onClick={handleClose}><X size={24} /></button>

        <div className="cs-hero">
          <img src={project.image} alt={project.title} className="cs-hero-img" />
          <div className="cs-hero-info">
            <span className="cs-category">{project.category}</span>
            <h2 className="text-h1">{project.title}</h2>
            <p className="cs-tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="cs-body">
          <div className="cs-section">
            <h3 className="cs-section-title">The Problem</h3>
            <p>{cs.problem}</p>
          </div>

          <div className="cs-section">
            <h3 className="cs-section-title">The Thinking</h3>
            <p>{cs.thinking}</p>
          </div>

          <div className="cs-section">
            <h3 className="cs-section-title">The Process</h3>
            <p>{cs.process}</p>
          </div>

          <div className="cs-section">
            <h3 className="cs-section-title">The Outcome</h3>
            <p>{cs.outcome}</p>
          </div>

          <div className="cs-section cs-metrics-section">
            <h3 className="cs-section-title">Impact</h3>
            <div className="cs-metrics">
              {cs.metrics.map((m, i) => (
                <div key={i} className="cs-metric" style={{ '--project-color': project.color }}>
                  <span className="cs-metric-value">{m.value}</span>
                  <span className="cs-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cs-overlay {
          position: fixed;
          inset: 0;
          z-index: var(--z-overlay);
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow-y: auto;
          padding: var(--sp-7);
          cursor: auto !important;
        }
        .cs-container {
          width: 100%;
          max-width: 860px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          position: relative;
          margin: var(--sp-7) 0;
        }
        .cs-close {
          position: absolute;
          top: var(--sp-5);
          right: var(--sp-5);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s var(--ease-out);
          border: 1px solid var(--border);
        }
        .cs-close:hover {
          background: var(--accent);
          color: var(--bg-primary);
          transform: rotate(90deg);
        }
        .cs-hero {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }
        .cs-hero-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          filter: brightness(0.6);
        }
        .cs-hero-info {
          position: absolute;
          bottom: var(--sp-7);
          left: var(--sp-7);
          z-index: 2;
        }
        .cs-category {
          font-size: var(--fs-caption);
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 500;
          margin-bottom: var(--sp-2);
          display: block;
        }
        .cs-tagline {
          color: var(--text-secondary);
          font-size: var(--fs-body);
          margin-top: var(--sp-2);
        }
        .cs-body {
          padding: var(--sp-8) var(--sp-7);
          display: flex;
          flex-direction: column;
          gap: var(--sp-7);
        }
        .cs-section-title {
          font-family: var(--font-display);
          font-size: var(--fs-h3);
          font-weight: 600;
          color: var(--accent);
          margin-bottom: var(--sp-4);
        }
        .cs-section p {
          font-size: var(--fs-body);
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .cs-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--sp-4);
        }
        .cs-metric {
          text-align: center;
          padding: var(--sp-5) var(--sp-4);
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          transition: all 0.3s var(--ease-out);
        }
        .cs-metric:hover {
          border-color: var(--project-color, var(--accent));
          box-shadow: 0 0 20px rgba(201, 243, 29, 0.1);
          transform: translateY(-4px);
        }
        .cs-metric-value {
          display: block;
          font-family: var(--font-display);
          font-size: var(--fs-h2);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: var(--sp-2);
        }
        .cs-metric-label {
          font-size: var(--fs-caption);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        @media (max-width: 768px) {
          .cs-overlay { padding: var(--sp-4); }
          .cs-body { padding: var(--sp-6) var(--sp-5); }
          .cs-metrics { grid-template-columns: repeat(2, 1fr); }
          .cs-hero-img { height: 200px; }
          .cs-hero-info { left: var(--sp-5); bottom: var(--sp-5); }
        }
      `}</style>
    </div>
  );
}
