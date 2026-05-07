import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { stats } from '../../data/projects';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null);
  const orbRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Headline split-text animation
      if (headlineRef.current) {
        const headlineEl = headlineRef.current;
        // Build spans but keep "people remember." as a nowrap unit
        const text = headlineEl.textContent.trim();
        // Split into segments: everything before "people remember." and "people remember." itself
        const nowrapPhrase = 'people remember.';
        const splitIdx = text.indexOf(nowrapPhrase);
        let html = '';
        
        if (splitIdx !== -1) {
          const before = text.substring(0, splitIdx);
          const phrase = text.substring(splitIdx);
          
          // Render "before" part normally (word by word with spaces)
          before.split('').forEach(char => {
            if (char === ' ') {
              html += ' ';
            } else {
              html += `<span class="hero-char" style="display:inline-block;opacity:0;transform:translateY(60px) rotateX(-40deg)">${char}</span>`;
            }
          });
          
          // Render "people remember." as nowrap unit
          html += `<span style="white-space:nowrap">`;
          phrase.split('').forEach(char => {
            if (char === ' ') {
              html += ' ';
            } else {
              html += `<span class="hero-char" style="display:inline-block;opacity:0;transform:translateY(60px) rotateX(-40deg)">${char}</span>`;
            }
          });
          html += `</span>`;
        } else {
          // Fallback: just split all chars
          text.split('').forEach(char => {
            if (char === ' ') {
              html += ' ';
            } else {
              html += `<span class="hero-char" style="display:inline-block;opacity:0;transform:translateY(60px) rotateX(-40deg)">${char}</span>`;
            }
          });
        }
        
        headlineEl.innerHTML = html;
        headlineEl.style.opacity = 1;

        tl.to(headlineEl.querySelectorAll('.hero-char'), {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.025,
          ease: 'power4.out'
        });
      }

      // Subline typewriter
      if (subRef.current) {
        const subEl = subRef.current;
        const fullText = subEl.dataset.text;
        subEl.textContent = '';
        subEl.style.opacity = 1;

        tl.to(subEl, {
          duration: 1.5,
          ease: 'none',
          onUpdate: function () {
            if (!subEl || !subEl.parentNode) return;
            const progress = this.progress();
            const len = Math.floor(progress * fullText.length);
            subEl.textContent = fullText.substring(0, len);
          }
        }, '-=0.3');

        // Glitch flicker after typewriter
        tl.to(subEl, {
          keyframes: [
            { opacity: 0.3, x: 3, duration: 0.05 },
            { opacity: 1, x: -2, duration: 0.05 },
            { opacity: 0.5, x: 1, duration: 0.05 },
            { opacity: 1, x: 0, duration: 0.05 },
          ],
        });
      }

      // CTA button
      if (ctaRef.current) {
        tl.fromTo(ctaRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
          '-=0.5'
        );
      }

      // Stats counter
      if (statsRef.current) {
        statsRef.current.style.opacity = 1;
        tl.fromTo(statsRef.current.querySelectorAll('.stat-item'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        );
      }

      // Animate counter numbers
      stats.forEach((stat, i) => {
        const el = heroRef.current?.querySelector(`.stat-value-${i}`);
        if (el && typeof stat.value === 'number') {
          tl.fromTo(el,
            {},
            {
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: function () {
                if (!el || !el.parentNode) return;
                const progress = this.progress();
                el.textContent = Math.floor(progress * stat.value);
              },
              onComplete: function() {
                if (el) el.textContent = stat.value;
              }
            },
            '-=1.2'
          );
        }
      });

      // Scroll indicator
      if (scrollRef.current) {
        tl.fromTo(scrollRef.current,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          '-=0.5'
        );
        gsap.to(scrollRef.current, {
          y: 8, repeat: -1, yoyo: true, duration: 1.2, ease: 'sine.inOut', delay: 4
        });
      }

      // Floating orb
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          y: -30, x: 20, repeat: -1, yoyo: true, duration: 6, ease: 'sine.inOut'
        });
      }
    });

    // Mouse parallax
    const handleMouse = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to(orbRef.current, { x: x * 40, y: y * 30, duration: 1, ease: 'power2.out' });
      if (particlesRef.current) {
        gsap.to(particlesRef.current, { x: x * -15, y: y * -10, duration: 1.5, ease: 'power2.out' });
      }
    };
    window.addEventListener('mousemove', handleMouse);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section ref={heroRef} className="hero section" id="hero">
      {/* Ambient gradient orb */}
      <div ref={orbRef} className="hero-orb" />

      {/* Particles */}
      <div ref={particlesRef} className="hero-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <h1 ref={headlineRef} className="hero-headline text-display" style={{ opacity: 0 }}>
          I design experiences that people remember.
        </h1>
        <p
          ref={subRef}
          className="hero-sub"
          data-text="UI/UX Designer — Turning complexity into clarity"
          style={{ opacity: 0 }}
        >
          UI/UX Designer — Turning complexity into clarity
        </p>

        <div ref={ctaRef} className="hero-cta-wrap" style={{ opacity: 0 }}>
          <button className="hero-cta magnetic-btn" onClick={scrollToWork}>
            <span>View Work</span>
            <ArrowDown size={18} />
          </button>
        </div>

        <div ref={statsRef} className="hero-stats" style={{ opacity: 0 }}>
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value-row">
                <span className={`stat-value stat-value-${i}`}>0</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={scrollRef} className="scroll-indicator" style={{ opacity: 0 }}>
        <ArrowDown size={20} />
        <span>Scroll</span>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 80px;
          padding-bottom: 0;
        }
        .hero-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-dim) 0%, transparent 70%);
          filter: blur(80px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          will-change: transform;
        }
        .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          will-change: transform;
        }
        .particle {
          position: absolute;
          background: var(--accent);
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.3; }
        }
        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--sp-6);
        }
        .hero-headline {
          max-width: 900px;
          perspective: 600px;
        }
        .hero-sub {
          font-size: var(--fs-body);
          color: var(--text-muted);
          font-weight: 400;
          letter-spacing: 0.05em;
          min-height: 1.6em;
        }
        .hero-cta-wrap {
          margin-top: var(--sp-4);
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: var(--sp-2);
          padding: var(--sp-4) var(--sp-7);
          background: var(--accent);
          color: var(--accent-text);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: var(--fs-body);
          border-radius: var(--radius-full);
          transition: all 0.35s var(--ease-out);
          position: relative;
          overflow: hidden;
        }
        .hero-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%);
          transition: transform 0.5s var(--ease-out);
        }
        .hero-cta:hover {
          transform: scale(1.06);
          box-shadow: 0 0 40px var(--accent-dim), 0 0 80px var(--accent-glow);
        }
        .hero-cta:hover::before {
          transform: translateX(100%);
        }
        .hero-stats {
          display: flex;
          gap: var(--sp-8);
          margin-top: var(--sp-8);
          flex-wrap: wrap;
          justify-content: center;
        }
        .stat-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: var(--sp-1);
          min-width: 100px;
        }
        .stat-value-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: var(--fs-h1);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }
        .stat-suffix {
          font-family: var(--font-display);
          font-size: var(--fs-h3);
          font-weight: 700;
          color: var(--accent);
          margin-left: 2px;
        }
        .stat-label {
          font-size: var(--fs-caption);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .scroll-indicator {
          position: absolute;
          bottom: var(--sp-7);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--sp-2);
          color: var(--text-dim);
          font-size: var(--fs-caption);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        @media (max-width: 768px) {
          .hero {
            padding-top: 60px;
          }
          .hero-orb {
            width: 300px;
            height: 300px;
          }
          .hero-stats {
            gap: var(--sp-5);
          }
          .stat-value {
            font-size: var(--fs-h2);
          }
          .stat-item {
            min-width: 80px;
          }
        }
      `}</style>
    </section>
  );
}
