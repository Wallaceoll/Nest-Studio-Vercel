import { Instagram, Mail } from 'lucide-react'

import styles from './Footer.module.css'

type FooterProps = {
  logoSrc: string
  instagramUrl: string
  emailUrl: string
}

export function Footer({ logoSrc, instagramUrl, emailUrl }: FooterProps) {
  return (
    <footer className={styles['site-footer']}>
      <div className={`container ${styles['footer-inner']}`}>
        <div className={styles['footer-brand']}>
          <img src={logoSrc} alt="Nest Studio" className={styles['brand-logo-footer']} />
          <p>Marketing digital para o universo animal</p>
        </div>
        <div className={styles['footer-contact-links']}>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className={styles['footer-contact-item']}>
            <Instagram size={18} />
            <span>@_neststudio</span>
          </a>
          <a href={emailUrl} className={styles['footer-contact-item']}>
            <Mail size={18} />
            <span>Neststudiopet@gmail.com</span>
          </a>
        </div>
        <div className={styles['footer-copyright']}>
          <span>© 2026 Nest Studio. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
