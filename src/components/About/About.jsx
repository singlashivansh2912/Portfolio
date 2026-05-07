import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { tools } from '../../data/projects';
import photoImg from '../../assets/Photo.png';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label clip-path reveal
      gsap.fromTo('.about-label',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)', opacity: 1,
          duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-label', start: 'top 85%' }
        }
      );

      // Text lines fade up
      gsap.fromTo('.about-line',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-text-content', start: 'top 80%' }
        }
      );

      // Photo mask reveal
      gsap.fromTo('.about-photo-mask',
        { clipPath: 'circle(0% at 50% 50%)' },
        {
          clipPath: 'circle(75% at 50% 50%)',
          duration: 1.2, ease: 'power3.inOut',
          scrollTrigger: { trigger: '.about-photo-mask', start: 'top 75%' }
        }
      );

      // Quote highlight sweep
      gsap.fromTo('.highlight-sweep',
        { backgroundSize: '0% 40%' },
        {
          backgroundSize: '100% 40%',
          duration: 0.8, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.highlight-sweep', start: 'top 80%' }
        }
      );

      // Tools grid pop-in
      gsap.fromTo('.tool-item',
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: '.tools-grid', start: 'top 85%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="about">
      <div className="container">
        <div className="about-label section-label">About</div>

        <div className="about-grid">
          <div className="about-text-content">
            <h2 className="about-line text-h1" style={{ marginBottom: 'var(--sp-6)' }}>
              Designing with <span className="text-gradient">purpose</span>,<br />
              building with empathy.
            </h2>

            <p className="about-line about-p">
              I'm a UI/UX Designer who believes great design is invisible — it just works. 
              With 2+ years of experience shipping products in gaming, healthcare, and enterprise, 
              I've learned that the best interfaces are born from deep user understanding.
            </p>

            <p className="about-line about-p">
              My approach combines strategic thinking with meticulous craft. I don't just push pixels — 
              I solve problems, challenge assumptions, and obsess over the details that make 
              experiences feel effortless.
            </p>

            <blockquote className="about-line about-quote">
              "<span className="highlight-sweep">Design is not just what it looks like. Design is how it works</span> 
              — and how it makes people feel."
            </blockquote>
          </div>

          <div className="about-visual">
            <div className="about-photo-mask">
              <div className="about-photo-container">
                <img
                  ref={photoRef}
                  src={photoImg}
                  alt="Shiva — Designer"
                  className="about-photo-img"
                />
              </div>
            </div>
            <div className="about-decorative-ring" />
          </div>
        </div>

        {/* Tools Marquee */}
        <div className="tools-marquee-wrap">
          <div className="tools-marquee">
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <span key={i} className="marquee-item">
                {tool} <span className="marquee-dot">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="tools-section">
          <h3 className="about-line text-h3" style={{ marginBottom: 'var(--sp-5)', color: 'var(--text-secondary)' }}>
            Tools & Skills
          </h3>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <div key={i} className="tool-item">
                <span className="tool-name">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: var(--sp-9);
          align-items: center;
          margin-bottom: var(--sp-9);
        }
        .about-p {
          font-size: var(--fs-body);
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: var(--sp-5);
        }
        .about-quote {
          font-family: var(--font-display);
          font-size: var(--fs-h3);
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.5;
          padding-left: var(--sp-5);
          border-left: 3px solid var(--accent);
          margin-top: var(--sp-6);
        }
        .highlight-sweep {
          background-image: linear-gradient(var(--accent-dim), var(--accent-dim));
          background-repeat: no-repeat;
          background-position: left bottom;
          background-size: 0% 40%;
          padding: 0 4px;
        }
        .about-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .about-photo-mask {
          width: 320px;
          height: 380px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .about-photo-container {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-elevated));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .about-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: var(--radius-xl);
          filter: brightness(0.95) contrast(1.05);
          transition: transform 0.6s var(--ease-out), filter 0.6s var(--ease-out);
        }
        .about-photo-mask:hover .about-photo-img {
          transform: scale(1.05);
          filter: brightness(1) contrast(1.1);
        }
        .about-decorative-ring {
          position: absolute;
          width: 360px;
          height: 420px;
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          top: 20px;
          left: calc(50% - 160px);
          pointer-events: none;
          z-index: 1;
          animation: ringFloat 4s ease-in-out infinite;
        }
        @keyframes ringFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(8px, -8px) rotate(2deg); }
        }

        /* Marquee */
        .tools-marquee-wrap {
          overflow: hidden;
          margin-bottom: var(--sp-8);
          padding: var(--sp-5) 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }
        .tools-marquee {
          display: flex;
          gap: var(--sp-5);
          white-space: nowrap;
          animation: marqueeScroll 20s linear infinite;
          width: max-content;
        }
        .marquee-item {
          font-family: var(--font-display);
          font-size: var(--fs-h3);
          font-weight: 500;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: var(--sp-5);
        }
        .marquee-dot { color: var(--accent); font-size: 10px; }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        /* Tools Grid */
        .tools-section { margin-top: var(--sp-5); }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: var(--sp-3);
        }
        .tool-item {
          padding: var(--sp-3) var(--sp-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          text-align: center;
          transition: all 0.3s var(--ease-out);
        }
        .tool-item:hover {
          border-color: var(--accent);
          background: var(--accent-dim);
          transform: translateY(-4px);
        }
        .tool-name {
          font-size: var(--fs-small);
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
        }
        .tool-item:hover .tool-name {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: var(--sp-7);
          }
          .about-visual { order: -1; }
          .about-photo-mask {
            width: 240px;
            height: 280px;
          }
          .about-decorative-ring {
            width: 280px;
            height: 320px;
            left: calc(50% - 120px);
          }
        }
      `}</style>
    </section>
  );
}
