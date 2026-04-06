import { Play } from 'lucide-react'

import { portfolio } from '../../data/siteContent'
import type { MediaItem } from '../../types/content'
import { Intro } from '../Intro/Intro'
import { Rail } from '../Rail/Rail'

import mediaStyles from '../Media/MediaCards.module.css'

type PortfolioProps = {
  onSelectMedia: (item: MediaItem) => void
}

export function Portfolio({ onSelectMedia }: PortfolioProps) {
  return (
    <section id="portfolio" className="section section-cream">
      <div className="container content-stack-lg">
        <Intro
          eyebrow="Portfólio"
          title="Resultados que falam por si"
          description="Projetos reais desenvolvidos para o mercado animal, com mistura de fotografia, vídeos, peças para redes e construção de posicionamento visual."
          className="portfolio-intro"
        />
        <Rail>
          {portfolio.map((item) => (
            <article key={`${item.title}-${item.service}`} className={mediaStyles['media-card']}>
              <button type="button" className={mediaStyles['media-card-button']} onClick={() => onSelectMedia(item)}>
                <div className={`${mediaStyles['media-thumb']} ${mediaStyles['media-thumb-dark']}`}>
                  {item.kind === 'video' ? (
                    <>
                      <img src={item.cover} alt={item.title} />
                      <div className={mediaStyles['media-thumb-overlay']} />
                      <div className={mediaStyles['media-badge']}>
                        <Play size={14} />
                        <span>Vídeo</span>
                      </div>
                    </>
                  ) : (
                    <img src={item.src} alt={item.title} />
                  )}
                </div>
                <div className={mediaStyles['media-body']}>
                  <span className="eyebrow">{item.tag}</span>
                  <h3 className={mediaStyles['media-title']}>{item.title}</h3>
                  <p className={mediaStyles['media-description']}>{item.description}</p>
                  <div className={`${mediaStyles['media-meta']} ${mediaStyles['media-meta-olive']}`}>
                    <span>{item.service}</span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  )
}
