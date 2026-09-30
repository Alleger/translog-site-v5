import { useState } from 'react'
import { company } from '../content.js'

// Форма запроса. Пока без сервера: собирает письмо и открывает почтовый клиент.
// Позже можно отправлять в n8n (webhook) или CRM — поменять только handleSubmit.
const empty = { name: '', company: '', email: '', phone: '', from: '', to: '', cargo: '', message: '' }

export default function QuoteForm({ id = 'quote' }) {
  const [data, setData] = useState(empty)
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setData({ ...data, [k]: e.target.value })

  function handleSubmit(e) {
    e.preventDefault()
    const subject = `Quote request: ${data.from || '?'} → ${data.to || '?'}`
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Loading place: ${data.from}`,
      `Unloading place: ${data.to}`,
      `Cargo: ${data.cargo}`,
      '',
      data.message,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form id={id} className="quote-form" onSubmit={handleSubmit}>
      <div className="form-route">
        <label>
          Loading place
          <input required value={data.from} onChange={set('from')} placeholder="City, country" autoComplete="off" />
        </label>
        <span className="form-route-line" aria-hidden="true" />
        <label>
          Unloading place
          <input required value={data.to} onChange={set('to')} placeholder="City, country" autoComplete="off" />
        </label>
      </div>
      <label>
        Cargo
        <input value={data.cargo} onChange={set('cargo')} placeholder="e.g. 12 pallets, 8 t, refrigerated" />
      </label>
      <div className="form-grid">
        <label>
          Your name
          <input required value={data.name} onChange={set('name')} autoComplete="name" />
        </label>
        <label>
          Company
          <input value={data.company} onChange={set('company')} autoComplete="organization" />
        </label>
        <label>
          Email
          <input required type="email" value={data.email} onChange={set('email')} autoComplete="email" />
        </label>
        <label>
          Phone
          <input type="tel" value={data.phone} onChange={set('phone')} autoComplete="tel" />
        </label>
      </div>
      <label>
        Details
        <textarea rows="3" value={data.message} onChange={set('message')} placeholder="Dates, dimensions, special requirements" />
      </label>
      <div className="form-foot">
        <button type="submit" className="btn btn-accent">Send request by email</button>
        <p className="form-note" role="status">
          {sent
            ? `Your email app opened with the request. If it didn’t, write to ${company.email}.`
            : `Opens your email app with the request addressed to ${company.email}.`}
        </p>
      </div>
    </form>
  )
}
