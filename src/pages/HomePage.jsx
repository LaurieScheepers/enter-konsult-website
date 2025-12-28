import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import { ForwardEnterIcon } from '../components/Icons'
import { VALUE_PROPS } from '../data'

export function HomePage() {
  return (
    <>
      <SEO page="home" />
      <div className="animate-fadeIn">
        <div className="pt-12 md:pt-24 pb-24 border-b border-gray-300">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8">
            <div className="col-span-1 lg:col-span-3 font-mono text-xs space-y-6 text-gray-700 pt-2">
              <div>
                <p className="mb-1 text-black">CONTEXT:</p>
                <p>BUSINESS STRATEGY</p>
                <p>TECH CONSULTANCY</p>
              </div>
              <div>
                <p className="mb-1 text-black">EST:</p>
                <p>2023</p>
                <p className="text-gray-700">REBRAND 2025</p>
              </div>
              <div>
                <p className="mb-1 text-black">STATUS:</p>
                <p className="text-a11y-orange flex items-center gap-2">
                  <span className="w-2 h-2 bg-a11y-orange rounded-full animate-pulse" />
                  ACCEPTING CLIENTS
                </p>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-9">
              <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.95] lg:leading-[0.85] text-black text-right lg:text-left">
                WE SPEAK <br />
                BUSINESS. <br />
                <span className="text-a11y-muted">
                  <span className="lg:hidden block">NOT JUST</span>
                  <span className="lg:hidden block">CODE.</span>
                  <span className="hidden lg:inline">NOT JUST CODE.</span>
                </span>
              </h1>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-12">
            <div className="lg:col-start-4 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <p className="text-xl md:text-2xl leading-tight font-sans font-medium text-gray-800 max-w-md">
                  A Technology Consultancy that solves business problems. We help you own your IP and control your future.
                </p>

                <div className="flex flex-col justify-end h-full gap-4 w-full md:w-auto">
                  <div className="flex justify-end">
                    <Link
                      to="/about"
                      className="group flex items-center gap-4 bg-black text-white px-8 py-4 hover:bg-orange-600 transition-colors duration-300 shadow-xl"
                    >
                      <span className="font-mono text-base tracking-widest uppercase">ENTER</span>
                      <ForwardEnterIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <Link
                    to="/work"
                    className="w-full md:w-auto border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300 text-center"
                  >
                    <span className="font-mono text-sm tracking-widest uppercase">SHOWCASE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-6 md:mx-0 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 border-b border-gray-300 bg-gray-100/50">
          {VALUE_PROPS.map((item, i) => (
            <div key={i} className="p-8 md:p-12 px-6 md:mx-0 md:px-8">
              <div className="font-mono text-xs text-a11y-orange mb-4">0{i + 1}</div>
              <h2 className="font-sans font-bold text-xl tracking-tight mb-2">{item.title}</h2>
              <p className="font-sans text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
