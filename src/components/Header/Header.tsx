import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import type { NavigationItem } from '../../types/content'
import styles from './Header.module.css'

type HeaderProps = {
  logoSrc: string
  navigation: NavigationItem[]
  whatsappUrl: string
  onOpenMenu: () => void
}

export function Header({ logoSrc, navigation, whatsappUrl, onOpenMenu }: HeaderProps) {
  const [showDesktopCta, setShowDesktopCta] = useState(() => window.innerWidth >= 1024)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const updateDesktopCta = (event: MediaQueryList | MediaQueryListEvent) => {
      setShowDesktopCta(event.matches)
    }

    updateDesktopCta(mediaQuery)
    mediaQuery.addEventListener('change', updateDesktopCta)

    return () => {
      mediaQuery.removeEventListener('change', updateDesktopCta)
    }
  }, [])

  return (
    <header className={styles['site-header']}>
      <div className="container">
        <div className={styles['header-bar']}>
          <a href="#inicio" className={styles['brand-link']} aria-label="Nest Studio">
            <img src={logoSrc} alt="Nest Studio" className={styles['brand-logo']} />
          </a>

          <nav className={styles['desktop-nav']}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className={styles['desktop-nav-link']}>
                {item.label}
              </a>
            ))}
          </nav>

          {showDesktopCta ? (
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`button button-primary ${styles['header-cta']}`}>
              Falar no WhatsApp
            </a>
          ) : null}

          <button type="button" className={styles['mobile-menu-button']} onClick={onOpenMenu} aria-label="Abrir menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
