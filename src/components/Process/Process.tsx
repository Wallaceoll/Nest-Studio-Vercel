import { steps } from '../../data/siteContent'
import { Intro } from '../Intro/Intro'

import styles from './Process.module.css'

export function Process() {
  return (
    <section className="section section-light">
      <div className={`container ${styles['process-grid']}`}>
        <Intro
          eyebrow="Como funciona"
          title="Simples, rápido e eficiente"
          description="Um processo pensado para facilitar a tomada de decisão, acelerar o início do projeto e manter estratégia com execução alinhada."
          className="process-intro"
        />
        <div className={styles['steps-grid']}>
          {steps.map((step, index) => (
            <article key={step.title} className={`step-card ${styles['step-card']}`}>
              <span className={styles['step-index']}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
