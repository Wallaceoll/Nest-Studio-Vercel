import { assets } from '../../data/siteContent'
import { Intro } from '../Intro/Intro'

import styles from './About.module.css'

export function About() {
  return (
    <section id="sobre" className="section section-cream">
      <div className={`container ${styles['two-column-grid']}`}>
        <div className={styles['about-copy']}>
          <Intro
            eyebrow="Sobre nós"
            title="Paixão pelo universo animal com visão de marca"
            description="Nascemos da paixão pelos animais e da expertise em marketing digital. Marcas não crescem por acaso. Elas são construídas com estratégia, visão e posicionamento."
          />
          <p className={styles['body-copy']}>
            A Nest cria imagem, direciona comunicação e gerencia presença digital para marcas, clínicas, pet shops, creches, profissionais autônomos do mercado pet e pets influencers que desejam evoluir. Transformamos presença em reconhecimento, consistência em valor e trabalho em autoridade. Cada decisão visual é pensada para fortalecer percepção de qualidade e facilitar conversão.
          </p>
        </div>

        <div className={styles['about-grid']}>
          <div className={styles['images-stack']}>
            <article className={`media-frame ${styles['media-frame-tall']}`}>
              <img src={assets.vetGroup} alt="Equipe veterinária Nest Studio" />
            </article>
            <article className={`media-frame ${styles['media-frame-tall']}`}>
              <img src={assets.professores} alt="Equipe de treinadores Nest Studio" />
            </article>
          </div>
          <div className={styles['stack-grid']}>
            <article className="panel panel-dark">
              <span className="eyebrow eyebrow-light">Posicionamento</span>
              <p>Comunicação com identidade própria para quem precisa ser lembrado com autoridade e sensibilidade.</p>
            </article>
            <article className="panel panel-warm">
              <span className="eyebrow">Mercado Pet</span>
              <p>Clareza de posicionamento para marcas, clínicas e negócios que precisam crescer com coerência visual, além da especialização em nichos onde repertório visual, confiança e proximidade fazem toda a diferença.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
