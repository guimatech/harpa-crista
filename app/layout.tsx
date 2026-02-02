import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PWAInstaller from '../components/PWAInstaller'
import OfflineIndicator from '../components/OfflineIndicator'
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
  manifest: '/manifest.json',
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
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Harpa Cristã'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Harpa Cristã" />
        <meta name="msapplication-TileColor" content="#4299e1" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={inter.className}>
        {children}
        <PWAInstaller />
        <OfflineIndicator />
      </body>
    </html>
  )
}