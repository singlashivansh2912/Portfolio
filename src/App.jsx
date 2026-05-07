import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import CustomCursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SelectedWork from './components/SelectedWork/SelectedWork';
import About from './components/About/About';
import DesignProcess from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const ProjectDetail = lazy(() => import('./components/ProjectDetail/ProjectDetail'));

gsap.registerPlugin(ScrollTrigger);

function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'power4.inOut', onComplete
        });
      }
    });
    const firstChars = firstRef.current?.querySelectorAll('.pre-char') || [];
    const lastChars = lastRef.current?.querySelectorAll('.pre-char') || [];
    const rings = preloaderRef.current?.querySelectorAll('.orbital-ring') || [];
    tl.fromTo(rings, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'back.out(1.7)' });
    tl.fromTo(dotRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' }, '-=0.4');
    tl.fromTo(firstChars, { y: 50, opacity: 0, rotateX: -90 }, { y: 0, opacity: 1, rotateX: 0, duration: 0.6, stagger: 0.04, ease: 'power4.out' }, '-=0.2');
    tl.fromTo(lastChars, { y: 30, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.03, ease: 'power3.out' }, '-=0.3');
    tl.to({}, { duration: 0.6 });
    tl.to([...firstChars, ...lastChars], { y: -40, opacity: 0, duration: 0.35, stagger: 0.015, ease: 'power3.in' });
    tl.to(rings, { scale: 2, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power2.in' }, '-=0.3');
    tl.to(dotRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: 'power2.in' }, '-=0.4');
  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-orbital">
        <div className="orbital-ring ring-1" />
        <div className="orbital-ring ring-2" />
        <div className="orbital-ring ring-3" />
        <div ref={dotRef} className="orbital-dot" />
      </div>
      <div className="preloader-name">
        <div ref={firstRef} className="preloader-first">
          {'Shivansh'.split('').map((c, i) => <span key={i} className="pre-char">{c}</span>)}
        </div>
        <div ref={lastRef} className="preloader-last">
          {'Singla'.split('').map((c, i) => <span key={i} className="pre-char">{c}</span>)}
        </div>
      </div>
    </div>
  );
}

function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    const fn = () => {
      const t = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current && t > 0) barRef.current.style.transform = `scaleX(${window.scrollY / t})`;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div ref={barRef} className="scroll-progress" />;
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <About />
      <DesignProcess />
      <Contact />
    </main>
  );
}

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Page not found</p>
      <a href="/" style={{ padding: '0.75rem 2rem', background: 'var(--accent)', color: 'var(--accent-text)', borderRadius: '999px', fontWeight: 600, textDecoration: 'none' }}>Go Home</a>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    const t = setTimeout(() => ScrollTrigger.refresh(true), 300);
    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 40, height: 40, border: '3px solid var(--border)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
    </div>
  );
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const [hasShownPreloader, setHasShownPreloader] = useState(false);
  const showPreloader = !hasShownPreloader && location.pathname === '/';

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smooth: true });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    return () => { window.__lenis = null; lenis.destroy(); };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const attach = () => {
      const btns = document.querySelectorAll('.magnetic-btn');
      const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        gsap.to(e.currentTarget, { x: (e.clientX - r.left - r.width / 2) * 0.2, y: (e.clientY - r.top - r.height / 2) * 0.2, duration: 0.3, ease: 'power2.out' });
      };
      const onLeave = (e) => gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      btns.forEach(b => { b.addEventListener('mousemove', onMove); b.addEventListener('mouseleave', onLeave); });
      return () => btns.forEach(b => { b.removeEventListener('mousemove', onMove); b.removeEventListener('mouseleave', onLeave); });
    };
    const timer = setTimeout(attach, 200);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  const handlePreloaderComplete = () => { setIsLoaded(true); setHasShownPreloader(true); };

  useEffect(() => {
    if (location.pathname !== '/') { setIsLoaded(true); setHasShownPreloader(true); }
  }, []);

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {isLoaded && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <div className="grain-overlay" />
        </>
      )}
    </>
  );
}
