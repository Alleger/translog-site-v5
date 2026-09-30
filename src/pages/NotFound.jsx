import { href } from '../router.js'

export default function NotFound() {
  return (
    <section className="section page">
      <div className="wrap">
        <h1>This page doesn’t exist</h1>
        <p className="page-lead">The link may be outdated. Start from the home page or contact us directly.</p>
        <div className="page-cta"><a className="btn btn-accent" href={href()}>Go to home page</a></div>
      </div>
    </section>
  )
}
