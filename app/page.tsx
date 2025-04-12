'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const Home = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setMessage('')
    console.log('email', email)
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await res.json()
      console.log('data', data)
      if (res.ok) {
        setMessage('Thank you for joining our waitlist')
        setEmail('')
      } else {
        setMessage(data.error || 'Something went wrong')
      }
    } catch (error) {
      // setMessage('Failed to submit')
      console.log('something went wront', error)
    }
    setLoading(false)
  }

  return (
    <div className="h-screen w-screen rounded-md bg-background relative flex flex-col items-center justify-center antialiased ">
      <div className="max-w-2xl mx-auto p-4 ">
        <h1 className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          QI-Quality Intelligence
        </h1>
        <h2 className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Fully Autonomous AI-powered Quality Assurance
        </h2>
        <p></p>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          QI is an autonomous AI-powered system that analyzes the code, generates tests, installs
          and configures the testing environment, and runs all the tests with zero manual setup or
          human involvement.
        </p>
        <div className="flex w-full items-center gap-2 p-2 z-10">
          <Input
            type="email"
            placeholder="example@example.com"
            className="w-full relative z-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubmit} aria-disabled={loading} className="z-10">
            {loading ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </div>
        <div className="w-full h-8 flex justify-center items-center">
          <p className="text-muted-foreground">{message}</p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Home
