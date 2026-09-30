import { href } from '../router.js'
import { company } from '../content.js'
import { fmtDate } from './Home.jsx'

export default function ArticlePage({ article: a }) {
  return (
    <section className="section page">
      <article className="wrap article">
        <a className="back" href={href('', 'news')}>News</a>
        <p className="page-over">{a.category}, <time dateTime={a.date}>{fmtDate(a.date)}</time></p>
        <h1>{a.title}</h1>
        {a.body.map((p, i) => <p key={i}>{p}</p>)}
        <p className="signature">{company.ceo.name}<span>{company.ceo.role}</span></p>
      </article>
    </section>
  )
}
