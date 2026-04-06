import { PawPrint } from 'lucide-react'

import { assets, niches } from '../../data/siteContent'
import { Intro } from '../Intro/Intro'

import styles from './Niches.module.css'

export function Niches() {
  return (
    <section className="section section-dark">
      <div className={`container ${styles['dark-feature-grid']}`}>
        <article className="media-frame media-frame-dark">
          <img src={assets.hipismo} alt="Profissional com cavalo em ambiente equestre premium" />
        </article>
        <div className="content-stack">
          <Intro
            eyebrow="Nichos atendidos"
            title="Feito para quem vive o mundo animal"
            description="Cada segmento tem sua linguagem. Nós falamos todas elas com leitura de mercado, repertório visual e estratégia."
            light
          />
          <div className={styles['niches-grid']}>
            {niches.map((item) => (
              <div key={item} className={styles['niche-pill']}>
                <PawPrint size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
