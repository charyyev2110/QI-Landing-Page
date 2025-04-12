import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QI-Quality Intelligence',
  description: 'Fully Autonomous AI Quality Assurance'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className=" flex items-center">
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  )
}
