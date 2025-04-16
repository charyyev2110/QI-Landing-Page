import { NextRequest, NextResponse } from 'next/server'
import dotenv from 'dotenv'

dotenv.config()

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY as string,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      email,
      listIds: [6],
      updateEnable: true
    })
  })

  const data = await res.json()

  if (!res.ok) {
    return NextResponse.json({ error: data.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'You are added to waitlist successfully' })
}
