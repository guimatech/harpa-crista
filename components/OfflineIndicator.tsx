'use client'

import { useEffect, useState } from 'react'

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)
      
      if (!online) {
        setShowIndicator(true)
      } else {
        // Mostrar brevemente que voltou online
        setShowIndicator(true)
        setTimeout(() => setShowIndicator(false), 3000)
      }
    }

    // Verificar status inicial
    updateOnlineStatus()

    // Escutar mudanças de conectividade
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])

  if (!showIndicator) return null

  return (
    <div className={`offline-indicator ${isOnline ? 'online' : 'offline'}`}>
      <div className="offline-indicator-content">
        {isOnline ? (
          <>
            <span className="status-icon">🟢</span>
            <span>Conectado</span>
          </>
        ) : (
          <>
            <span className="status-icon">🔴</span>
            <span>Modo Offline</span>
          </>
        )}
      </div>
    </div>
  )
}