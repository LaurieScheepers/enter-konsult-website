import { NavLink as RouterNavLink } from 'react-router-dom'

export const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `text-xs font-mono uppercase tracking-widest px-2 py-1 transition-all duration-300 relative
      ${isActive ? 'text-black font-bold' : 'text-gray-700 hover:text-orange-600'}`
    }
  >
    {({ isActive }) => (
      <>
        {children}
        {isActive && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black"></span>}
      </>
    )}
  </RouterNavLink>
)
