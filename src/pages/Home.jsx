import { href } from '../router.js'
import RouteMap from '../components/RouteMap.jsx'
import Truck from '../components/Truck.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import { MailIcon, PhoneIcon } from '../components/Icons.jsx'
import {
  about, company, facts, fleetLineup, news, offices, partnerNetwork, services, whatWeCanDo, whatWeHave,
} from '../content.js'

export const fmtDate = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
const tel = (p) => `tel:${p.replace(/\s/g, '')}`

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>{company.headline}</h1>
          <p className="hero-lead">{company.subline}: standard, special and nonstop express transports across the EU, 24/7.</p>
          <div className="hero-cta">
            <a className="btn btn-accent" href={href('', 'contacts')}>Request a quote</a>
            <a className="btn btn-ghost" href={href('', 'equipment')}>Equipment & services</a>
          </div>
        </div>
        <figure className="hero-map">
          <RouteMap />
          <figcaption className="map-legend">
            <span><i className="lg-hub" /> Hub in Prague</span>
            <span><i className="lg-line" /> Transports all over the EU</span>
            <span><i className="lg-truck" /> Our trucks, 24/7</span>
          </figcaption>
        </figure>
      </div>
      <div className="wrap">
        <dl className="facts">
          {facts.map((f) => <div key={f.value}><dt>{f.value}</dt><dd>{f.label}</dd></div>)}
        </dl>
      </div>
    </section>
  )
}

function Company() {
  return (
    <section id="company" className="section">
      <div className="wrap company-grid">
        <div>
          <h2 className="kicker-h">Our company</h2>
          <blockquote className="motto">{company.motto}</blockquote>
        </div>
        <div className="company-text">
          {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <p className="signature">{company.ceo.name}<span>{company.ceo.role}</span></p>
        </div>
      </div>
    </section>
  )
}

function Equipment() {
  return (
    <section id="equipment" className="section section-fog">
      <div className="wrap">
        <h2 className="section-h">Our equipment and services</h2>
        <ul className="lineup">
          {fleetLineup.map((v) => (
            <li key={v.type}>
              <Truck type={v.type} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
        <div className="two-cols">
          <div>
            <h3>What we have</h3>
            <ul className="bars">{whatWeHave.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h3>What we can do</h3>
            <ul className="bars">{whatWeCanDo.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap svc-grid">
        {services.map((s) => (
          <article key={s.slug} className={`svc svc-${s.slug}`}>
            <div className="svc-art">
              <Truck type={s.art} />

            </div>
            <h2>{s.title}</h2>
            <p className="svc-sub">{s.subtitle}</p>
            <ul className="bars">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <a className="link" href={href(`services/${s.slug}`)}>More about {s.title.toLowerCase()}</a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Network() {
  return (
    <section id="network" className="section section-ink">
      <div className="wrap network-grid">
        <div>
          <p className="network-over">Partner network</p>
          <h2>{partnerNetwork.title}</h2>
        </div>
        <p className="network-text">{partnerNetwork.text}</p>
      </div>
    </section>
  )
}

function News() {
  return (
    <section id="news" className="section">
      <div className="wrap">
        <h2 className="section-h">News</h2>
        {news.map((a) => (
          <a key={a.slug} className="news-row" href={href(`news/${a.slug}`)}>
            <time dateTime={a.date}>{fmtDate(a.date)}</time>
            <div>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
            </div>
            <span className="news-arrow" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 14h16M15 7l7 7-7 7" /></svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contacts() {
  return (
    <section id="contacts" className="section section-fog">
      <div className="wrap contacts-grid">
        <div>
          <h2 className="section-h">Contacts</h2>
          <div className="direct">
            <a href={tel(company.phoneMain)}><PhoneIcon /> {company.phoneMain}</a>
            <a href={`mailto:${company.email}`}><MailIcon /> {company.email}</a>
          </div>
          {offices.map((o) => (
            <div key={o.id} className="office">
              <h3>{o.title}</h3>
              <p><strong>{o.entity}</strong></p>
              {o.address.length > 0 && <p>{o.address.join(', ')}</p>}
              <p>{o.phones.map((p, i) => <span key={p}>{i > 0 && ', '}<a href={tel(p)}>{p}</a></span>)}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="form-h">Request a quote</h3>
          <QuoteForm id="quote" />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <Equipment />
      <Services />
      <Network />
      <News />
      <Contacts />
    </>
  )
}
