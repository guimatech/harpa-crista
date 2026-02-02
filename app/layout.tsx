import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harpa Cristã',
  description: 'Harpa Cristã completa com todos os hinos. Busque por número ou título e visualize as letras completas.',
  keywords: ['harpa cristã', 'hinos', 'assembleia de deus', 'cristão', 'música gospel'],
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  publisher: 'Harpa Cristã',
  robots: 'index, follow',
  metadataBase: new URL('https://harpa-crista.vercel.app'),
  openGraph: {
    title: 'Harpa Cristã',
    description: 'Harpa Cristã completa com todos os hinos. Busque por número ou título e visualize as letras completas.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Harpa Cristã'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harpa Cristã',
    description: 'Harpa Cristã completa com todos os hinos. Busque por número ou título e visualize as letras completas.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}