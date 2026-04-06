import type { ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

import styles from './Rail.module.css'

type RailProps = {
  children: ReactNode
}

export function Rail({ children }: RailProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollTrack = (direction: number) => {
    if (!trackRef.current) {
      return
    }

    trackRef.current.scrollBy({
      left: direction * trackRef.current.clientWidth * 0.86,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles['rail-wrap']}>
      <div className={styles['rail-actions']}>
        <button type="button" className={styles['rail-button']} onClick={() => scrollTrack(-1)} aria-label="Voltar">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className={styles['rail-button']} onClick={() => scrollTrack(1)} aria-label="Avançar">
          <ChevronRight size={18} />
        </button>
      </div>
      <div ref={trackRef} className={styles['rail-track']}>
        {children}
      </div>
    </div>
  )
}
