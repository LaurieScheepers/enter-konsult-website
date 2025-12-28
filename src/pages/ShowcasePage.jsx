import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import { LogoGrid } from '../components/LogoGrid'

export function ShowcasePage() {
  return (
    <>
      <SEO page="work" />
      <div className="animate-slideUp pt-12">
        <div className="mb-12 border-b border-gray-300 pb-8 md:flex md:justify-between md:items-end">
          <div className="flex justify-between items-end md:block">
            <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.85]">
              THE WORK
            </h1>
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

        <LogoGrid />

        <div className="text-center py-8 border-t border-gray-300">
          <Link
            to="/contact"
            className="group bg-black text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors inline-flex items-center gap-3"
          >
            Let's Build Yours <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  )
}
