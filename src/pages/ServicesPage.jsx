import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import { VALUE_PROPS, PROCESS_STEPS } from '../data'

const SERVICES = [
  {
    num: "01",
    title: "Custom Software Development",
    desc: "Bespoke solutions built to your exact specifications. Tech Stack? We've done it all. From a custom Android Printer OS to a Self-Dispensing Beer POS station. We build what you need, not what's trendy.",
    tags: ["Web", "Mobile", "AI/ML", "Backend", "Infra", "Data", "DevOps"]
  },
  {
    num: "02",
    title: "Technical Strategy",
    desc: "Before writing code, we map the problem. Architecture reviews, technology selection, build vs. buy decisions. Strategy before execution.",
    tags: ["Communication", "Venture Architecture", "Roadmapping", "Tech Selection", "NO BS"]
  },
  {
    num: "03",
    title: "Fractional CTO",
    desc: "Senior technical leadership without the full-time cost. Ideal for startups and SMEs needing strategic guidance and team mentorship.",
    tags: ["Leadership", "Guidance", "Mentorship", "Governance", "Teamwork"]
  },
  {
    num: "04",
    title: "Digital Transformation",
    desc: "Moving from spreadsheets to IP. Cloud migration, process automation, and modernisation that actually delivers ROI.",
    tags: ["Cloud Migration", "Automation", "Modernisation", "Future Proofing"]
  }
]

export function ServicesPage() {
  return (
    <>
      <SEO page="services" />
      <div className="animate-slideUp pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-[0.9] mb-8">
              STRATEGY FIRST.<br />
              <span className="text-gray-400">THEN CODE.</span>
            </h1>
            <div className="text-xl md:text-2xl font-sans font-medium leading-relaxed space-y-8 border-l border-black pl-8">
              <p>
                We're not a dev shop that takes orders. We're a consultancy that solves problems.
              </p>
              <p className="text-gray-600">
                Every engagement starts with understanding your business, your market, and your goals. Only then do we recommend what to build — or whether to build at all.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-black text-white p-8">
            <h2 className="font-mono text-xs uppercase tracking-widest border-b border-gray-700 pb-2 mb-4">Our Approach</h2>
            <ul className="space-y-4 font-mono text-sm">
              {VALUE_PROPS.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-orange-600">0{i + 1}</span>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex justify-between items-end pb-4 mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest">What We Do</h2>
            <span className="font-mono text-xs text-gray-500">SERVICE_MATRIX</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.num} className="border border-gray-300 p-8">
                <span className="text-orange-600 font-mono text-sm">{service.num}</span>
                <h3 className="font-bold text-2xl mt-2 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-widest bg-gray-100 px-3 py-1 text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="flex justify-between items-end pb-4 mb-8">
            <h2 className="font-mono text-xs uppercase tracking-widest">How We Work</h2>
            <span className="font-mono text-xs text-gray-500">PROCESS_FLOW</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="border-l-2 border-gray-300 pl-6">
                <span className="text-orange-600 font-mono text-sm">{step.num}</span>
                <h3 className="font-bold text-lg mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to solve real problems?</h2>
              <p className="text-gray-400 text-lg">
                We take on work we believe in. If there's a fit, we'll build something worth owning.
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                to="/contact"
                className="group flex items-center gap-4 bg-orange-600 text-black px-8 py-4 hover:bg-white transition-colors duration-300"
              >
                <span className="font-mono text-base tracking-widest uppercase font-bold">Start a Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
