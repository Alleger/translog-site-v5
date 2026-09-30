import Logo from './Logo.jsx'
import { InstagramIcon, MailIcon, PhoneIcon } from './Icons.jsx'
import { href } from '../router.js'
import { company, offices, services } from '../content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo light />
          <p className="footer-tagline">{company.footerTagline}</p>
        </div>
        <div>
          <h2>Useful links</h2>
          <a href={href('', 'company')}>Our company</a>
          {services.map((s) => <a key={s.slug} href={href(`services/${s.slug}`)}>{s.title}</a>)}
          <a href={href('', 'news')}>News</a>
          <a href="https://translogcompany.com/privacy-policy/">General conditions</a>
        </div>
        <div>
          <h2>Get in touch</h2>
          <a href={`tel:${company.phoneMain.replace(/\s/g, '')}`}><PhoneIcon /> {company.phoneMain}</a>
          <a href={`mailto:${company.email}`}><MailIcon /> {company.email}</a>
          <a href={company.instagram} target="_blank" rel="noreferrer"><InstagramIcon /> translog.company.sro</a>
        </div>
        <div>
          <h2>Offices</h2>
          {offices.map((o) => (
            <p key={o.id}><strong>{o.title}</strong>{o.entity}{o.address.length > 0 && <><br />{o.address.join(', ')}</>}</p>
          ))}
        </div>
      </div>
      <div className="wrap footer-bottom">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
    </footer>
  )
}
