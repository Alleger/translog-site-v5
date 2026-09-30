import { useEffect, useState } from 'react'

// Схема маршрутов в стиле карты метро. Прага — хаб, линии — направления по ЕС.
// Схема иллюстративная: положение городов условное, это не расписание регулярных рейсов.
const HUB = { x: 640, y: 400, name: 'Prague' }

const LINES = [
  { id: 'north', pts: [[640, 400], [640, 250], [540, 150]], stops: [['Berlin', 640, 250, 'l'], ['Hamburg', 540, 150, 'l']] },
  { id: 'east', pts: [[640, 400], [760, 280], [960, 280]], stops: [['Wrocław', 760, 280, 't'], ['Warsaw', 960, 280, 't']] },
  { id: 'southeast', pts: [[640, 400], [760, 520], [980, 520]], stops: [['Vienna', 760, 520, 'b'], ['Budapest', 980, 520, 'b']] },
  { id: 'south', pts: [[640, 400], [560, 480], [560, 640]], stops: [['Munich', 560, 480, 'r'], ['Milan', 560, 640, 'r']] },
  { id: 'west', pts: [[640, 400], [360, 400], [200, 560]], stops: [['Nuremberg', 520, 400, 't'], ['Frankfurt', 360, 400, 'br'], ['Paris', 200, 560, 'r']] },
  { id: 'northwest', pts: [[360, 400], [360, 300], [260, 200]], stops: [['Rotterdam', 260, 200, 'l']] },
]

const d = (pts) => 'M' + pts.map((p) => p.join(' ')).join(' L')

const label = (name, x, y, pos) => {
  const o = { r: [18, 6, 'start'], l: [-18, 6, 'end'], t: [0, -20, 'middle'], b: [0, 32, 'middle'], br: [14, 34, 'start'] }[pos]
  return <text key={name} x={x + o[0]} y={y + o[1]} textAnchor={o[2]} className="rm-label">{name}</text>
}

export default function RouteMap() {
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setMotion(!mq.matches)
  }, [])

  return (
    <svg className="route-map" viewBox="80 90 1000 610" role="img"
      aria-label="Schematic map: Prague hub with routes to Germany, Poland, Austria, Hungary, Italy, France and the Netherlands">
      {/* подложка-сетка */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" className="rm-grid" />
        </pattern>
      </defs>
      <rect x="80" y="90" width="1000" height="610" fill="url(#grid)" />

      {LINES.map((l, i) => (
        <path key={l.id} id={`rm-${l.id}`} d={d(l.pts)} className="rm-line" style={{ animationDelay: `${0.15 * i}s` }} />
      ))}

      {motion && LINES.map((l, i) => (
        <g key={`t-${l.id}`} className="rm-truck" visibility="hidden">
          <set attributeName="visibility" to="visible" begin={`${1.5 + i * 0.4}s`} />
          <rect x="-11" y="-7" width="22" height="14" rx="4" />
          <animateMotion dur={`${7 + i * 1.3}s`} repeatCount="indefinite" rotate="auto"
            keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" begin={`${1.5 + i * 0.4}s`}>
            <mpath href={`#rm-${l.id}`} />
          </animateMotion>
        </g>
      ))}

      {LINES.flatMap((l) => l.stops.map(([name, x, y, pos]) => (
        <g key={name}>
          <circle cx={x} cy={y} r="10" className="rm-stop" />
          {label(name, x, y, pos)}
        </g>
      )))}

      <circle cx={HUB.x} cy={HUB.y} r="30" className="rm-hub-ring" />
      <circle cx={HUB.x} cy={HUB.y} r="18" className="rm-hub" />
      <text x={HUB.x + 40} y={HUB.y + 10} className="rm-label rm-hub-label">{HUB.name}</text>
    </svg>
  )
}
