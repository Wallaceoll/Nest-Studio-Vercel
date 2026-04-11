import { ArrowRight, Play } from "lucide-react";

import { featuredVideos } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";
import type { MediaItem } from "../../types/content";
import { Rail } from "../Rail/Rail";
import { Intro } from "../Intro/Intro";

import mediaStyles from "../Media/MediaCards.module.css";

type VideosProps = {
  onSelectMedia: (item: MediaItem) => void;
};

export function Videos({ onSelectMedia }: VideosProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="videos" className="section section-light reveal">
      <div className="container content-stack-lg">
        <Intro
          eyebrow="Vídeos em destaque"
          title="Conteúdos que geram conexão e resultado"
          description="Veja na prática como transformamos ideias em conteúdo que engaja, comunica com clareza e aproxima a marca do público certo."
        />
        <Rail>
          {featuredVideos.map((item) => (
            <article key={item.title} className={mediaStyles["media-card"]}>
              <button
                type="button"
                className={mediaStyles["media-card-button"]}
                onClick={() => onSelectMedia(item)}
              >
                <div
                  className={`${mediaStyles["media-thumb"]} ${mediaStyles["media-thumb-dark"]}`}
                >
                  <img src={item.cover} alt={item.title} />
                  <div className={mediaStyles["media-thumb-overlay"]} />
                  <div className={mediaStyles["media-badge"]}>
                    <Play size={14} />
                    <span>Assistir</span>
                  </div>
                </div>
                <div className={mediaStyles["media-body"]}>
                  <span className="eyebrow">{item.tag}</span>
                  <h3 className={mediaStyles["media-title"]}>{item.title}</h3>
                  <p className={mediaStyles["media-description"]}>
                    {item.description}
                  </p>
                  <div
                    className={`${mediaStyles["media-meta"]} ${mediaStyles["media-meta-accent"]}`}
                  >
                    <span>{item.service}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </button>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  );
}
