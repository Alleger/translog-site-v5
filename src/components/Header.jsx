import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { PhoneIcon } from './Icons.jsx'
import { href } from '../router.js'
import { company } from '../content.js'

const links = [
  ['company', 'Our company'],
  ['equipment', 'Equipment & services'],
  ['network', 'Network'],
  ['news', 'News'],
  ['contacts', 'Contacts'],
]

export default function Header({ path, anchor }) {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [path, anchor])
  const tel = company.phoneMain.replace(/\s/g, '')
  return (
    <header className={`site-header ${open ? 'open' : ''}`}>
      <div className="wrap header-row">
        <a className="header-logo" href={href()} aria-label="Translog Company — home"><Logo /></a>
        <nav className="nav" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={href('', id)} className={anchor === id ? 'active' : undefined}>{label}</a>
          ))}
        </nav>
        <a className="header-phone" href={`tel:${tel}`}><PhoneIcon /> <span>{company.phoneMain}</span></a>
        <a className="btn btn-accent btn-sm header-cta" href={href('', 'contacts')}>Request a quote</a>
        <button type="button" className="burger" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
      <div className="mobile-menu" hidden={!open}>
        <div className="wrap">
          {links.map(([id, label]) => <a key={id} href={href('', id)}>{label}</a>)}
          <a className="btn btn-accent" href={href('', 'contacts')}>Request a quote</a>
          <a className="mobile-phone" href={`tel:${tel}`}><PhoneIcon /> {company.phoneMain}</a>
        </div>
      </div>
    </header>
  )
}
