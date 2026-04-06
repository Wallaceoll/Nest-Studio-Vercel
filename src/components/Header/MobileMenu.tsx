import { X } from 'lucide-react'

import type { NavigationItem } from '../../types/content'
import styles from './Header.module.css'

type MobileMenuProps = {
  logoSrc: string
  navigation: NavigationItem[]
  whatsappUrl: string
  open: boolean
  onClose: () => void
}

export function MobileMenu({ logoSrc, navigation, whatsappUrl, open, onClose }: MobileMenuProps) {
  if (!open) {
    return null
  }

  return (
    <div className={styles['mobile-menu-overlay']}>
      <div className={styles['mobile-menu-panel']}>
        <div className={styles['mobile-menu-top']}>
          <img src={logoSrc} alt="Nest Studio" className={styles['brand-logo']} />
          <button type="button" className={styles['mobile-menu-button']} onClick={onClose} aria-label="Fechar menu">
            <X size={20} />
          </button>
        </div>
        <nav className={styles['mobile-nav']}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={styles['mobile-nav-link']} onClick={onClose}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary button-full">
          Quero crescer agora
        </a>
      </div>
    </div>
  )
}
