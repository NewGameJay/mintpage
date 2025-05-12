import './globals.css'
import type { Metadata } from 'next'
import { Crimson_Text } from 'next/font/google'

const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NFT Mint Page',
  description: 'Check your whitelist status and mint NFTs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={crimsonText.className}>{children}</body>
    </html>
  )
}
