/* Réception des soumissions du formulaire de contact et envoi par e-mail via Resend.
   Routage : demandes de contact → contact@, demandes de partenariat → partners@. */

const ROUTES = {
  contact: 'contact@promotional-sourcing.eu',
  partenariat: 'partners@promotional-sourcing.eu',
} as const

const FROM = 'Promotional Sourcing <noreply@promotional-sourcing.eu>'

const MAX = { name: 200, company: 200, email: 254, phone: 50, message: 5000 }

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!,
  )

/* Chemins relatifs : les redirections restent valides sur les Deploy Previews Netlify. */
const redirect = (path: string) => new Response(null, { status: 303, headers: { Location: path } })

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 })

  const form = await req.formData()
  const field = (key: string) => String(form.get(key) ?? '').trim()

  const locale = field('locale') === 'en' ? 'en' : 'fr'
  const thanksPath = locale === 'en' ? '/en/thank-you/' : '/merci/'
  const errorPath = locale === 'en' ? '/en/contact/?error=1' : '/contact/?error=1'

  // Piège à bots : on fait comme si l'envoi avait réussi.
  if (field('bot-field')) return redirect(thanksPath)

  const type = field('type') === 'partenariat' ? 'partenariat' : 'contact'
  const name = field('name')
  const company = field('company')
  const email = field('email')
  const phone = field('phone')
  const message = field('message')

  const valid =
    name.length > 0 &&
    name.length <= MAX.name &&
    company.length > 0 &&
    company.length <= MAX.company &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    email.length <= MAX.email &&
    phone.length <= MAX.phone &&
    message.length > 0 &&
    message.length <= MAX.message
  if (!valid) return redirect(errorPath)

  const subject =
    type === 'partenariat'
      ? `[Site] Demande de partenariat — ${company}`
      : `[Site] Demande de contact — ${company}`

  const rows: Array<[string, string]> = [
    ['Type de demande', type === 'partenariat' ? 'Partenariat' : 'Contact'],
    ['Nom', name],
    ['Société', company],
    ['E-mail', email],
    ['Téléphone', phone || '—'],
    ['Langue', locale],
  ]

  const html = [
    '<h2>Nouvelle demande envoyée depuis le formulaire du site</h2>',
    '<table cellpadding="4">',
    ...rows.map(
      ([label, value]) =>
        `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`,
    ),
    '</table>',
    '<h3>Message</h3>',
    `<p>${escapeHtml(message).replace(/\r?\n/g, '<br />')}</p>`,
  ].join('\n')

  const text = [
    'Nouvelle demande envoyée depuis le formulaire du site',
    '',
    ...rows.map(([label, value]) => `${label} : ${value}`),
    '',
    'Message :',
    message,
  ].join('\n')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [ROUTES[type]],
      reply_to: email,
      subject,
      html,
      text,
    }),
  })

  if (!res.ok) {
    console.error('Échec de l’envoi Resend :', res.status, await res.text())
    return redirect(errorPath)
  }

  return redirect(thanksPath)
}
