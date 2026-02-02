'use client'

import { type Hymn } from '../data/hymns'

interface HymnListProps {
  hymns: Hymn[]
  selectedHymn: Hymn | null
  onHymnSelect: (hymn: Hymn) => void
}

export default function HymnList({ hymns, selectedHymn, onHymnSelect }: HymnListProps) {
  if (hymns.length === 0) {
    return (
      <aside className="hymn-list-container">
        <div className="list-header">
          <h2>Hinos</h2>
          <span className="hymn-count">0 hinos</span>
        </div>
        <div className="empty-state">
          <h3>Nenhum hino encontrado</h3>
          <p>Tente buscar por outro termo ou número</p>
        </div>
      </aside>
    )
  }

  return (
    <aside className="hymn-list-container">
      <div className="list-header">
        <h2>Hinos</h2>
        <span className="hymn-count">
          {hymns.length} {hymns.length === 1 ? 'hino' : 'hinos'}
        </span>
      </div>
      <ul className="hymn-list">
        {hymns.map((hymn) => (
          <li key={hymn.id}>
            <button
              onClick={() => onHymnSelect(hymn)}
              className={selectedHymn?.id === hymn.id ? 'active' : ''}
              aria-label={`Hino ${hymn.number}: ${hymn.title}`}
            >
              <span className="hymn-number">
                {String(hymn.number).padStart(3, '0')}
              </span>
              <span className="hymn-title">
                {hymn.title || 'Título não disponível'}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}