import { MessageCircle } from 'lucide-react'

import styles from './WhatsAppFloat.module.css'

type WhatsAppFloatProps = {
  whatsappUrl: string
}

export function WhatsAppFloat({ whatsappUrl }: WhatsAppFloatProps) {
  return (
    <a className={styles['floating-whatsapp']} href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </a>
  )
}
