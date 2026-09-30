// Тексты — максимально близко к текущему translogcompany.com (заголовки и формулировки оттуда).
// Адрес во Вроцлаве убран по решению заказчика.

export const company = {
  name: 'Translog Company s.r.o.',
  founded: 2005,
  email: 'info@translog.company',
  phoneMain: '+420 222 200 762',
  instagram: 'https://instagram.com/translog.company.sro',
  logo: 'https://translogcompany.com/wp-content/uploads/2020/09/logo_gr_hd.png',
  logoWhite: 'https://translogcompany.com/wp-content/uploads/2020/09/logo_gr_hd-white.png',
  // Заголовок страницы на старом сайте
  headline: 'Shipping solutions that fit your needs',
  subline: 'Translog Company s.r.o. provides fast and reliable way of freight shipping',
  motto: 'Focusing, Connecting and Developing is our strategic plan for the future!',
  footerTagline: 'Everyday is a new day for us and we work really hard to satisfy our customer everywhere.',
  ceo: { name: 'Alexandera Volynchikova', role: 'Chief Executive Officer' },
}

export const facts = [
  { value: '2005', label: 'founded, with facilities in the Czech Republic and Poland' },
  { value: 'ca. 150', label: 'modernised EURO 6 tractor-trailer vehicles' },
  { value: '24/7', label: 'available, we deliver “Just in Time”' },
  { value: '€2.5 M', label: 'CMR insurance cover per event' },
]

export const about = [
  'The Translog Group was founded in 2005. We are focused on the realization of several transport types. To match the expectations of our customers, we exhaust all available possibilities.',
  'As a result of many years of logistic business experience, we provide our customers standard-, special- or nonstop express transports. Most of our daily work is the organization of time sensitive transports for the automotive industry, the heavy industry and the food industry.',
  'In order to guarantee our customers that their orders will be handled as soon as possible, even at short notice, we are available 24/7 and deliver “Just in Time”!',
]

// «Our Equipment and Services» — два списка с текущего сайта
export const whatWeHave = [
  'ca. 150 modern vehicles, from 1.5 ton delivery vans to 24 ton tractor-trailer units with GPS-tracking',
  'Tarpaulin trailers (standard and Mega-size)',
  'Refrigerated box trailers',
  'Trained drivers',
  'Multilingual staff',
  'Partner network',
  'Comprehensive CMR-Insurance cover up to 2.5 mio. € per event',
]
export const whatWeCanDo = [
  'Domestic, export and import transports all over the EU-area',
  'Standard and express transports',
  'Parcel to FTL shipments',
  'Automotive parts, food, industrial goods, pharma deliveries',
  'Oversized cargo, waste, dangerous goods',
  'Warehousing solutions',
]

export const fleetLineup = [
  { type: 'van', title: 'Delivery vans', text: 'From 1.5 t' },
  { type: 'tarp', title: 'Tarpaulin trailers', text: 'Standard and Mega-size' },
  { type: 'reefer', title: 'Refrigerated box trailers', text: 'Temperature-controlled' },
  { type: 'tank', title: 'Tankers', text: 'Liquid and dry bulk' },
]

export const services = [
  {
    slug: 'express',
    title: 'Express',
    subtitle: 'Road freight by Translog Company',
    intro: 'The entire loading area of the vehicle is dedicated to your shipment and the transport takes place directly, from point A to point B without further stops and transhipments.',
    features: ['From parcel to FTL', '24/7 cargo monitoring', 'European coverage', 'Non-stop driving / 2 drivers', 'Real time tracking', 'Just-in-Time'],
    advantages: [
      'Fleet of 150 modern vehicles (EURO 6, EURO 5 EEV)',
      'Refrigerated and tarpaulin semi-trailers',
      '24-hour tracking system',
      'CMR insurance up to 15 million CZK',
      'Experience with fruits, vegetables, frozen products, industrial and pharmaceutical goods',
    ],
    art: 'tarp',
  },
  {
    slug: 'dangerous-goods',
    title: 'Dangerous goods',
    subtitle: 'ADR, liquid and dry bulk',
    intro: 'We specialize in the transportation of liquid foods such as chocolate, beer, wine, fruit juices, sugar solutions, milk and more.',
    features: ['Thermo trailer', 'Mega trailer', 'Liquid bulk tankers', 'Dry bulk tanker', 'Experienced and trained ADR-drivers'],
    advantages: [],
    art: 'tank',
  },
]

export const partnerNetwork = {
  title: 'One for all – all for you',
  text: 'Over the years we have established long-term partnerships with service providers all over Europe. Together we deliver comprehensive logistical solutions, while you keep direct contact with us.',
}

export const offices = [
  {
    id: 'prague', title: 'Czech Republic', entity: 'Translog Company s.r.o.',
    address: ['Rohanské nábřeží 693/10', '186 00 Prague'],
    phones: ['+420 222 200 762', '+420 776 783 995'],
  },
  {
    id: 'poland', title: 'Poland', entity: 'Translog Polska Company sp. z o.o.',
    address: [],
    phones: ['+48 664 362 7272'],
  },
]

export const news = [
  {
    slug: 'start-translog-company',
    title: 'Start TRANSLOG COMPANY',
    date: '2016-02-15',
    category: 'Administration Blog',
    excerpt: 'Focusing, Connecting and Developing is our strategic plan for the future. The Translog Group was founded in 2005. We are focused on the realization of several transport types.',
    body: [
      'Focusing, Connecting and Developing is our strategic plan for the future. The Translog Group was founded in 2005. We are focused on the realization of several transport types. To match the expectations of our customers, we exhaust all available possibilities.',
      'As a result of many years of logistic business experience, we provide our customers standard-, special- or nonstop express transports. Our range of services grows continuously, so we can provide various solutions for different requests. Dangerous goods transports are part of our service as well as transport solutions for consolidated and groupage cargo.',
      'Interdisciplinary know-how and diversified equipment makes it possible for us to react to individual customer wishes immediately. Most of our daily work is the organization of time sensitive transports for the automotive industry, the heavy industry and the food industry.',
      'The whole vehicle fleet of the Translog Group and its equipment is continuously in change and can be adapted to our customer’s requirements. In this process, we do not lose the focus on the environment protection and the cost-efficiency.',
      'In order to guarantee our customers that their orders will be handled as soon as possible, even at short notice, we are available 24/7 and deliver “Just in Time”!',
    ],
  },
]
