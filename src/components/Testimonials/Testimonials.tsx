import { testimonials } from '../../data/siteContent'
import { Intro } from '../Intro/Intro'
import { Rail } from '../Rail/Rail'

import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section className="section section-dark">
      <div className="container content-stack-lg">
        <Intro
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          description="Experiências reais de quem buscava mais clareza de posicionamento, consistência visual e presença digital com mais autoridade."
          light
        />
        <Rail>
          {testimonials.map((item, index) => (
            <article key={`${item.author}-${index}`} className={styles['testimonial-card']}>
              <div className={styles['testimonial-header']}>
                <img src={item.image} alt="Depoimento cliente" className={styles['testimonial-image']} />
                <span className={styles['testimonial-author']}>{item.author}</span>
              </div>
              <p className={styles['testimonial-quote']}>“{item.quote}”</p>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  )
}
