import { ArrowRight, X } from 'lucide-react'

import type { MediaItem } from '../../types/content'
import styles from './MediaModal.module.css'

type MediaModalProps = {
  media: MediaItem | null
  whatsappUrl: string
  onClose: () => void
}

export function MediaModal({ media, whatsappUrl, onClose }: MediaModalProps) {
  if (!media) {
    return null
  }

  return (
    <div className={styles['modal-overlay']} role="dialog" aria-modal="true">
      <div className={styles['modal-shell']}>
        <button type="button" className={styles['modal-close']} onClick={onClose} aria-label="Fechar modal">
          <X size={20} />
        </button>
        <div className={styles['modal-grid']}>
          <div className={styles['modal-media']}>
            {media.kind === 'video' ? (
              <video src={media.src} poster={media.cover} controls autoPlay playsInline />
            ) : (
              <img src={media.src} alt={media.title} />
            )}
          </div>
          <div className={styles['modal-copy']}>
            <span className="eyebrow">{media.tag}</span>
            <h3>{media.title}</h3>
            <p>{media.description}</p>
            <div className={`modal-service ${styles['modal-service']}`}>
              <span>Serviço realizado</span>
              <strong>{media.service}</strong>
            </div>
            <div className={styles['modal-actions']}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary">
                Solicitar projeto
                <ArrowRight size={18} />
              </a>
              <button type="button" className="button button-secondary" onClick={onClose}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
