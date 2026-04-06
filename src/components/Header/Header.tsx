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

          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={`button button-primary ${styles['header-cta']}`}>
            Falar no WhatsApp
          </a>

          <button type="button" className={styles['mobile-menu-button']} onClick={onOpenMenu} aria-label="Abrir menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
