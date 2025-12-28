import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import { ForwardEnterIcon } from '../components/Icons'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
    if (res.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <>
      <SEO page="contact" />
      <div className="animate-slideUp pt-12 pb-24">
        <div className="mb-8 p-6 border border-gray-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-mono text-sm text-gray-700">
              <span className="text-orange-600 font-bold">PS:</span> Want a website like this? We build these, too.
            </p>
            <Link
              to="/work"
              className="group bg-black text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors flex items-center gap-2 w-fit"
            >
              See Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-300 p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl font-sans font-bold tracking-tighter mb-6">STATE YOUR CASE.</h1>
              <p className="text-gray-600 text-lg mb-8">
                The problem. The vision. The stakes.<br /><br />
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                  We're listening.
                </span>
              </p>

              <div className="space-y-4 font-mono text-sm text-a11y-gray">
                <p>EMAIL: LAURIE@ENTERKONSULT.COM</p>
                <p>LOC: CAPE TOWN, SOUTH AFRICA</p>
                <p>RATES: SCOPE-BASED</p>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
                <div className="font-mono text-center space-y-6">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-black">TRANSMISSION_COMPLETE</div>
                  <div className="w-48 h-px bg-gray-300 mx-auto" />
                  <div className="space-y-2 text-gray-600">
                    <p className="text-sm">We've received your brief.</p>
                    <p className="text-xs text-a11y-gray">Expect contact within 24-48 hours.</p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 border border-gray-300 font-mono text-xs uppercase tracking-widest text-a11y-gray hover:border-black hover:text-black transition-colors"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" action="https://formspree.io/f/mrbnkdjd" method="POST" onSubmit={handleSubmit}>
                <input type="text" name="_gotcha" className="hidden" />
                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase tracking-widest text-a11y-gray">Name / Company</label>
                  <input type="text" name="name" required placeholder="The decision maker." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans invalid:border-red-500 valid:border-green-600" />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase tracking-widest text-a11y-gray">Direct Contact Email</label>
                  <input type="email" name="email" required placeholder="Where we reply." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans invalid:border-red-500 valid:border-green-600" />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase tracking-widest text-a11y-gray">Tell us more</label>
                  <textarea name="message" rows="3" required placeholder="The brief." className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-orange-600 focus:bg-white focus:border-b-2 outline-none transition-all font-sans invalid:border-red-500 valid:border-green-600" />
                </div>
                <button type="submit" className="w-full bg-black text-white py-4 font-mono text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors flex justify-center items-center gap-2">
                  Initiate <ForwardEnterIcon className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
