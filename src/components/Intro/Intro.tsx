import styles from './Intro.module.css'

type IntroProps = {
  eyebrow: string
  title: string
  description: string
  className?: string
  light?: boolean
}

export function Intro({
  eyebrow,
  title,
  description,
  className,
  light = false,
}: IntroProps) {
  return (
    <div className={`${styles['section-intro']}${className ? ` ${styles[className]}` : ''}`}>
      <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{eyebrow}</span>
      <h2 className={`${styles['section-title']}${light ? ` ${styles['section-title-light']}` : ''}`}>{title}</h2>
      <p className={`${styles['section-description']}${light ? ` ${styles['section-description-light']}` : ''}`}>{description}</p>
    </div>
  )
}
