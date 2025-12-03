import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Briefcase, Layers, Hexagon, Target, Zap, Users, Coffee, Plus } from 'lucide-react';

// --- Assets & Icons ---

// The "Forward Enter" - A mirror of the return key, moving Down and Right.
const ForwardEnterIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="square" 
    strokeLinejoin="miter" 
    className={className}
  >
    <path d="M4 9 V 15 H 15" />
    <path d="M13 12 L 16 15 L 13 18" />
  </svg>
);

// --- Data ---

const PORTFOLIO_ITEMS = [
  {
    id: "01",
    client: "PROPTECH_GULF",
    title: "Gulf Real Estate Disruption",
    desc: "Multi-stakeholder property platform with bank-grade escrow, government API integration, and tamper-proof audit trails.",
    tags: ["PROPTECH", "IP OWNERSHIP"],
    date: "11.2024"
  },
  {
    id: "02",
    client: "VISION_FACTORY",
    title: "Factory Floor Intelligence",
    desc: "Real-time computer vision tracking worker activity on factory floors. Time-series AI analysis for operational optimisation.",
    tags: ["AI/ML", "ENTERPRISE"],
    date: "08.2024"
  },
  {
    id: "03",
    client: "MOTHER_TONGUE",
    title: "Indigenous Language AI",
    desc: "Foundational language models bringing AI capabilities to underserved African languages. Because access shouldn't depend on speaking English.",
    tags: ["FREE WORK", "ACCESSIBILITY"],
    date: "06.2024"
  },
  {
    id: "04",
    client: "LEGACY_CLOUD",
    title: "Desktop to Cloud Migration",
    desc: "Transformed a 15-year-old Windows application into cloud-licensed SaaS. Device-locked licensing, infrastructure as code.",
    tags: ["SME TRANSFORMATION", "IP OWNERSHIP"],
    date: "10.2024"
  },
  {
    id: "05",
    client: "TALENT_MATCH",
    title: "Niche Professional Matching",
    desc: "Intelligent matching platform for specialised talent pools. Python-powered algorithm serving enterprise recruiters across Africa.",
    tags: ["MATCHING ALGO", "ENTERPRISE"],
    date: "03.2023"
  },
  {
    id: "06",
    client: "WORD_PLAY",
    title: "Daily Word Game",
    desc: "Thousands of daily players. Free. Because some things we build just for fun.",
    tags: ["FUN WORK", "CONSUMER"],
    date: "01.2024"
  }
];

const TARGET_AUDIENCE = [
  {
    id: "A",
    title: "Corporate Refugees",
    text: "Veterans with deep knowledge & capital, ready to solve entrenched problems."
  },
  {
    id: "B",
    title: "SMEs (3+ Years)",
    text: "Established businesses needing digital transformation. Moving from spreadsheets to IP."
  },
  {
    id: "C",
    title: "BEE & Innovation",
    text: "Transformation-focused companies allocating capital for genuine innovation."
  },
  {
    id: "D",
    title: "Pro-Bono & Fun",
    text: "Non-profits needing access. Passion projects that keep skills sharp."
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

const Divider = () => <div className="w-full h-[1px] bg-gray-300 my-8 md:my-12" />;

// --- Pages ---

const LandingPage = ({ goToPage }) => (
  <div className="animate-fadeIn">
    {/* Hero Section */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 md:pt-24 pb-24 border-b border-gray-300">
      
      {/* Left Col: Metadata */}
      <div className="lg:col-span-3 font-mono text-xs space-y-6 text-gray-500 pt-2">
        <div>
          <p className="mb-1 text-black">CONTEXT:</p>
          <p>BUSINESS STRATEGY</p>
          <p>TECH CONSULTANCY</p>
        </div>
        <div>
          <p className="mb-1 text-black">EST:</p>
          <p>2024 (REBRAND)</p>
        </div>
        <div>
          <p className="mb-1 text-black">STATUS:</p>
          <p className="text-orange-600 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"/> 
            ACCEPTING CLIENTS
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-9 space-y-12">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.85] text-black">
          WE SPEAK <br/>
          BUSINESS. <br/>
          <span className="text-gray-400">NOT JUST CODE.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <p className="text-xl md:text-2xl leading-tight font-sans font-medium text-gray-800 max-w-md">
            A Technology Consultancy that solves business problems. We help you own your IP and control your future.
          </p>
          
          <div className="flex flex-col items-start justify-end h-full">
            <button 
              onClick={() => goToPage('about')}
              className="group flex items-center gap-4 bg-black text-white px-8 py-4 hover:bg-orange-600 transition-colors duration-300 shadow-xl"
            >
              <span className="font-mono text-sm tracking-widest uppercase">Start Strategy</span>
              <ForwardEnterIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Value Props - Horizontal Scroll style but static grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 border-b border-gray-300 bg-gray-100/50">
      {[
        { title: "STRATEGY FIRST", desc: "We ask 'Why' before we write a single line." },
        { title: "OWN YOUR IP", desc: "No third-party lockdowns. Assets you control." },
        { title: "TRANSPARENCY", desc: "Clear communication. No technical black boxes." }
      ].map((item, i) => (
        <div key={i} className="p-8 md:p-12 hover:bg-white transition-colors duration-300">
          <div className="font-mono text-xs text-orange-600 mb-4">0{i+1}</div>
          <h3 className="font-sans font-bold text-xl tracking-tight mb-2">{item.title}</h3>
          <p className="font-sans text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const ShowcasePage = () => (
  <div className="animate-slideUp pt-12">
    <div className="mb-12 border-b border-gray-300 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <h2 className="text-6xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.85]">
        THE WORK
      </h2>
      <p className="font-mono text-xs text-gray-500 max-w-xs text-right">
        BESPOKE SOLUTIONS FITTING UNIQUE BUSINESS VISIONS.
      </p>
    </div>

    <div className="space-y-0">
      {PORTFOLIO_ITEMS.map((item) => (
        <div 
          key={item.id} 
          className="group grid grid-cols-1 md:grid-cols-12 border-b border-gray-300 py-12 hover:bg-white transition-colors duration-300"
        >
          {/* ID & Date */}
          <div className="md:col-span-2 font-mono text-xs text-gray-400 mb-4 md:mb-0 group-hover:text-orange-600 transition-colors">
            <div className="flex md:block justify-between">
              <span>/{item.id}</span>
              <span className="md:mt-2">{item.date}</span>
            </div>
          </div>

          {/* Title */}
          <div className="md:col-span-5 pr-8">
            <h3 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">
              {item.title}
            </h3>
            <span className="font-mono text-xs uppercase tracking-wider text-orange-600">
              {item.client}
            </span>
          </div>

          {/* Desc */}
          <div className="md:col-span-4 flex flex-col justify-between mt-4 md:mt-0">
            <p className="text-gray-600 font-sans leading-relaxed text-lg">{item.desc}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono border border-gray-300 px-2 py-1 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="md:col-span-1 flex justify-end items-start mt-4 md:mt-0">
             <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
    if (res.ok) { setSubmitted(true); form.reset(); }
  };

  return (
  <div className="animate-slideUp pt-12 pb-24">
    
    {/* Header */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      <div className="lg:col-span-8">
        <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.9] mb-8">
          FROM CODE TONIGHT <br/>
          TO <span className="text-orange-600">ENTER KONSULT.</span>
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
            <li className="flex gap-2"><span className="text-orange-600">01</span> We ask Why</li>
            <li className="flex gap-2"><span className="text-orange-600">02</span> We solve problems</li>
            <li className="flex gap-2"><span className="text-orange-600">03</span> We have skills</li>
            <li className="flex gap-2"><span className="text-orange-600">04</span> We have fun</li>
          </ul>
        </div>
        <ForwardEnterIcon className="w-32 h-32 self-end opacity-20" />
      </div>
    </div>

    {/* Audience Grid - Swiss Style */}
    <div className="mb-24">
      <div className="flex justify-between items-end border-b border-gray-300 pb-4 mb-4">
         <h3 className="font-mono text-xs uppercase tracking-widest">Ideally Suited For</h3>
         <span className="font-mono text-xs text-gray-400">TARGET_AUDIENCE_MATRIX</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-300">
        {TARGET_AUDIENCE.map((aud) => (
          <div key={aud.id} className="border-r border-b border-gray-300 p-8 hover:bg-white transition-colors">
            <div className="font-mono text-xs text-orange-600 mb-4">REF: {aud.id}</div>
            <h4 className="font-bold text-lg leading-tight mb-4">{aud.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{aud.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Contact Form - Brutalist */}
    <div className="bg-white border border-gray-300 p-8 md:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-4xl font-sans font-bold tracking-tighter mb-6">READY TO ENTER?</h3>
          <p className="text-gray-600 text-lg mb-8">Tell us about the problem you're trying to solve. Let's build your IP.</p>
          
          <div className="space-y-4 font-mono text-sm text-gray-500">
            <p>EMAIL: HELLO@ENTERKONSULT.COM</p>
            <p>LOC: CAPE TOWN, SOUTH AFRICA</p>
          </div>
        </div>

        <form className="space-y-6" action="https://formspree.io/f/mrbnkdjd" method="POST" onSubmit={handleSubmit}>
          <input type="text" name="_gotcha" className="hidden" />
          <div className="space-y-1">
            <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Name / Company</label>
            <input type="text" name="name" required className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 outline-none transition-colors font-sans" />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Direct Contact</label>
            <input type="email" name="email" required className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 outline-none transition-colors font-sans" />
          </div>
          <div className="space-y-1">
            <label className="font-mono text-xs uppercase tracking-widest text-gray-500">The Problem</label>
            <textarea name="message" rows="3" required className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 outline-none transition-colors font-sans" />
          </div>
          {submitted ? (
            <div className="w-full bg-orange-600 text-white py-4 font-mono text-xs uppercase tracking-widest text-center">
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

  const pages = {
    home: <LandingPage goToPage={setActivePage} />,
    showcase: <ShowcasePage />,
    about: <AboutPage />
  };

  return (
    // Background color set to specific 'Paper Grey' to match screenshot warmth
    <div className="min-h-screen bg-[#EAEAEA] text-black font-sans selection:bg-orange-600 selection:text-white">
      
      {/* Top Navigation - Sticky & Minimal */}
      <header className="sticky top-0 z-50 bg-[#EAEAEA]/90 backdrop-blur-sm border-b border-gray-300 h-16 flex items-center justify-between px-6 md:px-12">
        
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
        <nav className="hidden md:flex items-center gap-6">
          <NavLink label="Home" active={activePage === 'home'} onClick={() => setActivePage('home')} />
          <NavLink label="Showcase" active={activePage === 'showcase'} onClick={() => setActivePage('showcase')} />
          <NavLink label="About" active={activePage === 'about'} onClick={() => setActivePage('about')} />
          <button 
             onClick={() => setActivePage('about')}
             className="ml-4 bg-black text-white px-4 py-2 flex items-center gap-2 hover:bg-orange-600 transition-colors"
          >
            <span className="font-mono text-xs font-bold tracking-widest">GET STRATEGY</span>
            <ForwardEnterIcon className="w-3 h-3" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
           <div className="space-y-1">
             <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
             <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
             <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
           </div>
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#EAEAEA] pt-24 px-6 animate-fadeIn md:hidden">
          <div className="flex flex-col gap-8">
            <button className="text-4xl font-sans font-bold text-left" onClick={() => {setActivePage('home'); setIsMenuOpen(false)}}>HOME</button>
            <button className="text-4xl font-sans font-bold text-left" onClick={() => {setActivePage('showcase'); setIsMenuOpen(false)}}>SHOWCASE</button>
            <button className="text-4xl font-sans font-bold text-left" onClick={() => {setActivePage('about'); setIsMenuOpen(false)}}>ABOUT</button>
          </div>
        </div>
      )}

      {/* Main Content Container - Centered with Max Width */}
      <main className="max-w-screen-xl mx-auto px-6 md:px-12 pb-20">
        {pages[activePage]}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-8 bg-[#EAEAEA] px-6 md:px-12">
         <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-500">
            <p>© 2025 ENTER KONSULT</p>
            <p className="mt-2 md:mt-0">FORMERLY CODETONIGHT</p>
         </div>
      </footer>
    </div>
  );
};

export default App;