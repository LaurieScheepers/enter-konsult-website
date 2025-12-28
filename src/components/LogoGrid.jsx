import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X, Minus, Plus } from 'lucide-react'
import { LOGO_PROJECTS } from '../data'
import { ForwardEnterIcon } from './Icons'

const LogoCard = ({ logo, name, isSelected, isHovered, onHover, onSelect, isPlaceholder }) => (
  <div
    className={`aspect-square p-3 flex flex-col items-center justify-center bg-white/30 cursor-pointer transition-all duration-200 border-r border-b border-gray-300 group relative ${isSelected ? 'bg-white ring-2 ring-orange-600 ring-inset' : 'md:hover:bg-white/60'}`}
    onMouseEnter={() => window.matchMedia('(hover: hover)').matches && onHover(true)}
    onMouseLeave={() => window.matchMedia('(hover: hover)').matches && onHover(null)}
    onClick={onSelect}
    tabIndex={-1}
  >
    <img src={logo} alt={name} loading="lazy" decoding="async" width="200" height="200" className={`max-h-20 sm:max-h-28 lg:max-h-36 max-w-[85%] object-contain transition-all duration-200 ${isSelected || isHovered ? 'grayscale-0 scale-105' : isPlaceholder ? 'grayscale-0' : 'grayscale hover:grayscale-0'}`} />
    {isPlaceholder && <span className="mt-2 font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-500 text-center">{name}</span>}
    {isHovered && !isSelected && !isPlaceholder && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-wider text-gray-500">click to view</span>}
  </div>
)

const FloatingCLI = ({ project, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isMaximized) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isMaximized])

  if (!project) return null
  const lines = project.metadata.split('|')
  const tag = lines[0]
  const slug = project.name.replace(/\s+/g, '_').toLowerCase()
  const isUrl = project.link?.startsWith('http')
  const isKonsult = project.link === 'konsult'
  const isComingSoon = project.link === 'coming_soon'
  const isInternal = project.link === 'internal'
  const actionLabel = isInternal ? 'INTERNAL' : isComingSoon ? 'COMING SOON' : isKonsult ? 'INQUIRE' : isUrl ? 'VISIT' : null

  const handleAction = () => {
    if (isUrl) window.open(project.link, '_blank')
    else if (isKonsult) navigate('/contact')
  }

  const baseClasses = "font-mono text-xs bg-[#1a1a1a] text-gray-300 shadow-2xl animate-fadeIn border border-gray-700 transition-all duration-300 flex flex-col"
  const positionClasses = isMaximized
    ? "fixed inset-2 sm:inset-4 lg:inset-12 rounded-lg z-[60] max-h-[100dvh]"
    : "fixed bottom-0 left-0 right-0 lg:absolute lg:bottom-auto lg:left-auto lg:top-0 lg:right-0 lg:w-96 rounded-t-lg lg:rounded-lg z-20 max-h-[70vh] lg:max-h-none overflow-hidden"

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
            <button
              onClick={handleAction}
              disabled={isInternal || isComingSoon}
              className={`group w-full ${isMaximized ? 'max-w-md py-4 text-sm' : 'py-2.5 text-[10px]'} mt-2 uppercase tracking-widest border transition-colors flex items-center justify-center gap-2 ${
                isInternal || isComingSoon
                  ? 'border-gray-700 text-gray-500 cursor-not-allowed'
                  : 'border-gray-600 text-orange-500 hover:bg-orange-600 hover:text-black hover:border-orange-600'
              }`}
            >
              {actionLabel}
              {isUrl && <ForwardEnterIcon className={`${isMaximized ? 'w-4 h-4' : 'w-3 h-3'} group-hover:translate-x-1 transition-transform`} />}
            </button>
          )}
          {isMaximized && (
            <div className="pt-4 border-t border-gray-700 mt-4">
              <div className="text-gray-500 text-sm">PS: Impressed?</div>
              <div className="text-gray-500 text-sm mb-2">
                <span className="text-green-400">$</span> ./run_marketing.sh
              </div>
              <Link
                to="/contact"
                className="text-orange-500 hover:text-orange-400 text-sm uppercase tracking-widest transition-colors"
              >
                → We build these. Make contact.
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export const LogoGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const handleClose = () => setSelectedProject(hoveredProject)

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
      <FloatingCLI key={selectedProject?.name} project={selectedProject} onClose={handleClose} />
    </div>
  )
}
