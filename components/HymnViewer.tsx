'use client'

import { useEffect } from 'react'
import { type Hymn } from '../data/hymns'

interface HymnViewerProps {
  hymn: Hymn | null
}

export default function HymnViewer({ hymn }: HymnViewerProps) {
  useEffect(() => {
    if (hymn) {
      document.title = `${hymn.number} - ${hymn.title} | Harpa Cristã`
    } else {
      document.title = 'Harpa Cristã'
    }
  }, [hymn])

  if (!hymn) {
    return (
      <section className="hymn-viewer">
        <div className="viewer-content">
          <div className="empty-state">
            <h3>Selecione um hino</h3>
            <p>Escolha um hino da lista ao lado para visualizar a letra completa.</p>
          </div>
        </div>
      </section>
    )
  }

  const hasContent = (hymn.verses && hymn.verses.length > 0) || (hymn.chorus && hymn.chorus.trim())

  return (
    <section className="hymn-viewer">
      <div className="viewer-content">
        <div className="hymn-meta">
          <div className="hymn-meta-number">Hino {hymn.number}</div>
          <div className="hymn-meta-title">{hymn.title}</div>
        </div>

        <div className="hymn-lyrics">
          {hasContent ? (
            <div className="hymn-lyrics-inner">
              {/* First verse */}
              {hymn.verses && hymn.verses.length > 0 && (
                <div className="hymn-verse">
                  <div dangerouslySetInnerHTML={{ __html: hymn.verses[0] }} />
                </div>
              )}

              {/* Chorus after first verse */}
              {hymn.chorus && hymn.chorus.trim() && (
                <div className="hymn-verse chorus">
                  <div dangerouslySetInnerHTML={{ __html: hymn.chorus }} />
                </div>
              )}

              {/* Remaining verses */}
              {hymn.verses && hymn.verses.slice(1).map((verse, idx) => (
                <div key={idx + 1} className="hymn-verse">
                  <div dangerouslySetInnerHTML={{ __html: verse }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Letra não disponível</h3>
              <p>A letra deste hino ainda não foi adicionada.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}