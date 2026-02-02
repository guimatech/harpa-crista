'use client'

import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Registrar Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registrado:', registration)
        })
        .catch((error) => {
          console.log('Erro ao registrar Service Worker:', error)
        })
    }

    // Verificar se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    // Escutar evento de instalação
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallButton(true)
    }

    // Escutar quando o app é instalado
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallButton(false)
      setDeferredPrompt(null)
      console.log('PWA instalada com sucesso!')
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('Usuário aceitou instalar a PWA')
    } else {
      console.log('Usuário recusou instalar a PWA')
    }
    
    setDeferredPrompt(null)
    setShowInstallButton(false)
  }

  if (isInstalled || !showInstallButton) {
    return null
  }

  return (
    <div className="pwa-install-banner">
      <div className="pwa-install-content">
        <div className="pwa-install-text">
          <strong>Instalar Harpa Cristã</strong>
          <p>Use offline no seu dispositivo</p>
        </div>
        <button 
          onClick={handleInstallClick}
          className="pwa-install-button"
          aria-label="Instalar aplicativo"
        >
          Instalar
        </button>
        <button 
          onClick={() => setShowInstallButton(false)}
          className="pwa-install-close"
          aria-label="Fechar"
        >
          ×
        </button>
      </div>
    </div>
  )
}