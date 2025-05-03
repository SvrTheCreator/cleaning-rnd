export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const token = '7315861448:AAHGustXhJLcWWZI4IOK8eIMuFIppUbDAns'
  const chat_id = '975689794'

  const { name, phone, category } = req.body

  const text = `🧹 Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nКатегория: ${category}`

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id, text }),
      }
    )

    const data = await telegramRes.json()

    if (!data.ok) {
      return res.status(500).json({ error: 'Telegram API error', detail: data })
    }

    res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ error: 'Server error', detail: e.message })
  }
}
