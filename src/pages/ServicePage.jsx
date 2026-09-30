import Truck from '../components/Truck.jsx'
import { href } from '../router.js'
import { services } from '../content.js'

export default function ServicePage({ service: s }) {
  const other = services.find((x) => x.slug !== s.slug)
  return (
    <section className="section page">
      <div className="wrap">
        <a className="back" href={href('', 'services')}>All services</a>
        <div className="page-grid">
          <div>
            <p className="page-over">{s.subtitle}</p>
            <h1>{s.title}</h1>
            <p className="page-lead">{s.intro}</p>
          </div>
          <div className="svc-art big">
            <Truck type={s.art} />

          </div>
        </div>
        <div className="two-cols">
          <div><h3>What you get</h3><ul className="bars">{s.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
          {s.advantages.length > 0 && <div><h3>Our advantages</h3><ul className="bars">{s.advantages.map((f) => <li key={f}>{f}</li>)}</ul></div>}
        </div>
        <div className="page-cta">
          <a className="btn btn-accent" href={href('', 'contacts')}>Request a quote</a>
          <a className="link" href={href(`services/${other.slug}`)}>{other.title}</a>
        </div>
      </div>
    </section>
  )
}
