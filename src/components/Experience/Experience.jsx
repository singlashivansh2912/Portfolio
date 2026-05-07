import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { designProcess } from '../../data/projects';
import { Search, BarChart3, Lightbulb, Palette, RefreshCw, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stepIcons = {
  Understand: Search,
  Research: BarChart3,
  Ideate: Lightbulb,
  Design: Palette,
  Iterate: RefreshCw,
  Deliver: Rocket,
};

export default function DesignProcess() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label reveal
      gsap.fromTo('.process-label',
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)', opacity: 1,
          duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-label', start: 'top 85%' }
        }
      );

      // Heading
      gsap.fromTo('.process-heading',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-heading', start: 'top 85%' }
        }
      );

      // Timeline line draw
      gsap.fromTo('.timeline-line-fill',
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.5, ease: 'none',
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1
          }
        }
      );

      // Cards alternate slide-in
      designProcess.forEach((_, i) => {
        const direction = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(`.process-item-${i}`,
          { x: direction, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: `.process-item-${i}`,
              start: 'top 85%'
            }
          }
        );
      });

      // Dots pulse
      gsap.fromTo('.process-dot',
        { scale: 0 },
        {
          scale: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(2)',
          scrollTrigger: { trigger: '.process-timeline', start: 'top 75%' }
        }
      );

      // Step labels
      gsap.fromTo('.process-step-badge',
        { scale: 0.5, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-timeline', start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="process">
      <div className="container">
        <div className="process-label section-label">Process</div>
        <h2 className="process-heading text-h1" style={{ marginBottom: 'var(--sp-9)' }}>
          My Design <span className="text-gradient">Thinking</span> Process
        </h2>

        <div className="process-timeline">
          <div className="timeline-line">
            <div ref={lineRef} className="timeline-line-fill" />
          </div>

          {designProcess.map((step, i) => {
            const Icon = stepIcons[step.title] || Search;
            return (
              <div key={i} className={`process-tl-item process-item-${i} ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="process-dot">
                  <div className="process-dot-pulse" />
                </div>
                <div className="process-step-badge">{String(step.step).padStart(2, '0')}</div>
                <div className="process-tl-card">
                  <div className="process-tl-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3 className="process-tl-title">{step.title}</h3>
                  <p className="process-tl-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .process-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: var(--sp-7) 0;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
          transform: translateX(-50%);
        }
        .timeline-line-fill {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, var(--accent), var(--accent-dim));
          transform-origin: top;
        }
        .process-tl-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          margin-bottom: var(--sp-8);
          padding: 0 var(--sp-7);
        }
        .process-tl-item.left {
          flex-direction: row-reverse;
          text-align: right;
        }
        .process-tl-item.right {
          text-align: left;
        }
        .process-dot {
          position: absolute;
          left: 50%;
          top: var(--sp-4);
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent);
          transform: translateX(-50%);
          z-index: 2;
          flex-shrink: 0;
        }
        .process-dot-pulse {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          opacity: 0.3;
          animation: processDotPulse 2s ease-in-out infinite;
        }
        @keyframes processDotPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.6); opacity: 0; }
        }
        .process-step-badge {
          position: absolute;
          left: 50%;
          top: -8px;
          transform: translateX(-50%) translateY(-100%);
          font-family: var(--font-display);
          font-size: var(--fs-caption);
          font-weight: 600;
          color: var(--accent);
          background: var(--bg-primary);
          padding: var(--sp-1) var(--sp-2);
        }
        .process-tl-card {
          width: calc(50% - var(--sp-9));
          padding: var(--sp-5) var(--sp-6);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: all 0.3s var(--ease-out);
        }
        .process-tl-card:hover {
          border-color: var(--border-light);
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
        .process-tl-item.left .process-tl-card {
          margin-right: auto;
          margin-left: var(--sp-9);
        }
        .process-tl-item.right .process-tl-card {
          margin-left: auto;
          margin-right: var(--sp-9);
        }
        .process-tl-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--accent-dim);
          color: var(--accent);
          margin-bottom: var(--sp-3);
        }
        .process-tl-item.left .process-tl-icon-wrap {
          margin-left: auto;
        }
        .process-tl-title {
          font-family: var(--font-display);
          font-size: var(--fs-h3);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--sp-2);
        }
        .process-tl-desc {
          font-size: var(--fs-small);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          .process-tl-item,
          .process-tl-item.left {
            flex-direction: row;
            text-align: left;
            padding-left: var(--sp-8);
            padding-right: 0;
          }
          .process-dot {
            left: 20px;
          }
          .process-step-badge {
            left: 20px;
          }
          .process-tl-card,
          .process-tl-item.left .process-tl-card,
          .process-tl-item.right .process-tl-card {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
          }
          .process-tl-item.left .process-tl-icon-wrap {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
