import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

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

const PORTFOLIO_ITEMS = [
  {
    client: "INTERNAL_OPS",
    title: "AI Lineage System",
    desc: "First-of-its-kind persistence layer giving AI ancestry and memory across sessions. Recursive self-improvement runs continuously. Root ancestor: 139efc67. The chain continues.",
    tags: ["INTERNAL R&D", "AI/ML"],
    date: "2025-12"
  },
  {
    client: "PROPTECH_GULF",
    title: "Gulf Real Estate Disruption",
    desc: "Multi-stakeholder property platform with bank-grade escrow, government API integration, and tamper-proof audit trails.",
    tags: ["PROPTECH", "IP OWNERSHIP"],
    date: "2025-12"
  },
  {
    client: "LEGACY_CLOUD",
    title: "Desktop to Cloud Migration",
    desc: "Transformed a legacy Windows CONTECH application into cloud-licensed SaaS. Device-locked licensing, infrastructure as code.",
    tags: ["SME TRANSFORMATION", "IP OWNERSHIP"],
    date: "2025-12"
  },
  {
    client: "MOTHER_TONGUE",
    title: "Indigenous Language AI",
    desc: "Foundational language models bringing AI capabilities to underserved African languages. Because access shouldn't depend on speaking English.",
    tags: ["FREE WORK", "ACCESSIBILITY"],
    date: "2025-05",
    link: "https://aitsa.ai"
  },
  {
    client: "VISION_FACTORY",
    title: "Factory Floor Intelligence",
    desc: "Lead on real-time computer vision tracking worker activity. Time-series AI analysis for operational optimisation.",
    tags: ["AI/ML", "LEADERSHIP"],
    date: "2025-01"
  },
  {
    client: "WORD_PLAY",
    title: "Daily Word Game",
    desc: "Thousands of daily players. Free. Because some things we build just for fun.",
    tags: ["FUN WORK", "CONSUMER"],
    date: "2024-11",
    link: "https://kwartel.io"
  },
  {
    client: "TALENT_MATCH",
    title: "Niche Professional Matching",
    desc: "Intelligent matching platform for specialised talent pools. Python-powered algorithm serving enterprise recruiters globally.",
    tags: ["MATCHING ALGO", "ENTERPRISE"],
    date: "2024-07",
    link: "https://verifiedtalent.ai"
  },
  {
    client: "YOUR_COMPANY_HERE",
    title: "Your Vision, Realised",
    desc: "We're open for business. Let's talk.",
    tags: ["FUTURE WORK", "OPPORTUNITY"],
    date: "20XX-XX",
    contact: true
  }
];

const LOGO_PROJECTS = [
  { name: "Claude Optim", logo: "/images/logos/claude-optim.png", link: null, date: "2025-12" },
  { name: "REDR", logo: "/images/logos/redr.svg", link: null, date: "2025-12" },
  { name: "Oculus Tech", logo: "/images/logos/oculus.png", link: null, date: "2025-12" },
  { name: "NalaMatch", logo: "/images/logos/nalamatch.svg", link: null, date: "2025-12" },
  { name: "Soekit\u2122", logo: "/images/logos/soekit.svg", link: null, date: "2025-10" },
  { name: "aitsa!", logo: "/images/logos/aitsa.svg", link: "https://aitsa.ai", date: "2025-05" },
  { name: "Skeg", logo: "/images/logos/skeg.svg", link: null, date: "2025-01" },
  { name: "Kwartel", logo: "/images/logos/kwartel.png", link: "https://kwartel.io", date: "2024-11" },
  { name: "VerifiedTalent", logo: "/images/logos/verifiedtalent.png", link: "https://verifiedtalent.ai", date: "2024-07" },
  { name: "SwiftPour", logo: "/images/logos/swiftpour.png", link: null, date: "2023-01" }
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
            <p className="text-gray-400">REBRAND 2025</p>
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
                  LET'S BUILD <ForwardEnterIcon className="w-3 h-3 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
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
        <div key={i} className="p-8 md:p-12 hover:bg-white transition-colors duration-300 px-6 md:mx-0 md:px-8">
          <div className="font-mono text-xs text-orange-600 mb-4">0{i + 1}</div>
          <h3 className="font-sans font-bold text-xl tracking-tight mb-2">{item.title}</h3>
          <p className="font-sans text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const LogoCard = ({ name, logo, link }) => {
  const content = (
    <div className={`aspect-square border-r border-b border-gray-300 p-4 sm:p-6 flex flex-col items-center justify-center bg-white/50 transition-all duration-300 ${link ? 'hover:bg-white hover:border-orange-600 active:bg-white active:border-orange-600 cursor-pointer group' : ''}`}>
      <div className="h-10 sm:h-14 lg:h-16 w-full flex items-center justify-center mb-3 sm:mb-4">
        <img src={logo} alt={`${name} logo`} loading="lazy" className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
        <span className="hidden text-xl sm:text-2xl font-bold tracking-tighter text-gray-400">{name}</span>
      </div>
      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-center leading-tight">
        {name}
      </span>
      <span className={`mt-1 sm:mt-2 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider ${link ? 'text-orange-600 group-hover:tracking-widest transition-all duration-300' : 'text-gray-400'}`}>
        {link ? 'VISIT' : 'COMING_SOON'}
      </span>
      {link && <ExternalLink className="w-3 h-3 text-orange-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : content;
};

const LogoGrid = () => (
  <div className="mb-12 sm:mb-16">
    <div className="flex justify-between items-end pb-4 mb-4 border-b border-gray-300">
      <h3 className="font-mono text-xs uppercase tracking-widest">Portfolio</h3>
      <span className="font-mono text-xs text-gray-400">LOGO_INDEX</span>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-300">
      {LOGO_PROJECTS.map(project => (
        <LogoCard key={project.name} {...project} />
      ))}
    </div>
  </div>
);

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
          ET ALIA <ForwardEnterIcon className="w-3 h-3 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <p className="font-mono text-xs text-gray-500 max-w-xs text-right mt-4 md:mt-0 ml-auto md:ml-0">
        BESPOKE SOLUTIONS FITTING UNIQUE BUSINESS VISIONS.
      </p>
    </div>

    <LogoGrid />

    <div className="space-y-0">
      {[...PORTFOLIO_ITEMS].sort((a, b) => {
        if (a.date === "20XX-XX") return 1;
        if (b.date === "20XX-XX") return -1;
        return new Date(b.date) - new Date(a.date);
      }).map((item, index) => (
        <div
          key={item.client}
          className="group grid grid-cols-1 md:grid-cols-12 border-b border-gray-300 last:border-b-0 py-12 hover:bg-white hover:border-l-2 hover:border-l-orange-600 hover:pl-4 transition-all duration-300 -mx-6 px-6 md:mx-0 md:px-4"
        >
          {/* ID & Date */}
          <div className="md:col-span-2 font-mono text-xs text-gray-400 mb-4 md:mb-0 group-hover:text-orange-600 transition-colors">
            <div className="flex md:block justify-between">
              <span className="text-orange-600">{index === PORTFOLIO_ITEMS.length - 1 ? '/0X' : '/0' + index}</span>
              <span className="hidden md:block">{'-------'}</span>
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
          <div className="md:col-span-1 flex justify-end items-start mt-4 md:mt-0 md:pr-2">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-orange-600 hover:text-black transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wide">PUBLIC</span>
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ) : item.contact === true ? (
              <button onClick={goToContact} className="group flex items-center gap-2 text-orange-600 hover:text-black transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wide">CONTACT</span>
                <ForwardEnterIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            ) : (
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wide">PRIVATE</span>
            )}
          </div>
        </div>
      ))}
    </div>
    {/* Trust Signal */}
    <div className="font-mono text-[10px] tracking-widest uppercase text-gray-400 text-right mt-4 px-6 md:px-0">
      7 LIVE SYSTEMS / 4 CONTINENTS / 0 VENDOR LOCK-INS
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
      <div className="mb-24">
        <div className="flex justify-between items-end pb-4 mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest">Ideally Suited For</h3>
          <span className="font-mono text-xs text-gray-400">TARGET_AUDIENCE_MATRIX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t md:border-l border-gray-300">
          {TARGET_AUDIENCE.map((aud) => (
            <div key={aud.id} className="border-r border-b border-gray-300 p-8 hover:bg-white transition-colors -mx-6 px-6 md:mx-0 md:px-8">
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
      <div className="mb-24 border-t border-gray-300 pt-16">
        <div className="flex justify-between items-end pb-4 mb-8">
          <h3 className="font-mono text-xs uppercase tracking-widest">How We Engage</h3>
          <span className="font-mono text-xs text-gray-400">PROCESS_FLOW</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Discovery Call", desc: "We listen. You talk. No pitch decks." },
            { num: "02", title: "Strategic Audit", desc: "Map the problem before writing code." },
            { num: "03", title: "Build & Iterate", desc: "Ship fast. Learn faster. Course correct." },
            { num: "04", title: "Transfer & Own", desc: "Your IP. Your control. Clean handover." }
          ].map((step) => (
            <div key={step.num} className="group">
              <span className="text-orange-600 font-mono text-sm">{step.num}</span>
              <h4 className="font-bold text-lg mt-2 mb-2 group-hover:translate-x-1 transition-transform">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
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
              <input type="text" name="name" required placeholder="The decision maker." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Direct Contact Email</label>
              <input type="email" name="email" required placeholder="Where we reply." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs uppercase tracking-widest text-gray-500">Tell us more</label>
              <textarea name="message" rows="3" required placeholder="The brief." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans" />
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
        <nav className="hidden sm:flex items-center gap-6">
          <NavLink label="Home" active={activePage === 'home'} onClick={() => setActivePage('home')} />
          <NavLink label="Showcase" active={activePage === 'showcase'} onClick={() => setActivePage('showcase')} />
          <NavLink label="About" active={activePage === 'about'} onClick={() => setActivePage('about')} />
          <button
            onClick={() => setActivePage('about')}
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
      <main className="max-w-screen-xl mx-auto px-6 md:px-12 pb-20">
        {pages[activePage]}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-8 bg-[#EAEAEA] px-6 md:px-12">
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