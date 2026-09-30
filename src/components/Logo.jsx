import { useState } from 'react'
import { company } from '../content.js'

export default function Logo({ light = false }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <span className={`logo-text ${light ? 'on-dark' : ''}`}>Translog<span>Company</span></span>
  return <img className="logo-img" src={light ? company.logoWhite : company.logo} alt="Translog Company" width="176" height="47" onError={() => setFailed(true)} />
}
