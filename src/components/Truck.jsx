// Плоские иллюстрации техники (вид сбоку). Цвета берутся из CSS-переменных темы.
const Wheel = ({ x, y = 98 }) => (
  <g>
    <circle cx={x} cy={y} r="13" className="tk-tyre" />
    <circle cx={x} cy={y} r="5" className="tk-hub" />
  </g>
)

// Тягач, смотрит вправо; x — левый край
const Tractor = ({ x = 232 }) => (
  <g>
    <rect x={x - 6} y="80" width="86" height="10" className="tk-chassis" />
    <path d={`M${x} 84 V38 q0-10 10-10 h40 q14 0 20 12 l10 22 V84 z`} className="tk-cab" />
    <path d={`M${x + 50} 36 h8 q8 0 12 8 l7 16 h-27 z`} className="tk-glass" />
    <rect x={x + 8} y="40" width="30" height="20" rx="2" className="tk-glass" />
    <rect x={x + 78} y="70" width="6" height="12" rx="2" className="tk-light" />
    <Wheel x={x + 22} />
    <Wheel x={x + 62} />
  </g>
)

export default function Truck({ type = 'tarp', className = '' }) {
  if (type === 'van') {
    return (
      <svg viewBox="0 0 320 120" className={`truck ${className}`} aria-hidden="true">
        <line x1="10" y1="112" x2="310" y2="112" className="tk-road" />
        <path d="M70 90 V34 q0-10 10-10 h120 q10 0 16 8 l26 30 q6 6 6 14 V90 z" className="tk-body" />
        <path d="M204 34 h6 q6 0 10 5 l20 24 h-36 z" className="tk-glass" />
        <rect x="236" y="74" width="10" height="8" rx="2" className="tk-light" />
        <rect x="70" y="56" width="130" height="8" className="tk-stripe" />
        <Wheel x={108} />
        <Wheel x={206} />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 320 120" className={`truck ${className}`} aria-hidden="true">
      <line x1="4" y1="112" x2="316" y2="112" className="tk-road" />
      {type === 'tarp' && (
        <g>
          <rect x="8" y="14" width="214" height="70" rx="3" className="tk-tarp" />
          {[40, 72, 104, 136, 168, 200].map((x) => <line key={x} x1={x} y1="16" x2={x} y2="82" className="tk-rib" />)}
          <rect x="8" y="76" width="214" height="8" className="tk-stripe" />
        </g>
      )}
      {type === 'reefer' && (
        <g>
          <rect x="8" y="14" width="214" height="70" rx="3" className="tk-box" />
          <rect x="214" y="24" width="14" height="36" rx="2" className="tk-unit" />
          <g className="tk-snow" transform="translate(110 49)">
            <path d="M0-18V18M-15.6-9L15.6 9M-15.6 9L15.6-9" />
          </g>
        </g>
      )}
      {type === 'tank' && (
        <g>
          <rect x="10" y="22" width="210" height="58" rx="29" className="tk-tank" />
          <rect x="60" y="14" width="24" height="10" rx="2" className="tk-body" />
          <rect x="140" y="14" width="24" height="10" rx="2" className="tk-body" />
          <line x1="20" y1="51" x2="210" y2="51" className="tk-rib" />
          <g transform="translate(96 38)">
            <rect width="40" height="28" rx="2" className="tk-adr" />
            <line x1="0" y1="14" x2="40" y2="14" className="tk-adr-line" />
          </g>
        </g>
      )}
      <rect x="8" y="84" width="220" height="6" className="tk-chassis" />
      <Wheel x={42} />
      <Wheel x={70} />
      <Wheel x={98} />
      <Tractor />
    </svg>
  )
}

// Оранжевая табличка ADR (без номеров — условная)
export function AdrPlate({ className = '' }) {
  return (
    <svg viewBox="0 0 120 84" className={className} aria-hidden="true">
      <rect x="2" y="2" width="116" height="80" rx="6" className="tk-adr" />
      <rect x="2" y="2" width="116" height="80" rx="6" fill="none" className="tk-adr-border" />
      <line x1="2" y1="42" x2="118" y2="42" className="tk-adr-line" />
    </svg>
  )
}
