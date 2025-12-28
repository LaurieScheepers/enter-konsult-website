import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from './NavLink'
import { ForwardEnterIcon } from './Icons'

export function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black font-sans selection:bg-orange-600 selection:text-white">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header role="banner" className="sticky top-0 z-50 bg-[#EAEAEA]/90 backdrop-blur-sm border-b border-gray-300 h-16 flex items-center justify-between px-6 md:px-12">
        <Link
          to="/"
          className="flex items-center gap-3 select-none group"
          onClick={closeMenu}
        >
          <div className="bg-transparent text-black group-hover:text-orange-600 transition-colors">
            <ForwardEnterIcon className="w-6 h-6" />
          </div>
          <div className="flex items-baseline gap-1 leading-none">
            <span className="font-black text-xl tracking-tight">ENTER</span>
            <span className="text-xl font-light tracking-[0.15em] text-gray-600">Konsult</span>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Showcase</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button
          className="sm:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#EAEAEA] pt-20 px-6 animate-fadeIn sm:hidden">
          <nav className="flex flex-col">
            {[
              { to: '/', label: 'HOME' },
              { to: '/services', label: 'SERVICES' },
              { to: '/work', label: 'SHOWCASE' },
              { to: '/about', label: 'ABOUT' },
              { to: '/contact', label: 'CONTACT' }
            ].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center gap-4 py-5 border-b border-gray-300 last:border-b-0"
                onClick={closeMenu}
              >
                <span className="font-mono text-xs text-gray-400 w-6">0{i + 1}</span>
                <span className="text-xl font-sans font-bold tracking-tight group-hover:text-orange-600 transition-colors">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main id="main-content" role="main" className="max-w-screen-xl mx-auto px-6 md:px-12 pb-20">
        {children}
      </main>

      <footer role="contentinfo" className="border-t border-gray-300 bg-[#EAEAEA] px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <nav className="flex gap-6 font-mono text-xs uppercase tracking-widest">
              <Link to="/" className="text-gray-500 hover:text-black transition-colors">Home</Link>
              <Link to="/services" className="text-gray-500 hover:text-black transition-colors">Services</Link>
              <Link to="/work" className="text-gray-500 hover:text-black transition-colors">Work</Link>
              <Link to="/about" className="text-gray-500 hover:text-black transition-colors">About</Link>
              <Link to="/contact" className="text-gray-500 hover:text-black transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center gap-6 font-mono text-xs text-gray-500">
              <span>© 2025 CodeTonight (Pty) Ltd t/a <span className="font-bold">ENTER Konsult</span></span>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
