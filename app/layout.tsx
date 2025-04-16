import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'QI | Quality Intelligence - Autonomous AI QA Assistant',
  description:
    'QI is AI-powered Quality Assurance that automatically analyzes the code, generates and runs tests, ensuring high quality software with no human interventions',
  keywords:
    'AI QA, quality intelligence, automated testing, ai testing, autonomous QA, software testing, test automation, bug detection, QA automation, AI testing tool, AI code analysis, CI/CD testing, dev tools',
  openGraph: {
    title: 'QI | Quality Intelligence - Autonomous AI Quality Assurance',
    description:
      'QI is a fully autonomous Quality Assurance that uses AI to write tests, catch bugs, and speed up your release cycle with no human interventions',
    type: 'website',
    locale: 'en_US',
    siteName: 'QI-Quality Intelligence'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QI | Quality Intelligence - Autonomous AI Quality Assurance',
    description:
      'QI is a fully autonomous Quality Assurance that uses AI to write tests, catch bugs, and speed up your release cycle with no human interventions.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", '${process.env.CLARITY_PROJECT_ID}');`
          }}
        />
      </head>
      {/* <iframe
          width="540"
          height="305"
          src="https://sibforms.com/serve/MUIFAAbcqXmOh9VzYmLQ8n5xUlqXqQxcH20xpzlAdd8ISnlw0M1pcER-OtvIkZnxP-VkpA6DCn4-4ZSyNkWxjxr_JarRxLdv_svS9ZUteEFt102QdyP4_b0d4C39ksL0zqptHVB-IZkkk5zdhFR5f1UAnGQLcGuKsaYclyR73AIB8W2aVr0K9WFlPdukAYTaON6aq2wtlpJe3WFY"
          // frameborder="0"
          scrolling="auto"
          // allowfullscreen
          // style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
        ></iframe> */}
      <body className=" flex items-center">
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  )
}
