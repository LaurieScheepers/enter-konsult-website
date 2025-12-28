import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import { ForwardEnterIcon } from '../components/Icons'
import { TARGET_AUDIENCE, PHILOSOPHY, PROCESS_STEPS } from '../data'

export function AboutPage() {
  return (
    <>
      <SEO page="about" />
      <div className="animate-slideUp pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.9] mb-8">
              FROM CODETONIGHT<br />
              TO<span className="text-orange-600"> ENTER KONSULT.</span>
            </h1>
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
              <h2 className="font-mono text-xs uppercase tracking-widest border-b border-gray-700 pb-2">Our Philosophy</h2>
              <ul className="space-y-2 font-mono text-sm">
                {PHILOSOPHY.map(item => (
                  <li key={item.num} className="flex gap-2">
                    <span className="text-orange-600">{item.num}</span> {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <ForwardEnterIcon className="w-32 h-32 self-end opacity-20" />
          </div>
        </div>

        <div className="mb-12 md:mb-24">
          <div className="flex justify-between items-end pb-4 mb-4">
            <h2 className="font-mono text-xs uppercase tracking-widest">Ideally Suited For</h2>
            <span className="font-mono text-xs text-gray-500">TARGET_AUDIENCE_MATRIX</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t md:border-l border-gray-300">
            {TARGET_AUDIENCE.map((aud) => (
              <div key={aud.id} className="border-r border-b border-gray-300 p-8 -mx-6 px-6 md:mx-0 md:px-8">
                <div className="font-mono text-xs text-orange-600 mb-4">REF: {aud.id}</div>
                <h3 className="font-bold text-lg leading-tight mb-4">{aud.title}</h3>
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

        <div className="mb-24 pt-8 md:pt-16">
          <div className="flex justify-between items-end pb-4 mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest">How We Engage</h2>
            <span className="font-mono text-xs text-gray-500">PROCESS_FLOW</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num}>
                <span className="text-orange-600 font-mono text-sm">{step.num}</span>
                <h3 className="font-bold text-lg mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="flex justify-between items-end pb-4 mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest">From the Founders</h2>
            <span className="font-mono text-xs text-gray-500">ORIGIN_STORY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8 text-lg leading-relaxed text-gray-800">
              <div>
                <h3 className="font-bold text-xl mb-4 text-black">The Beginning</h3>
                <p className="mb-4">
                  Our founder's first job out of university was at <strong>Mxit</strong>. Within his first year, he was the primary maintainer of the J2ME client — the feature-phone app millions of South Africans used daily. He shipped Mxit v7 under <strong>Andy Volk</strong>, who later led Google's Developer Ecosystem across Sub-Saharan Africa.
                </p>
                <p className="mb-4">
                  After Naspers acquired Mxit, there was a moment in a boardroom full of very senior people — including Paul Harris and GT Ferreira — where someone asked: <em>"Who is actively working on the feature-phone app every day?"</em>
                </p>
                <p className="mb-4">
                  Silence. One hand went up.
                </p>
                <p>
                  Baptism by fire. Lesson learned: you can hold your own with legends if you've done the work.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-black">The End</h3>
                <p className="mb-4">
                  A few years after releasing v7, Mxit closed down.
                </p>
                <p className="mb-4">
                  By the end, there were only two mobile developers and the lead backend engineer remaining. He was one of them — there the day the servers were switched off.
                </p>
                <p>
                  The new product under new leadership didn't fail because of bad code. The solutions were solid. It failed because <strong>the right questions were never asked</strong> to figure out the problem that should have been solved. That lesson stuck.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-black">The Journey</h3>
                <p>
                  Ten years passed. Two solo ventures. Countless lessons in what works and what doesn't. In 2023, CodeTonight was founded as a solo venture to solve the problem he'd watched destroy companies from the inside. The team has since expanded, and we rebranded to ENTER Konsult in 2025.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-black">How We're Different</h3>
                <p className="mb-4">
                  We don't just write code. We ask the questions nobody else is asking.
                </p>
                <p>
                  We sit with you, challenge assumptions, and if your plan needs rethinking, we tell you early — then show you the better path. It's cheaper to kill a bad idea in week one than carry it for five years.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-black">What This Means For You</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2"><span className="text-orange-600">›</span> We map the business problem before writing code</li>
                  <li className="flex gap-2"><span className="text-orange-600">›</span> We tell you when the build is the wrong move</li>
                  <li className="flex gap-2"><span className="text-orange-600">›</span> We design for ownership: clean handover, documentation, IP you control</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-black">The Team</h3>
                <p>
                  We're a small, deliberate team of managing partners and specialists. Operations and strategy work in lockstep with architecture and execution. We take on work we believe in.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-black">Why It Matters</h3>
                <p className="text-gray-600">
                  We're parents to young children. That shapes how we think about what we leave behind. We build things that last — things we can be proud of.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-black text-white p-6">
                <div className="font-mono text-xs text-gray-400 mb-2">LEADERSHIP</div>
                <div className="font-bold text-xl mb-1">Managing Partners</div>
                <div className="font-mono text-sm text-orange-500">Technical + Operations</div>
                <div className="text-sm text-gray-400 mt-4">30+ years combined experience</div>
                <div className="border-t border-gray-700 mt-4 pt-4">
                  <div className="font-bold text-lg mb-1">Specialist Network</div>
                  <div className="font-mono text-sm text-orange-500">Design • Development • Strategy</div>
                  <div className="text-sm text-gray-400 mt-2">On-demand expertise</div>
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

        <div className="text-center py-12 border-t border-gray-300">
          <p className="font-mono text-sm text-gray-600 mb-4">Ready to work together?</p>
          <Link
            to="/contact"
            className="group bg-black text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors inline-flex items-center gap-3"
          >
            Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  )
}
