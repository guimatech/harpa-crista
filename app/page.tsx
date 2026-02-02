'use client'

import { useState, useEffect, useMemo } from 'react'
import { hymns, type Hymn } from '../data/hymns'
import HymnList from '../components/HymnList'
import HymnViewer from '../components/HymnViewer'
import SearchBar from '../components/SearchBar'

function normalizeText(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

export default function Home() {
  const [selectedHymn, setSelectedHymn] = useState<Hymn | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredHymns = useMemo(() => {
    if (!searchQuery.trim()) return hymns

    const query = normalizeText(searchQuery.trim())
    const isNumber = /^\d+$/.test(query)

    return hymns.filter(hymn => {
      if (isNumber) {
        return String(hymn.number).includes(query)
      }
      
      const titleNorm = normalizeText(hymn.title)
      return titleNorm.includes(query)
    })
  }, [searchQuery])

  useEffect(() => {
    // Auto-select first hymn if none is selected and we have hymns
    if (!selectedHymn && filteredHymns.length > 0) {
      setSelectedHymn(filteredHymns[0])
    }
    // If current selection is not in filtered results, select first filtered hymn
    else if (selectedHymn && filteredHymns.length > 0 && !filteredHymns.find(h => h.id === selectedHymn.id)) {
      setSelectedHymn(filteredHymns[0])
    }
  }, [filteredHymns, selectedHymn])

  const handleHymnSelect = (hymn: Hymn) => {
    setSelectedHymn(hymn)
    
    // Scroll to top of viewer on mobile
    if (window.innerWidth <= 768) {
      const viewer = document.querySelector('.hymn-viewer')
      if (viewer) {
        viewer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  const handleKeyNavigation = (direction: 'up' | 'down') => {
    if (!selectedHymn || filteredHymns.length === 0) return

    const currentIndex = filteredHymns.findIndex(h => h.id === selectedHymn.id)
    if (currentIndex === -1) return

    let nextIndex: number
    if (direction === 'down') {
      nextIndex = currentIndex + 1 < filteredHymns.length ? currentIndex + 1 : 0
    } else {
      nextIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : filteredHymns.length - 1
    }

    setSelectedHymn(filteredHymns[nextIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        handleKeyNavigation('down')
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        handleKeyNavigation('up')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedHymn, filteredHymns])

  return (
    <div className="app-container">
      <header className="app-header">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Harpa Cristã"
        />
      </header>

      <main className="app-main">
        <HymnList
          hymns={filteredHymns}
          selectedHymn={selectedHymn}
          onHymnSelect={handleHymnSelect}
        />
        
        <HymnViewer hymn={selectedHymn} />
      </main>
    </div>
  )
}