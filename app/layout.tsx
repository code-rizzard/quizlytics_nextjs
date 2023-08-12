import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quizlytics',
  description: 'Fueling your quest for knowledge through interactive exploration and insightful analysis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
    className='bg-neutral'
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
