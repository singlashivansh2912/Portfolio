import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    const handleElementHover = () => {
      document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
        el.addEventListener('mouseenter', () => setHoverState('pointer'));
        el.addEventListener('mouseleave', () => setHoverState('default'));
      });
      document.querySelectorAll('[data-cursor="view"]').forEach(el => {
        el.addEventListener('mouseenter', () => setHoverState('view'));
        el.addEventListener('mouseleave', () => setHoverState('default'));
      });
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseleave', handleLeave);

    // Delay to catch dynamically rendered elements
    setTimeout(handleElementHover, 500);
    const observer = new MutationObserver(() => {
      setTimeout(handleElementHover, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Animation loop
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      // Ring follows with lerp
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseleave', handleLeave);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hoverState} ${isVisible ? 'visible' : ''}`}
      >
        {hoverState === 'view' && <span className="cursor-label">View</span>}
      </div>
      <div
        ref={ringRef}
        className={`cursor-ring ${hoverState} ${isVisible ? 'visible' : ''}`}
      />
      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: var(--z-cursor);
          opacity: 0;
          transition: width 0.3s var(--ease-out),
                      height 0.3s var(--ease-out),
                      opacity 0.3s,
                      background 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          mix-blend-mode: difference;
          will-change: transform;
        }
        .cursor-dot.visible { opacity: 1; }
        .cursor-dot.pointer {
          width: 50px;
          height: 50px;
          background: var(--accent);
          opacity: 0.4;
          mix-blend-mode: normal;
        }
        .cursor-dot.view {
          width: 80px;
          height: 80px;
          background: var(--accent);
          opacity: 0.9;
          mix-blend-mode: normal;
        }
        .cursor-label {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: var(--bg-primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1.5px solid var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: var(--z-cursor);
          opacity: 0;
          transition: width 0.35s var(--ease-out),
                      height 0.35s var(--ease-out),
                      opacity 0.35s,
                      border-color 0.3s;
          will-change: transform;
        }
        .cursor-ring.visible { opacity: 0.4; }
        .cursor-ring.pointer {
          width: 60px;
          height: 60px;
          opacity: 0;
        }
        .cursor-ring.view {
          width: 90px;
          height: 90px;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
