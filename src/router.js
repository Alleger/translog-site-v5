import { useEffect, useState } from 'react'

// Простой роутер на hash (#/contacts). Работает на любом хостинге
// без настройки сервера — и на cPanel, и на GitHub Pages.
function current() {
  const h = window.location.hash.replace(/^#\/?/, '')
  const [path, anchor] = h.split('#')
  return { path: path.replace(/\/$/, ''), anchor }
}

export function useRoute() {
  const [route, setRoute] = useState(current)
  useEffect(() => {
    const onChange = () => setRoute(current())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  useEffect(() => {
    if (route.anchor) {
      document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [route])
  return route
}

// Ссылка: href('contacts') → '#/contacts'; href('', 'services') → '#/#services'
export const href = (path = '', anchor) => `#/${path}${anchor ? `#${anchor}` : ''}`
