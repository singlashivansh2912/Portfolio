import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
import { projects } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.work-label',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.work-label', start: 'top 85%' }
        }
      );
      gsap.fromTo('.work-heading',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.work-heading', start: 'top 85%' }
        }
      );
      gsap.fromTo('.project-card',
        { y: 80, opacity: 0, rotateX: 4 },
        {
          y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' }
        }
      );
      gsap.fromTo('.explore-more-btn',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.explore-more-btn', start: 'top 90%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleCardHover = (e, entering) => {
    const card = e.currentTarget;
    const img = card.querySelector('.project-image');
    const overlay = card.querySelector('.project-overlay');
    if (entering) {
      gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, { rotateY: x * 8, rotateX: -y * 5, duration: 0.4, ease: 'power2.out', transformPerspective: 1000 });
    const glow = card.querySelector('.card-glow');
    if (glow) {
      glow.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, var(--accent-dim) 0%, transparent 60%)`;
    }
  };

  const handleCardMouseLeave = (e) => {
    gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' });
  };

  return (
    <section ref={sectionRef} className="section" id="work">
      <div className="container">
        <div className="work-label section-label">Selected Work</div>
        <h2 className="work-heading text-h1" style={{ marginBottom: 'var(--sp-8)' }}>
          Projects that made an <span className="text-gradient">impact</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              data-cursor="view"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => { handleCardHover(e, false); handleCardMouseLeave(e); }}
              onMouseMove={handleCardMouseMove}
              style={{ '--project-color': project.color }}
            >
              <div className="card-glow" />
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                <div className="project-overlay">
                  <div className="project-gradient-overlay" />
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title text-h3">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <Link to={`/projects/${project.id}`} className="project-btn project-btn-primary magnetic-btn">
                    <span>View Project</span><ArrowRight size={14} />
                  </Link>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                      className="project-btn project-btn-secondary magnetic-btn"
                      onClick={e => e.stopPropagation()}>
                      <ExternalLink size={14} /><span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="project-btn project-btn-secondary magnetic-btn"
                      onClick={e => e.stopPropagation()}>
                      <GithubIcon size={14} /><span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Projects */}
        <div className="explore-more-wrap">
          <a href="https://www.behance.net/shivanshsingla2912" target="_blank" rel="noopener noreferrer" className="explore-more-btn magnetic-btn">
            <span>Explore More Projects</span>
            <ArrowRight size={18} className="explore-arrow" />
          </a>
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--sp-6);
        }
        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
          transition: box-shadow 0.4s var(--ease-out);
        }
        .project-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px var(--border-light);
        }
        .card-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          border-radius: var(--radius-lg);
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .project-image-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          background: var(--bg-tertiary);
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease-out);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.2) 50%, transparent 100%);
        }
        .project-info {
          padding: var(--sp-5) var(--sp-6);
          position: relative;
          z-index: 2;
        }
        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--sp-3);
        }
        .project-category {
          font-size: var(--fs-caption);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .project-year {
          font-size: var(--fs-caption);
          color: var(--text-dim);
          font-family: var(--font-display);
          font-weight: 600;
        }
        .project-title {
          margin-bottom: var(--sp-2);
          transition: color 0.3s;
        }
        .project-card:hover .project-title {
          color: var(--accent);
        }
        .project-description {
          font-size: var(--fs-small);
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: var(--sp-4);
        }
        .project-actions {
          display: flex;
          gap: var(--sp-3);
          flex-wrap: wrap;
          padding-top: var(--sp-3);
          border-top: 1px solid var(--border);
        }
        .project-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--sp-2);
          padding: var(--sp-2) var(--sp-4);
          border-radius: var(--radius-full);
          font-size: var(--fs-caption);
          font-weight: 600;
          font-family: var(--font-display);
          transition: all 0.3s var(--ease-out);
          text-decoration: none;
        }
        .project-btn-primary {
          background: var(--accent);
          color: var(--accent-text);
        }
        .project-btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px var(--accent-dim);
        }
        .project-btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border);
        }
        .project-btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Explore More */
        .explore-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: var(--sp-9);
        }
        .explore-more-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--sp-3);
          padding: var(--sp-4) var(--sp-7);
          background: transparent;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: var(--fs-body);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          transition: all 0.4s var(--ease-out);
          text-decoration: none;
        }
        .explore-more-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 30px var(--accent-dim);
          transform: scale(1.05);
        }
        .explore-more-btn:hover .explore-arrow {
          transform: translateX(4px);
        }
        .explore-arrow {
          transition: transform 0.3s var(--ease-out);
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
