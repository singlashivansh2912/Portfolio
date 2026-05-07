import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c,u as l}from"./index-DY3iMxAa.js";var u=l(r(),1),d=n(),f=({size:e=16})=>(0,d.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,d.jsx)(`path`,{d:`M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z`})});a.registerPlugin(e);var p=[`overview`,`challenge`,`solution`,`decisions`,`role`,`techstack`,`impact`],m=[`Overview`,`Challenge`,`Solution`,`Key Decisions`,`My Role`,`Tech Stack`,`Impact`];function h(){let{id:e}=t(),n=c.find(t=>t.id===e),r=(0,u.useRef)(null),l=(0,u.useRef)(null),[h,g]=(0,u.useState)(`overview`);if((0,u.useEffect)(()=>{if(!n)return;let e=a.context(()=>{a.fromTo(`.pd-hero-img`,{scale:1.1},{scale:1,duration:1.2,ease:`power3.out`}),a.fromTo(`.pd-hero-title`,{y:60,opacity:0},{y:0,opacity:1,duration:.8,delay:.3,ease:`power3.out`}),a.fromTo(`.pd-hero-tagline`,{y:40,opacity:0},{y:0,opacity:1,duration:.8,delay:.5,ease:`power3.out`}),a.fromTo(`.pd-hero-links`,{y:30,opacity:0},{y:0,opacity:1,duration:.6,delay:.7,ease:`power3.out`}),document.querySelectorAll(`.pd-section`).forEach(e=>{a.fromTo(e,{y:50,opacity:0},{y:0,opacity:1,duration:.7,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 85%`}})})}),t=()=>{for(let e of[...p].reverse()){let t=document.getElementById(e);if(t&&window.scrollY>=t.offsetTop-200){g(e);break}}};return window.addEventListener(`scroll`,t,{passive:!0}),()=>{e.revert(),window.removeEventListener(`scroll`,t)}},[n]),!n)return(0,d.jsxs)(`div`,{className:`pd-not-found`,children:[(0,d.jsx)(`h2`,{children:`Project not found`}),(0,d.jsxs)(s,{to:`/`,className:`pd-back-link`,children:[(0,d.jsx)(o,{size:18}),` Back to Home`]})]});let _=n.detail;return(0,d.jsxs)(`article`,{className:`pd-page`,children:[(0,d.jsxs)(`section`,{ref:r,className:`pd-hero`,children:[(0,d.jsxs)(`div`,{className:`pd-hero-img-wrap`,children:[(0,d.jsx)(`img`,{src:n.detailImage,alt:n.title,className:`pd-hero-img`,loading:`lazy`}),(0,d.jsx)(`div`,{className:`pd-hero-overlay`})]}),(0,d.jsxs)(`div`,{className:`pd-hero-content container`,children:[(0,d.jsxs)(s,{to:`/`,className:`pd-back magnetic-btn`,children:[(0,d.jsx)(o,{size:18}),(0,d.jsx)(`span`,{children:`Back`})]}),(0,d.jsx)(`h1`,{className:`pd-hero-title text-display`,children:n.title}),(0,d.jsx)(`p`,{className:`pd-hero-tagline`,children:n.tagline}),(0,d.jsxs)(`div`,{className:`pd-hero-links`,children:[n.liveDemo&&(0,d.jsxs)(`a`,{href:n.liveDemo,target:`_blank`,rel:`noopener noreferrer`,className:`pd-btn pd-btn-primary magnetic-btn`,children:[(0,d.jsx)(i,{size:16}),(0,d.jsx)(`span`,{children:`Live Demo`})]}),n.github&&(0,d.jsxs)(`a`,{href:n.github,target:`_blank`,rel:`noopener noreferrer`,className:`pd-btn pd-btn-secondary magnetic-btn`,children:[(0,d.jsx)(f,{size:16}),(0,d.jsx)(`span`,{children:`GitHub`})]})]})]})]}),(0,d.jsxs)(`div`,{className:`pd-layout container`,children:[(0,d.jsx)(`nav`,{className:`pd-sidenav`,children:(0,d.jsx)(`ul`,{children:p.map((e,t)=>(0,d.jsx)(`li`,{children:(0,d.jsx)(`a`,{href:`#${e}`,className:`pd-nav-link ${h===e?`active`:``}`,onClick:t=>{t.preventDefault();let n=document.getElementById(e);n&&(window.__lenis?window.__lenis.scrollTo(n,{offset:-100,duration:1}):n.scrollIntoView({behavior:`smooth`}))},children:m[t]})},e))})}),(0,d.jsxs)(`div`,{ref:l,className:`pd-content`,children:[(0,d.jsxs)(`section`,{id:`overview`,className:`pd-section`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`Overview`}),(0,d.jsx)(`p`,{className:`pd-text`,children:_.overview})]}),(0,d.jsxs)(`section`,{id:`challenge`,className:`pd-section`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`The Challenge`}),(0,d.jsx)(`p`,{className:`pd-text`,children:_.challenge})]}),(0,d.jsxs)(`section`,{id:`solution`,className:`pd-section`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`The Solution`}),(0,d.jsx)(`p`,{className:`pd-text`,children:_.solution})]}),(0,d.jsxs)(`section`,{id:`decisions`,className:`pd-section`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`Key Decisions`}),(0,d.jsx)(`ul`,{className:`pd-list`,children:_.keyDecisions.map((e,t)=>(0,d.jsx)(`li`,{className:`pd-list-item`,children:e},t))})]}),(0,d.jsxs)(`section`,{id:`role`,className:`pd-section`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`My Role`}),(0,d.jsx)(`p`,{className:`pd-text pd-role-badge`,children:_.role})]}),(0,d.jsxs)(`section`,{id:`techstack`,className:`pd-section`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`Tech Stack`}),(0,d.jsx)(`div`,{className:`pd-tech-grid`,children:_.techStack.map((e,t)=>(0,d.jsx)(`span`,{className:`pd-tech-tag`,children:e},t))})]}),(0,d.jsxs)(`section`,{id:`impact`,className:`pd-section`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`Impact`}),(0,d.jsx)(`ul`,{className:`pd-impact-list`,children:_.impact.map((e,t)=>(0,d.jsx)(`li`,{className:`pd-impact-item`,children:e},t))})]}),(n.liveDemo||n.github)&&(0,d.jsxs)(`section`,{className:`pd-section pd-external`,children:[(0,d.jsx)(`h2`,{className:`pd-section-title`,children:`External Links`}),(0,d.jsxs)(`div`,{className:`pd-external-links`,children:[n.liveDemo&&(0,d.jsxs)(`a`,{href:n.liveDemo,target:`_blank`,rel:`noopener noreferrer`,className:`pd-ext-card`,children:[(0,d.jsx)(i,{size:20}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`pd-ext-label`,children:`Live Project`}),(0,d.jsx)(`span`,{className:`pd-ext-url`,children:new URL(n.liveDemo).hostname})]})]}),n.github&&(0,d.jsxs)(`a`,{href:n.github,target:`_blank`,rel:`noopener noreferrer`,className:`pd-ext-card`,children:[(0,d.jsx)(f,{size:20}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`pd-ext-label`,children:`Source Code`}),(0,d.jsx)(`span`,{className:`pd-ext-url`,children:`github.com`})]})]})]})]})]})]}),(0,d.jsx)(`style`,{children:`
        .pd-page { padding-bottom: var(--sp-10); }
        .pd-not-found { min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--sp-5); }
        .pd-back-link { display: inline-flex; align-items: center; gap: var(--sp-2); color: var(--accent); font-weight: 500; }

        /* Hero */
        .pd-hero { position: relative; min-height: 70vh; display: flex; align-items: flex-end; overflow: hidden; }
        .pd-hero-img-wrap { position: absolute; inset: 0; }
        .pd-hero-img { width: 100%; height: 100%; object-fit: cover; }
        .pd-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-primary) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.3) 100%); }
        .pd-hero-content { position: relative; z-index: 2; padding-bottom: var(--sp-9); }
        .pd-back { display: inline-flex; align-items: center; gap: var(--sp-2); color: var(--text-secondary); font-size: var(--fs-small); font-weight: 500; margin-bottom: var(--sp-6); padding: var(--sp-2) var(--sp-4); border: 1px solid var(--border); border-radius: var(--radius-full); transition: all 0.3s var(--ease-out); text-decoration: none; }
        .pd-back:hover { color: var(--accent); border-color: var(--accent); }
        .pd-hero-title { margin-bottom: var(--sp-3); font-size: clamp(2.5rem, 6vw, 4.5rem); }
        .pd-hero-tagline { font-size: var(--fs-h3); color: var(--text-secondary); margin-bottom: var(--sp-6); }
        .pd-hero-links { display: flex; gap: var(--sp-4); flex-wrap: wrap; }
        .pd-btn { display: inline-flex; align-items: center; gap: var(--sp-2); padding: var(--sp-3) var(--sp-6); border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 600; font-size: var(--fs-small); transition: all 0.35s var(--ease-out); text-decoration: none; }
        .pd-btn-primary { background: var(--accent); color: var(--accent-text); }
        .pd-btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 30px var(--accent-dim); }
        .pd-btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-light); }
        .pd-btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

        /* Layout */
        .pd-layout { display: grid; grid-template-columns: 200px 1fr; gap: var(--sp-9); padding-top: var(--sp-9); }

        /* Side nav */
        .pd-sidenav { position: sticky; top: 120px; height: fit-content; }
        .pd-sidenav ul { list-style: none; display: flex; flex-direction: column; gap: var(--sp-2); border-left: 1px solid var(--border); padding-left: var(--sp-4); }
        .pd-nav-link { font-size: var(--fs-small); color: var(--text-muted); font-weight: 500; transition: all 0.3s; display: block; padding: var(--sp-1) 0; text-decoration: none; }
        .pd-nav-link:hover { color: var(--text-primary); }
        .pd-nav-link.active { color: var(--accent); }

        /* Content */
        .pd-content { display: flex; flex-direction: column; gap: var(--sp-9); }
        .pd-section { scroll-margin-top: 100px; }
        .pd-section-title { font-family: var(--font-display); font-size: var(--fs-h2); font-weight: 600; color: var(--text-primary); margin-bottom: var(--sp-5); position: relative; padding-bottom: var(--sp-3); }
        .pd-section-title::after { content: ''; position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--accent); border-radius: 2px; }
        .pd-text { font-size: var(--fs-body); color: var(--text-secondary); line-height: 1.8; }

        /* Lists */
        .pd-list { display: flex; flex-direction: column; gap: var(--sp-3); }
        .pd-list-item { font-size: var(--fs-body); color: var(--text-secondary); line-height: 1.7; padding-left: var(--sp-5); position: relative; }
        .pd-list-item::before { content: ''; position: absolute; left: 0; top: 10px; width: 8px; height: 8px; border-radius: 2px; background: var(--accent); }

        /* Role */
        .pd-role-badge { display: inline-block; padding: var(--sp-3) var(--sp-6); background: var(--accent-dim); border: 1px solid var(--accent); border-radius: var(--radius-full); color: var(--accent); font-weight: 600; font-family: var(--font-display); }

        /* Tech Stack */
        .pd-tech-grid { display: flex; flex-wrap: wrap; gap: var(--sp-3); }
        .pd-tech-tag { padding: var(--sp-2) var(--sp-5); background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-full); font-size: var(--fs-small); color: var(--text-secondary); font-weight: 500; transition: all 0.3s var(--ease-out); }
        .pd-tech-tag:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); transform: translateY(-2px); }

        /* Impact */
        .pd-impact-list { display: flex; flex-direction: column; gap: var(--sp-4); }
        .pd-impact-item { font-size: var(--fs-body); color: var(--text-secondary); line-height: 1.7; padding: var(--sp-4) var(--sp-5); background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-md); position: relative; padding-left: var(--sp-7); transition: all 0.3s var(--ease-out); }
        .pd-impact-item::before { content: '✦'; position: absolute; left: var(--sp-4); top: var(--sp-4); color: var(--accent); font-size: 14px; }
        .pd-impact-item:hover { border-color: var(--border-light); transform: translateX(4px); }

        /* External Links */
        .pd-external-links { display: flex; gap: var(--sp-4); flex-wrap: wrap; }
        .pd-ext-card { display: flex; align-items: center; gap: var(--sp-4); padding: var(--sp-5) var(--sp-6); background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text-secondary); transition: all 0.3s var(--ease-out); text-decoration: none; min-width: 240px; }
        .pd-ext-card:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
        .pd-ext-label { display: block; font-family: var(--font-display); font-weight: 600; color: var(--text-primary); font-size: var(--fs-body); }
        .pd-ext-url { font-size: var(--fs-caption); color: var(--text-muted); }

        @media (max-width: 900px) {
          .pd-layout { grid-template-columns: 1fr; }
          .pd-sidenav { position: relative; top: 0; overflow-x: auto; }
          .pd-sidenav ul { flex-direction: row; border-left: none; border-bottom: 1px solid var(--border); padding-left: 0; padding-bottom: var(--sp-3); gap: var(--sp-4); }
          .pd-hero { min-height: 50vh; }
          .pd-hero-title { font-size: clamp(2rem, 5vw, 3rem); }
        }
        @media (max-width: 600px) {
          .pd-hero { min-height: 40vh; }
          .pd-ext-card { min-width: 100%; }
        }
      `})]})}export{h as default};