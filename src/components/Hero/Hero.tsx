import { ArrowRight, BarChart3, Heart, PawPrint, ShieldCheck } from 'lucide-react'

import styles from './Hero.module.css'

type HeroProps = {
  heroImage: string
  heroMobileImage: string
  whatsappUrl: string
}

export function Hero({ heroImage, heroMobileImage, whatsappUrl }: HeroProps) {
  return (
    <section id="inicio" className={styles['hero-section']}>
      <div className={styles['hero-media-desktop']} aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobileImage} />
          <img src={heroImage} alt="Cachorros se divertindo" className={`${styles['hero-background']} ${styles['hero-background-fill']}`} />
        </picture>
        <img src={heroMobileImage} alt="" className={styles['hero-background-mobile-full']} />
      </div>
      <div className={styles['hero-overlay']} />
      <div className={styles['hero-glow']} />
      <div className={`container ${styles['hero-content']}`}>
        <div className={styles['hero-grid']}>
          <div className={styles['hero-copy']}>
            <span className="eyebrow eyebrow-light">Marketing digital para o universo animal</span>
            <h1 className={styles['hero-title']}>Sua marca no mundo animal merece ser vista</h1>
            <p className={styles['hero-description']}>
              Somos especialistas em marketing digital para o universo pet. Do conteúdo à conversão, cuidamos de tudo com direção visual, estratégia e presença de marca.
            </p>
            <div className={styles['hero-actions']}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary">
                Quero crescer agora
                <ArrowRight size={18} />
              </a>
            </div>
            <div className={styles['hero-highlights']}>
              <div className={styles['hero-highlight']}>
                <PawPrint size={18} />
                <span>Especialização real no universo pet</span>
              </div>
              <div className={styles['hero-highlight']}>
                <ShieldCheck size={18} />
                <span>Portfólio visual como prova de credibilidade</span>
              </div>
              <div className={styles['hero-highlight']}>
                <BarChart3 size={18} />
                <span>Clareza estratégica para transformar presença em valor</span>
              </div>
              <div className={styles['hero-highlight']}>
                <Heart size={18} />
                <span>Trabalho 100% feito com amor pelos animais e dedicação em tudo que engloba esse meio</span>
              </div>
            </div>
          </div>

          <div className={styles['hero-aside']}>
            <div className={styles['glass-card']}>
              <span className="eyebrow eyebrow-light">Direção editorial</span>
              <p>
                Imagem, comunicação e presença digital alinhadas para marcas que precisam parecer tão profissionais quanto realmente são.
              </p>
            </div>
            <div className={styles['hero-mini-grid']}>
              <article className={`${styles['mini-card']} ${styles['mini-card-dark']}`}>
                <span className={styles['mini-label']}>Atuação</span>
                <p>Conteúdo, posicionamento e conversão</p>
              </article>
              <article className={`${styles['mini-card']} ${styles['mini-card-dark']}`}>
                <span className={styles['mini-label']}>Atendimento</span>
                <p>Atendemos São Paulo (capital) e regiões próximas, com deslocamento personalizado para distâncias acima de 20 km.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
