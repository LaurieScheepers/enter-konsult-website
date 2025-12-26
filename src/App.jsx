import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, X, Minus, Plus } from 'lucide-react';

// --- Assets & Icons ---

// The "Forward Enter" - A mirror of the return key, moving Down and Right.
const ForwardEnterIcon = ({ className }) => (
  <svg
    viewBox="41.7 247 96.8 76.5"
    fill="currentColor"
    className={className}
  >
    <polygon points="108.9 264.8 99.4 274.2 115.1 288 53.9 288 53.9 247 41.7 247 41.7 300.2 113.3 300.2 99.4 314.6 108.5 323.5 138.5 293.9 108.9 264.8" />
  </svg>
);

// --- Data ---


const LOGO_PROJECTS = [
  { name: "Googol Vibe", logo: "/images/logos/googol-vibe.webp", link: 'https://googol-vibe.enterkonsult.com/', date: "2025-12", metadata: 'OPEN_SOURCE|Your Google Workspace, Unified|Gmail + Calendar + Drive + Tasks|AI Agent Ready (MCP)|Privacy-First. Local-Only. Yours.', stack: 'Electron, React, Vite, Python (Flask), Terraform, MCP Servers', role: 'CREATOR', summary: 'Free, open-source desktop app unifying Google Workspace. v1.0.0-beta.1 available for Mac (Windows coming soon). AI-ready via MCP servers. No cloud sync, no telemetry — your data stays local. GitHub: github.com/CodeTonight-SA/google-vibe-os | Patreon: patreon.com/cw/googol_vibe' },
  { name: "Claude Optim", logo: "/images/logos/claude-optim.webp", link: 'internal', date: "2025-12", metadata: 'FUTURE_TECH|AI Workflow Optimisation|60-70k Token Savings Per Session|Recursive Meta-Optimisation|⛓⟿∞', stack: 'Bash, Python, SQLite, CIPS-LANG (domain-specific compression language)', role: 'CREATOR', summary: 'Self-improving AI infrastructure with semantic embeddings, efficiency detection, and automatic skill generation. Saves 60k-70k tokens per session with recursive meta-optimisation and semantic pattern detection.' },
  { name: "REDR", logo: "/images/logos/redr.svg", link: 'coming_soon', date: "2025-08", metadata: 'PROP_TECH|Dubai Rental Market|Transparent Tenant-Landlord Trust|Escrow + Audit Trails|Real Estate Done Right.', stack: 'Next.js, TypeScript, Prisma, AWS, Terraform', role: 'KONSULT PARTNER', summary: 'Upcoming Disruptive PropTech Platform for the rental sector in Dubai. Digital banking integration with secure escrow accounts and auditable fund transfer logging, multi-tenant architecture with RBAC.' },
  { name: "Oculus Tech", logo: "/images/logos/oculus.webp", link: 'konsult', date: "2025-01", metadata: 'CON_TECH|Construction Document Control|Instant Drawing Revision Detection|Desktop → Cloud Migration|Spot the difference. Instantly.', stack: 'Python, AWS, Terraform, Desktop Integration', role: 'KONSULT PARTNER', summary: 'Enterprise Construction Technology SAAS Platform - UAE. AWS infrastructure provisioning and desktop-to-cloud migration strategy achieved. Terraform-managed deployments. Enterprise Auth' },
  { name: "NalaMatch", logo: "/images/logos/nalamatch.webp", link: 'coming_soon', date: "2025-11", metadata: 'GOOD_TECH|Domestic Workers and Childcare Providers ↔ Family Matching|Right Fit, First Time|ML Semantic Matching|Care starts with connection.', stack: 'FastAPI, PostgreSQL, pgvector, Railway, Supabase, Next.js, TypeScript', role: 'KONSULT PARTNER', summary: 'ML-powered domestic worker matching using sentence-transformers and pgvector for semantic similarity. WhatsApp bot integration. i18n language accessibility in the works using Lelapa AI.' },
  { name: "Soekit™", logo: "/images/logos/soekit.svg", link: 'https://soekit.ai', date: "2025-06", metadata: 'LEKKA_TECH|Afrikaans AI Access|Conversational AI in Your Mother Tongue|Streaming Resilience|"Hoe gaan dit, maat?"', stack: 'OpenAI API, MongoDB, WebSockets, Railway, Next.js, TypeScript', role: 'PRO_BONO', summary: 'Afrikaans AI chatbot with streaming resilience. FastAPI backend with MongoDB persistence, SendGrid email integration, and clean, accessible frontend deployment. UNDER_MAINTENANCE' },
  { name: "aitsa!", logo: "/images/logos/aitsa.webp", link: "https://aitsa.ai", date: "2025-04", metadata: 'INDIGENOUS_AI|Small Resource Language Access|Free AI for Marginalised Languages|Multi-language i18n|Every language deserves a voice.', stack: 'React, Vite, TypeScript, Tailwind, shadcn/ui, Vercel, Railway', role: 'PRO_BONO', summary: 'Free AI accessibility for indigenous African languages. React/Vite frontend, shadcn/ui, multi-language i18n architecture, Vercel, Railway. UNDER_MAINTENANCE' },
  { name: "Skeg", logo: "/images/logos/skeg.svg", link: 'konsult', date: "2024-01", metadata: 'CV_TECH|Factory Floor Analytics|Real-time Defect Detection|NVIDIA DeepStream|See what humans miss.', stack: 'C, Python, GStreamer, ZMQ, Docker, NVIDIA DeepStream', role: 'KONSULT TEAM LEAD', summary: 'Computer vision analytics platform for factory floors. Reduced manual QC time by 90%. Dynamic GStreamer pipeline for RTSP streams, Kalman filter tracking, ZMQ pub/sub for inter-process comms.' },
  { name: "Kwartel", logo: "/images/logos/kwartel.webp", link: "https://kwartel.io", date: "2023-01", metadata: 'LEKKA_TECH|Daily Afrikaans Word Game|3+ Years, Thousands of Daily Players|PWA|Woordraaispel - lekker!', stack: 'Vanilla JS, HTML5, CSS3, PWA, Service Worker', role: 'PRO_BONO', summary: 'Afrikaans daily word game with deterministic puzzle generation. Zero-dependency vanilla JS, offline-first PWA with service worker caching and zero dependencies. 3+ years history.' },
  { name: "VerifiedTalent", logo: "/images/logos/verifiedtalent.webp", link: "https://verifiedtalent.ai", date: "2024-05", metadata: 'HR_TECH|SAP Talent ↔ Recruiter Matching|Right Candidate, Faster|Dual Embedding AI|Talent verified. Time saved.', stack: 'Python, OpenAI Embeddings, TF-IDF, Cosine Similarity', role: 'KONSULT PARTNER', summary: 'AI-powered SAP talent-recruiter matching using dual embedding strategies. OpenAI vectors for semantic matching, TF-IDF for keyword precision, cosine similarity scoring.' },
  { name: "SwiftPour", logo: "/images/logos/swiftpour.webp", link: 'https://swiftpour.com/', date: "2023-01", metadata: 'LEKKA_TECH|Self-Service Beer|Stadium & Event Tech|IoT Hardware Integration|1, 2, 3, Press.', stack: 'IoT, Android, Node.js, Native Integration', role: 'KONSULT SUB-CONTRACT', summary: 'Self-service beer dispensing system for stadiums and events. IoT-enabled taps with mobile payment integration and real-time inventory tracking.' },
  { name: "YOUR_COMPANY_HERE", logo: "/images/logos/placeholder.svg", link: 'konsult', date: "2XXX-XX", metadata: 'YOUR_TECH|Your Vision, Realised|We Speak Business|_facta non verba_|Let\'s build.', isPlaceholder: true, stack: 'Your Stack', role: 'KONSULT PARTNER', summary: 'Your next big thing. Strategy-first technology \& business consultancy. We ask WHY before we write code.' },
];

const TARGET_AUDIENCE = [
  {
    id: "A",
    title: "Corporate Refugees",
    text: "Veterans with deep knowledge & capital, ready to solve entrenched problems. We've been there, done that, and we're ready to help you."
  },
  {
    id: "B",
    title: "SMEs (3+ Years)",
    text: "Established businesses needing digital guidance in the modern era. Moving from spreadsheets to IP to future-ready."
  },
  {
    id: "C",
    title: "Change Makers & Pioneers",
    text: "Transformation-focused organisations with purpose-driven leaders. Passion and empowerment."
  },
  {
    id: "D",
    title: "Non-Profits & PBO's",
    text: "Companies valuing diversity, inclusivity and innovation."
  }
];

// --- Components ---

const NavLink = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`text-xs font-mono uppercase tracking-widest px-2 py-1 transition-all duration-300 relative
      ${active ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}
    `}
  >
    {label}
    {active && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black"></span>}
  </button>
);


// --- Pages ---

const LandingPage = ({ goToPage, goToContact }) => (
  <div className="animate-fadeIn">
    {/* Hero Section */}
    <div className="pt-12 md:pt-24 pb-24 border-b border-gray-300">

      {/* Section A: Metadata + Heading Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8">
        {/* Left Col: Metadata */}
        <div className="col-span-1 lg:col-span-3 font-mono text-xs space-y-6 text-gray-500 pt-2">
          <div>
            <p className="mb-1 text-black">CONTEXT:</p>
            <p>BUSINESS STRATEGY</p>
            <p>TECH CONSULTANCY</p>
          </div>
          <div>
            <p className="mb-1 text-black">EST:</p>
            <p>2023</p>
            <p className="text-gray-500">REBRAND 2025</p>
          </div>
          <div>
            <p className="mb-1 text-black">STATUS:</p>
            <p className="text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
              ACCEPTING CLIENTS
            </p>
          </div>
        </div>

        {/* Right Col: Heading Only */}
        <div className="col-span-1 lg:col-span-9">
          <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.95] lg:leading-[0.85] text-black text-right lg:text-left">
            WE SPEAK <br />
            BUSINESS. <br />
            <span className="text-gray-400">
              <span className="lg:hidden block">NOT JUST</span>
              <span className="lg:hidden block">CODE.</span>
              <span className="hidden lg:inline">NOT JUST CODE.</span>
            </span>
          </h1>
        </div>
      </div>

      {/* Section B: Description + CTAs (full width on mobile) */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-12">
        <div className="lg:col-start-4 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-xl md:text-2xl leading-tight font-sans font-medium text-gray-800 max-w-md">
              A Technology Consultancy that solves business problems. We help you own your IP and control your future.
            </p>

            <div className="flex flex-col justify-end h-full gap-4 w-full md:w-auto">
              {/* Enter key - right aligned on mobile (keyboard position) */}
              <div className="flex justify-end">
                <button
                  onClick={() => goToPage('about')}
                  className="group flex items-center gap-4 bg-black text-white px-8 py-4 hover:bg-orange-600 transition-colors duration-300 shadow-xl"
                >
                  <span className="font-mono text-base tracking-widest uppercase">ENTER</span>
                  <ForwardEnterIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Spacebar - full width on mobile (keyboard metaphor) */}
              <button
                onClick={() => goToPage('showcase')}
                className="w-full md:w-auto border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
              >
                <span className="font-mono text-sm tracking-widest uppercase">SHOWCASE</span>
              </button>

              {/* Tagline */}
              <div className="text-right">
                <span className="font-mono text-[10px] tracking-widest uppercase text-gray-500 block">
                  PRIVATE AND PUBLIC.
                </span>
                <span
                  onClick={goToContact}
                  className="group font-mono text-[10px] tracking-widest uppercase text-orange-600 block cursor-pointer border-b border-orange-600/40 hover:border-orange-600 pt-1 pb-0.5 transition-all duration-300 hover:tracking-wider w-fit ml-auto">
                  LET'S BUILD <ArrowRight className="w-3 h-3 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Value Props - Horizontal Scroll style but static grid */}
    <div className="-mx-6 md:mx-0 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 border-b border-gray-300 bg-gray-100/50">
      {[
        { title: "STRATEGY FIRST", desc: "We ask 'Why' before we write a single line." },
        { title: "OWN YOUR IP", desc: "No third-party lockdowns. Assets you control." },
        { title: "TRANSPARENCY", desc: "Clear communication. No technical black boxes." }
      ].map((item, i) => (
        <div key={i} className="p-8 md:p-12 transition-colors duration-300 px-6 md:mx-0 md:px-8">
          <div className="font-mono text-xs text-orange-600 mb-4">0{i + 1}</div>
          <h3 className="font-sans font-bold text-xl tracking-tight mb-2">{item.title}</h3>
          <p className="font-sans text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const LogoCard = ({ logo, name, isSelected, isHovered, onHover, onSelect, isPlaceholder }) => (
  <div
    className={`aspect-square p-3 flex flex-col items-center justify-center bg-white/30 cursor-pointer transition-all duration-200 border-r border-b border-gray-300 group relative ${isSelected ? 'bg-white ring-2 ring-orange-600 ring-inset' : 'hover:bg-white/60'}`}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(null)}
    onClick={onSelect}
    tabIndex={-1}
  >
    <img src={logo} alt={name} loading="lazy" decoding="async" width="200" height="200" className={`max-h-20 sm:max-h-28 lg:max-h-36 max-w-[85%] object-contain transition-all duration-200 ${isSelected || isHovered ? 'grayscale-0 scale-105' : isPlaceholder ? 'grayscale-0' : 'grayscale hover:grayscale-0'}`} />
    {isPlaceholder && <span className="mt-2 font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-500 text-center">{name}</span>}
    {isHovered && !isSelected && !isPlaceholder && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-wider text-gray-500">click to view</span>}
  </div>
);

const FloatingCLI = ({ project, goToContact, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (isMaximized) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMaximized]);

  if (!project) return null;
  const lines = project.metadata.split('|');
  const tag = lines[0];
  const slug = project.name.replace(/\s+/g, '_').toLowerCase();
  const isUrl = project.link?.startsWith('http');
  const actionLabel = { internal: 'INTERNAL', coming_soon: 'COMING SOON', konsult: 'KONSULT' }[project.link] || (isUrl ? 'VISIT' : null);
  const handleAction = () => {
    if (isUrl) window.open(project.link, '_blank');
    else if (project.link) goToContact();
  };
  const baseClasses = "font-mono text-xs bg-[#1a1a1a] text-gray-300 shadow-2xl animate-fadeIn border border-gray-700 transition-all duration-300 flex flex-col";
  const positionClasses = isMaximized
    ? "fixed inset-2 sm:inset-4 lg:inset-12 rounded-lg z-[60] max-h-[100dvh]"
    : "fixed bottom-0 left-0 right-0 lg:absolute lg:bottom-auto lg:left-auto lg:top-0 lg:right-0 lg:w-96 rounded-t-lg lg:rounded-lg z-20 max-h-[70vh] lg:max-h-none overflow-hidden";
  return (
    <>
      {isMaximized && <div className="fixed inset-0 bg-black/60 z-[55]" onClick={onClose} />}
      <div className={`${baseClasses} ${positionClasses}`}>
        <div className="flex items-center justify-between px-3 py-2 bg-[#2d2d2d] border-b border-gray-700 shrink-0">
          <div className="flex items-center gap-1.5 group/traffic">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 sm:hover:bg-red-400 transition-colors flex items-center justify-center relative before:absolute before:inset-0 before:-m-4 sm:before:hidden" aria-label="Close"><X className="w-2 h-2 text-red-900/80 sm:opacity-0 sm:group-hover/traffic:opacity-100 transition-opacity" strokeWidth={3} /></button>
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-yellow-500 sm:hover:bg-yellow-400 transition-colors flex items-center justify-center relative before:absolute before:inset-0 before:-m-4 sm:before:hidden" aria-label="Minimize"><Minus className="w-2 h-2 text-yellow-900/80 sm:opacity-0 sm:group-hover/traffic:opacity-100 transition-opacity" strokeWidth={3} /></button>
            <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-green-500 sm:hover:bg-green-400 transition-colors flex items-center justify-center relative before:absolute before:inset-0 before:-m-4 sm:before:hidden" aria-label={isMaximized ? "Restore" : "Maximize"}><Plus className="w-2 h-2 text-green-900/80 sm:opacity-0 sm:group-hover/traffic:opacity-100 transition-opacity" strokeWidth={3} /></button>
          </div>
          <span className="text-gray-500 text-[10px]">~/{slug}</span>
          <span className="w-[52px]" />
        </div>
        <div className={`p-4 ${isMaximized ? 'p-6 sm:p-8 lg:p-12' : ''} space-y-3 ${isMaximized ? 'space-y-6' : ''} overflow-y-auto overflow-x-hidden overscroll-contain flex-1`}>
          <div className={`text-gray-500 ${isMaximized ? 'text-sm' : 'text-[11px]'}`}>
            <span className="text-green-400">$</span> cd {slug} && cat description.txt
          </div>
          <div className={`flex items-baseline gap-3 flex-wrap ${isMaximized ? 'gap-4' : ''}`}>
            <span className={`text-orange-500 font-bold shrink-0 ${isMaximized ? 'text-lg' : ''}`}>[{tag}]</span>
            <span className={`text-white font-bold tracking-tight break-all ${isMaximized ? 'text-3xl sm:text-4xl' : 'text-base'}`}>{project.name}</span>
          </div>
          {isMaximized && (
            <div className="space-y-4">
              <div className="space-y-2 text-sm border-l-2 border-gray-700 pl-4">
                <div><span className="text-gray-500">Launched:</span> <span className="text-gray-300">{project.date}</span></div>
                <div><span className="text-gray-500">Role:</span> <span className="text-gray-300">{project.role}</span></div>
                <div><span className="text-gray-500">Stack:</span> <span className="text-orange-400">{project.stack}</span></div>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{project.summary}</p>
            </div>
          )}
          <div className={`flex flex-col gap-1 text-gray-400 ${isMaximized ? 'gap-3 text-base sm:text-lg' : 'text-[13px]'}`}>
            {lines.slice(1).map((line, i) => (
              <span key={i} className="flex gap-2">
                <span className="text-gray-600">›</span>
                <span>{line.split(/(_[^_]+_)/).map((part, j) => part.startsWith('_') && part.endsWith('_') ? <em key={j} className="text-gray-300">{part.slice(1, -1)}</em> : part)}</span>
              </span>
            ))}
          </div>
          {project.link && (
            <button onClick={handleAction} className={`group w-full ${isMaximized ? 'max-w-md py-4 text-sm' : 'py-2.5 text-[10px]'} mt-2 uppercase tracking-widest border border-gray-600 text-orange-500 hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-colors flex items-center justify-center gap-2`}>
              {actionLabel} <ForwardEnterIcon className={`${isMaximized ? 'w-4 h-4' : 'w-3 h-3'} group-hover:translate-x-1 transition-transform`} />
            </button>
          )}
          {isMaximized && (
            <div className="pt-4 border-t border-gray-700 mt-4">
              <div className="text-gray-500 text-sm">PS: Impressed?</div>
              <div className="text-gray-500 text-sm mb-2">
                <span className="text-green-400">$</span> ./run_marketing.sh
              </div>
              <button
                onClick={goToContact}
                className="text-orange-500 hover:text-orange-400 text-sm uppercase tracking-widest transition-colors"
              >
                → We build these. Make contact.
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const LogoGrid = ({ goToContact }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const handleClose = () => setSelectedProject(hoveredProject);
  return (
    <div className="mb-12 sm:mb-16 relative">
      <div className="flex justify-between items-end pb-4 mb-4 border-b border-gray-300">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest">Portfolio</h3>
          <span className="font-mono text-[10px] text-gray-500 hidden sm:block">Select a project to explore</span>
        </div>
        <span className="font-mono text-xs text-gray-500">./PROJECT_GRID</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 border-t border-l border-gray-300" tabIndex={-1}>
        {LOGO_PROJECTS.map(project => (
          <LogoCard key={project.name} {...project} isSelected={selectedProject?.name === project.name} isHovered={hoveredProject?.name === project.name} onHover={(h) => setHoveredProject(h ? project : null)} onSelect={() => setSelectedProject(project)} />
        ))}
      </div>
      <FloatingCLI key={selectedProject?.name} project={selectedProject} goToContact={goToContact} onClose={handleClose} />
    </div>
  );
};

const ShowcasePage = ({ goToContact }) => (
  <div className="animate-slideUp pt-12">
    <div className="mb-12 border-b border-gray-300 pb-8 md:flex md:justify-between md:items-end">
      <div className="flex justify-between items-end md:block">
        <h2 className="text-6xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.85]">
          THE WORK
        </h2>
        <a
          href="https://www.codetonight.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="group font-mono text-[10px] tracking-widest uppercase text-orange-600 border-b border-orange-600/40 hover:border-orange-600 pb-0.5 transition-all duration-300 hover:tracking-wider whitespace-nowrap md:mt-2 md:block md:w-fit md:ml-auto"
        >
          ET ALIA <ArrowRight className="w-3 h-3 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <p className="font-mono text-xs text-gray-500 max-w-xs text-right mt-4 md:mt-0 ml-auto md:ml-0">
        BESPOKE SOLUTIONS FITTING UNIQUE BUSINESS VISIONS.
      </p>
    </div>

    <LogoGrid goToContact={goToContact} />

    {/* Post-Showcase CTA */}
    <div className="text-center py-8 border-t border-gray-300">
      <p className="font-mono text-sm text-gray-600 mb-4">Impressed by the work?</p>
      <button
        onClick={goToContact}
        className="group bg-black text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors inline-flex items-center gap-3"
      >
        Let's Build Yours <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const AboutPage = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
    if (res.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="animate-slideUp pt-12 pb-24">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-8">
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.9] mb-8">
            FROM CODETONIGHT<br />
            TO<span className="text-orange-600"> ENTER KONSULT.</span>
          </h2>
          <div className="text-xl md:text-2xl font-sans font-medium leading-relaxed space-y-8 border-l border-black pl-8">
            <p>
              We evolved because our clients needed more than just code. They needed a strategic partner.
            </p>
            <p className="text-gray-600">
              The problem with most dev shops is they start building before they understand the business. We start with the Strategic Foundation.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 bg-black text-white p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest border-b border-gray-700 pb-2">Our Philosophy</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex gap-2"><span className="text-orange-600">01</span> We will not build what should not exist</li>
              <li className="flex gap-2"><span className="text-orange-600">02</span> We transform complexity - KISS is paramount</li>
              <li className="flex gap-2"><span className="text-orange-600">03</span> We enforce strict quality control</li>
              <li className="flex gap-2"><span className="text-orange-600">04</span> We do what is RIGHT</li>
            </ul>
          </div>
          <ForwardEnterIcon className="w-32 h-32 self-end opacity-20" />
        </div>
      </div>

      {/* Audience Grid - Swiss Style */}
      <div className="mb-12 md:mb-24">
        <div className="flex justify-between items-end pb-4 mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest">Ideally Suited For</h3>
          <span className="font-mono text-xs text-gray-500">TARGET_AUDIENCE_MATRIX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t md:border-l border-gray-300">
          {TARGET_AUDIENCE.map((aud) => (
            <div key={aud.id} className="border-r border-b border-gray-300 p-8 -mx-6 px-6 md:mx-0 md:px-8">
              <div className="font-mono text-xs text-orange-600 mb-4">REF: {aud.id}</div>
              <h4 className="font-bold text-lg leading-tight mb-4">{aud.title}</h4>
              {aud.id === 'D' ? (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {aud.text}
                  <br className="md:hidden" />
                  <span className="block">South African built, global impact. Like us.</span>
                </p>
              ) : (
                <p className="text-sm text-gray-600 leading-relaxed">{aud.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* How We Engage - Process Section */}
      <div className="mb-24 pt-8 md:pt-16">
        <div className="flex justify-between items-end pb-4 mb-8">
          <h3 className="font-mono text-xs uppercase tracking-widest">How We Engage</h3>
          <span className="font-mono text-xs text-gray-500">PROCESS_FLOW</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Discovery Call", desc: "We listen. You talk. No pitch decks." },
            { num: "02", title: "Strategic Audit", desc: "Map the problem before writing code." },
            { num: "03", title: "Build & Iterate", desc: "Ship fast. Learn faster. Course correct." },
            { num: "04", title: "Transfer & Own", desc: "Your IP. Your control. Clean handover." }
          ].map((step) => (
            <div key={step.num}>
              <span className="text-orange-600 font-mono text-sm">{step.num}</span>
              <h4 className="font-bold text-lg mt-2 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* From the Founders */}
      <div className="mb-24">
        <div className="flex justify-between items-end pb-4 mb-8">
          <h3 className="font-mono text-xs uppercase tracking-widest">From the Founders</h3>
          <span className="font-mono text-xs text-gray-500">ORIGIN_STORY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8 text-lg leading-relaxed text-gray-800">
            <div>
              <h4 className="font-bold text-xl mb-4 text-black">The Beginning</h4>
              <p className="mb-4">
                My first job out of university was at <strong>Mxit</strong>. Within my first year, I was the primary maintainer of the J2ME client — the feature-phone app millions of South Africans used daily. I shipped Mxit v7 under <strong>Andy Volk</strong>, who later led Google's Developer Ecosystem across Sub-Saharan Africa.
              </p>
              <p className="mb-4">
                After Naspers acquired Mxit, there was a moment in a boardroom full of very senior people — including Paul Harris and GT Ferreira — where someone asked: <em>"Who is actively working on the feature-phone app every day?"</em>
              </p>
              <p className="mb-4">
                Silence.
              </p>
              <p className="mb-4">
                I put my hand up. "Err, me."
              </p>
              <p>
                Baptism by fire. Lesson learned: you can hold your own with legends if you've done the work.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-black">The End</h4>
              <p className="mb-4">
                A few years after releasing v7, Mxit closed down.
              </p>
              <p className="mb-4">
                By the end, there were only two mobile developers and the lead backend engineer remaining. I was one of them. I was there the day the servers were switched off.
              </p>
              <p>
                The new product under new leadership didn't fail because of bad code. We had great solutions. It failed because <strong>the right questions were never asked</strong> to figure out the problem that should have been solved. That lesson stayed with me.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-black">The Journey</h4>
              <p>
                Ten years passed. Two solo ventures. Countless lessons in what works and what doesn't. In 2023, I formed ENTER Konsult to solve the problem I'd watched destroy companies from the inside.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-black">How We're Different</h4>
              <p className="mb-4">
                We don't just write code. We ask the questions nobody else is asking.
              </p>
              <p>
                We sit with you, challenge assumptions, and if your plan needs rethinking, we tell you early — then show you the better path. It's cheaper to kill a bad idea in week one than carry it for five years.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-black">What This Means For You</h4>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-orange-600">›</span> We map the business problem before writing code</li>
                <li className="flex gap-2"><span className="text-orange-600">›</span> We tell you when the build is the wrong move</li>
                <li className="flex gap-2"><span className="text-orange-600">›</span> We design for ownership: clean handover, documentation, IP you control</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-black">The Team</h4>
              <p>
                I'm <strong>Laurie Scheepers</strong>, Technical Director. My wife <strong>Mia Roos</strong> is Co-Director — she holds the operational side together while I obsess over architecture and strategy. We're supported by a small, deliberate team. We take on work we believe in.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4 text-black">Why It Matters</h4>
              <p className="text-gray-600">
                I'm a father of two young boys. That changes how you think about what you leave behind. I build things that last — because I want to be proud of them when my kids understand why I worked so hard when they were young.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-black text-white p-6">
              <div className="font-mono text-xs text-gray-400 mb-2">FOUNDERS</div>
              <div className="font-bold text-xl mb-1">Laurie Scheepers</div>
              <div className="font-mono text-sm text-orange-500">Technical Director</div>
              <div className="text-sm text-gray-400 mt-4">20+ years building software</div>
              <div className="border-t border-gray-700 mt-4 pt-4">
                <div className="font-bold text-lg mb-1">Mia Roos</div>
                <div className="font-mono text-sm text-orange-500">Co-Director</div>
                <div className="text-sm text-gray-400 mt-2">Operations & Strategy</div>
              </div>
            </div>
            <div className="border border-gray-300 p-6 space-y-3 font-mono text-sm">
              <div className="text-gray-500">CURRENT WORK</div>
              <div className="flex justify-between"><span>PropTech</span><span className="text-orange-600">Dubai</span></div>
              <div className="flex justify-between"><span>ML Social Impact</span><span className="text-orange-600">SA</span></div>
              <div className="flex justify-between"><span>Construction Tech</span><span className="text-orange-600">UAE</span></div>
              <div className="flex justify-between"><span>aitsa! (pro bono)</span><span className="text-orange-600">Lelapa AI</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Website CTA */}
      <div className="mb-8 p-6 border border-gray-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-sm text-gray-700">
            <span className="text-orange-600 font-bold">PS:</span> Want a website like this? We build these.
          </p>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-black text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors flex items-center gap-2 w-fit"
          >
            Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Contact Form - Brutalist */}
      <div className="bg-white border border-gray-300 p-8 md:p-16 scroll-mt-20" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl font-sans font-bold tracking-tighter mb-6">STATE YOUR CASE.</h3>
            <p className="text-gray-600 text-lg mb-8">The problem. The vision. The stakes.<br /><br /><span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />We're listening.</span></p>

            <div className="space-y-4 font-mono text-sm text-gray-500">
              <p>EMAIL: LAURIE@ENTERKONSULT.COM</p>
              <p>LOC: CAPE TOWN, SOUTH AFRICA</p>
              <p>RATES: SCOPE-BASED</p>
            </div>
          </div>

          <form className="space-y-6" action="https://formspree.io/f/mrbnkdjd" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="_gotcha" className="hidden" />
            <div className="space-y-1">
              <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Name / Company</label>
              <input type="text" name="name" required placeholder="The decision maker." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans invalid:border-red-500 valid:border-green-600" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Direct Contact Email</label>
              <input type="email" name="email" required placeholder="Where we reply." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans invalid:border-red-500 valid:border-green-600" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Tell us more</label>
              <textarea name="message" rows="3" required placeholder="The brief." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans invalid:border-red-500 valid:border-green-600" />
            </div>
            {submitted ? (
              <div className="w-full bg-orange-600 text-white py-5 px-4 font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-center leading-relaxed">
                Message Received. We'll be in touch.
              </div>
            ) : (
              <button type="submit" className="w-full bg-black text-white py-4 font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors flex justify-center items-center gap-2">
                Initiate <ForwardEnterIcon className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToContact = () => {
    setActivePage('about');
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const pages = {
    home: <LandingPage goToPage={setActivePage} goToContact={goToContact} />,
    showcase: <ShowcasePage goToContact={goToContact} />,
    about: <AboutPage />
  };

  return (
    // Background color set to specific 'Paper Grey' to match screenshot warmth
    <div className="min-h-screen bg-[#EAEAEA] text-black font-sans selection:bg-orange-600 selection:text-white">

      {/* Skip link for keyboard navigation - WCAG AAA */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Navigation - Sticky & Minimal */}
      <header role="banner" className="sticky top-0 z-50 bg-[#EAEAEA]/90 backdrop-blur-sm border-b border-gray-300 h-16 flex items-center justify-between px-6 md:px-12">

        {/* LOGO COMPONENT */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none group"
          onClick={() => setActivePage('home')}
        >
          {/* Icon - Mirrored Return Key */}
          <div className="bg-transparent text-black group-hover:text-orange-600 transition-colors">
            <ForwardEnterIcon className="w-6 h-6" />
          </div>

          {/* Text Logo - Heavy Caps + Spaced Title Case */}
          <div className="flex items-baseline gap-1 leading-none">
            <span className="font-black text-xl tracking-tight">ENTER</span>
            <span className="text-xl font-light tracking-[0.15em] text-gray-600">Konsult</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6">
          <NavLink label="Home" active={activePage === 'home'} onClick={() => setActivePage('home')} />
          <NavLink label="Showcase" active={activePage === 'showcase'} onClick={() => setActivePage('showcase')} />
          <NavLink label="About" active={activePage === 'about'} onClick={() => setActivePage('about')} />
          <button
            onClick={goToContact}
            className="ml-4 bg-black text-white px-4 py-2 flex items-center gap-2 hover:bg-orange-600 transition-colors"
          >
            <span className="font-mono text-xs font-bold tracking-widest">ENTER</span>
            <ForwardEnterIcon className="w-3 h-3" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="sm:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#EAEAEA] pt-24 px-6 animate-fadeIn sm:hidden">
          <div className="flex flex-col gap-8">
            <button className="text-4xl font-sans font-bold text-left" onClick={() => { setActivePage('home'); setIsMenuOpen(false) }}>HOME</button>
            <button className="text-4xl font-sans font-bold text-left" onClick={() => { setActivePage('showcase'); setIsMenuOpen(false) }}>SHOWCASE</button>
            <button className="text-4xl font-sans font-bold text-left" onClick={() => { setActivePage('about'); setIsMenuOpen(false) }}>ABOUT</button>
            <button
              onClick={() => { goToContact(); setIsMenuOpen(false); }}
              className="text-4xl font-bold tracking-tighter flex items-center gap-3 bg-black text-white px-6 py-4 hover:bg-orange-600 transition-colors w-fit"
            >
              ENTER <ForwardEnterIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Container - Centered with Max Width */}
      <main id="main-content" role="main" className="max-w-screen-xl mx-auto px-6 md:px-12 pb-20">
        {pages[activePage]}
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="border-t border-gray-300 py-8 bg-[#EAEAEA] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center font-mono text-xs text-gray-500">
          <p>© 2025 ENTER KONSULT</p>
          <a
            href="https://www.linkedin.com/company/enterkonsult/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-orange-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;