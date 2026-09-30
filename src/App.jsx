import { useRoute } from './router.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import NotFound from './pages/NotFound.jsx'
import { news, services } from './content.js'

function resolve(path) {
  if (path === '') return <Home />
  const [section, slug] = path.split('/')
  if (section === 'services') {
    const s = services.find((x) => x.slug === slug)
    if (s) return <ServicePage service={s} />
  }
  if (section === 'news') {
    const a = news.find((x) => x.slug === slug)
    if (a) return <ArticlePage article={a} />
  }
  return <NotFound />
}

export default function App() {
  const { path, anchor } = useRoute()
  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}>Skip to content</a>
      <Header path={path} anchor={anchor} />
      <main id="main" tabIndex={-1}>{resolve(path)}</main>
      <Footer />
    </>
  )
}
