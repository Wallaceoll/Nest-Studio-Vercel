import { assets, services } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";
import { Intro } from "../Intro/Intro";

import styles from "./Services.module.css";

export function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="servicos" className="section section-light reveal">
      <div className="container content-stack-lg">
        <div className={styles["services-header"]}>
          <Intro
            eyebrow="Serviços"
            title="Tudo que a sua marca precisa, em um só lugar"
            description="Do planejamento à execução, oferecemos soluções completas para posicionar sua marca, atrair clientes e gerar resultados reais."
          />
          <article className="media-frame">
            <img
              src={assets.services}
              alt="Mesa de direção criativa com notebook, câmera e elementos da marca"
            />
          </article>
        </div>

        <div className={styles["services-grid"]}>
          {services.map((group) => (
            <article
              key={group.title}
              className={`service-card ${styles["service-card"]}`}
            >
              <span className="eyebrow">{group.title}</span>
              <p className={styles["service-description"]}>
                {group.description}
              </p>
              <div className={styles["service-items"]}>
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className={styles["service-item"]}>
                      <span className={styles["service-item-icon"]}>
                        <Icon size={18} />
                      </span>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
