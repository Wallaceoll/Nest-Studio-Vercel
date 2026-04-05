import { ReactNode, useEffect, useRef, useState } from 'react'
import React from 'react'
import {
  ArrowRight,
  BarChart3,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PawPrint,
  PenTool,
  Play,
  ShieldCheck,
  Target,
  Video,
  X,
  type LucideIcon,
} from 'lucide-react'

type MediaItem = {
  title: string
  description: string
  tag: string
  service: string
  kind: 'image' | 'video'
  src: string
  cover?: string
}

type ServiceGroup = {
  title: string
  description: string
  items: { icon: LucideIcon; label: string }[]
}

type Testimonial = {
  image: string
  quote: string
  author: string
}

const safeUrl = (url: string) => encodeURI(url)
const whatsappUrl = 'https://wa.me/5511990061845'
const instagramUrl = 'https://www.instagram.com/_neststudio'
const emailUrl = 'mailto:Neststudiopet@gmail.com'

const assets = {
  logo: '/images/LogoNest.webp',
  hero: '/images/CachorrosLivres.webp',
  heroMobile: '/images/cachorroLivreMobile.PNG',
  vetGroup: '/images/meuLiVet.webp',
  professores: '/images/professores.webp',
  vet: '/images/vet.webp',
  petStudio: '/images/petStudio.webp',
  petStudioCliente: '/images/petStudioCliente.webp',
  anestesiaVet: '/images/anestesiaVet.webp',
  equestrianSport: '/images/equestrianSport.webp',
  services: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/nest-services-editorial-m5hybHWD3CZ3SztH9z9D6F.webp',
  hipismo: '/images/hipismo.webp',
  institutional: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/IMG_8818_9a026b41.JPG'),
  equestrian: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/IMG_8818_9a026b41.JPG'),
  petPortrait: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/IMG_0004_833ba8e6.JPG'),
  petLifestyle: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/IMG_7291_a6a213f9.JPG'),
  playMoment: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/IMG_7352_67c07b8b.JPG'),
  vetRoutine: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/IMG_7871_00129510.JPG'),
  brandShot: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/IMG-20260403-WA0011_3f935294.jpg'),
}

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Portfólio', href: '#portfolio' },
]

const services: ServiceGroup[] = [
  {
    title: 'Produção',
    description: 'Captação e direção criativa para transformar o seu atendimento em conteúdo com presença visual.',
    items: [
      { icon: Camera, label: 'Foto & Vídeo' },
      { icon: PenTool, label: 'Roteirização' },
    ],
  },
  
  {
    title: 'Performance',
    description: 'Estratégia aplicada para posicionar melhor sua marca, atrair os clientes certos e sustentar conversão.',
    items: [
      { icon: BarChart3, label: 'Estratégia de Marketing' },
      { icon: Target, label: 'Estudo de Público' },
      { icon: Video, label: 'Propagandas Comerciais' },
      { icon: MapPin, label: 'Google Meu Negócio' },
    ],
  },
  {
    title: 'Conteúdo',
    description: 'Planejamento e rotina editorial para manter a sua marca relevante, coerente e memorável.',
    items: [
      { icon: Clapperboard, label: 'Conteúdo para Redes' },
      { icon: MessageCircle, label: 'Gestão de Redes' },
    ],
  },
]

const niches = [
  'Clínicas Veterinárias',
  'Banho & Tosa',
  'Pet Shops',
  'Creches e Hotéis',
  'Haras e Centros Equestres',
  'Amazonas e Cavaleiros',
  'Professores e Treinadores',
  'Marcas Pet',
]

const featuredVideos: MediaItem[] = [
  {
    title: 'Apresentação institucional veterinária',
    description: 'Conteúdo pensado para transmitir autoridade, acolhimento e posicionamento profissional para clínica veterinária.',
    tag: 'Vídeo em destaque',
    service: 'Apresentação de marca',
    kind: 'video',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/Apresentação Meuli_bcc18617.mp4'),
    cover: assets.institutional,
  },
  {
    title: 'Atendimento humanizado em domicílio',
    description: 'Narrativa visual focada em proximidade, confiança e cuidado para serviços veterinários personalizados.',
    tag: 'Vídeo em destaque',
    service: 'Conteúdo para redes e captação',
    kind: 'video',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/Atendimento Domiciliar_d95e62ad.mp4'),
    cover: assets.vetRoutine,
  },
  {
    title: 'Posicionamento para o mercado equestre',
    description: 'Vídeo pensado para reforçar presença premium e conexão com o universo hípico de forma elegante.',
    tag: 'Vídeo em destaque',
    service: 'Conteúdo institucional',
    kind: 'video',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/Sobre a hípica_4cd80784.mp4'),
    cover: assets.equestrian,
  },
  {
    title: 'Autoridade técnica em procedimento',
    description: 'Material visual que comunica segurança clínica e seriedade profissional sem perder sensibilidade.',
    tag: 'Vídeo em destaque',
    service: 'Vídeo técnico e comercial',
    kind: 'video',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/Video Cirurgia_4745598f.mp4'),
    cover: assets.vet,
  },
  {
    title: 'Bastidores com linguagem social',
    description: 'Formato pensado para engajar, aproximar a audiência e mostrar rotina real de quem vive o mercado animal.',
    tag: 'Vídeo em destaque',
    service: 'Reels e bastidores',
    kind: 'video',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/lv_0_20260326122615_cce853b7.mp4'),
    cover: assets.brandShot,
  },
]

const portfolio: MediaItem[] = [
  {
    title: 'Presença institucional para clínica veterinária',
    description: 'Retrato pensado para credibilidade, proximidade e construção de imagem profissional.',
    tag: 'Portfólio',
    service: 'Fotografia institucional',
    kind: 'image',
    src: assets.institutional,
  },
  {
    title: 'Campanha visual pet com apelo emocional',
    description: 'Fotografia editorial que aproxima a marca do público por meio de delicadeza, afeto e direção consistente.',
    tag: 'Portfólio',
    service: 'Fotografia para redes sociais',
    kind: 'image',
    src: assets.petPortrait,
  },
  {
    title: 'Conteúdo premium para nicho equestre',
    description: 'Imagem construída para reforçar elegância, disciplina e pertencimento ao universo hípico.',
    tag: 'Portfólio',
    service: 'Captação e posicionamento visual',
    kind: 'image',
    src: assets.equestrian,
  },
  {
    title: 'Direção criativa para presença digital',
    description: 'Peça visual que mostra o cuidado da marca com composição, hierarquia e linguagem editorial.',
    tag: 'Portfólio',
    service: 'Design para redes sociais',
    kind: 'image',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/20260326_143809_0000_19c32f25.png'),
  },
  {
    title: 'Campanha para escola de equitação',
    description: 'Arte criada para unir energia comercial com leitura visual clara para o público do mercado equestre.',
    tag: 'Portfólio',
    service: 'Post comercial',
    kind: 'image',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/Post para Instagram escola de equitação moderno vermelho e verde - 1_936d8871.png'),
  },
  {
    title: 'Carrossel pensado para confiança e clareza',
    description: 'Formato visual criado para informar, gerar conexão e manter identidade visual consistente.',
    tag: 'Portfólio',
    service: 'Carrossel para Instagram',
    kind: 'image',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/carrossel_depoimentos-2 (1).pdf_20260326_094535_0000_1f52911f.png'),
  },
  {
    title: 'Rotina clínica em vídeo',
    description: 'Conteúdo de autoridade para mostrar bastidores, técnica e confiança no atendimento.',
    tag: 'Portfólio',
    service: 'Vídeo técnico',
    kind: 'video',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/Video Cirurgia_4745598f.mp4'),
    cover: assets.vet,
  },
  {
    title: 'Conteúdo social com linguagem afetiva',
    description: 'Peça criada para gerar memória visual, aproximação e continuidade estética da marca nas redes.',
    tag: 'Portfólio',
    service: 'Conteúdo de feed',
    kind: 'image',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/nest-c2-final2_75e483d6.png'),
  },
  {
    title: 'Retrato pet para campanhas de engajamento',
    description: 'Imagem com construção emocional para peças que pedem leveza e identificação imediata.',
    tag: 'Portfólio',
    service: 'Fotografia pet',
    kind: 'image',
    src: assets.petStudio,
  },
  {
    title: 'Bastidor de rotina em formato reels',
    description: 'Material pensado para presença frequente e relacionamento com a audiência no dia a dia.',
    tag: 'Portfólio',
    service: 'Reels e bastidores',
    kind: 'video',
    src: safeUrl('https://d2xsxph8kpxj0f.cloudfront.net/310419663031337946/PQVYgYjmNTckYyZr4Cs7Jh/lv_0_20260326122615_cce853b7.mp4'),
    cover: assets.brandShot,
  },
]

const testimonials: Testimonial[] = [
  {
    image: assets.vet,
    quote:
      'Não tem como falar que não ficou perfeita a edição, ficou maravilhoso, perfeito, ta perfeito, ficou igualzinho aos documentários que eu assistia. Fiquei presa assistindo o video, exatamente do jeito que eu queria',
    author: '@meldvet',
  },
  {
    image: assets.petStudio,
    quote:
      'Sério, ficou bom demais. Dá pra ver que vocês tiveram um cuidado real na edição, tudo encaixa e flui muito bem. O vídeo prende, não fica cansativo e ainda passa a mensagem de um jeito claro e que realmente faz a gente pensar. Esse tipo de conteúdo faz diferença mesmo, fiquei bem feliz com o resultado. Mandaram muito bem!',
    author: '@_universofelino',
  },
  {
    image: assets.petStudioCliente,
    quote:
      'Gente, que foto linda! Sério, abriu até um sorriso aqui quando vi. Tá muito bem cuidada, com uma vibe leve e gostosa, daquelas que a gente olha e já sente que ficou especial. Deu pra ver o carinho na edição, ficou incrível mesmo!',
    author: '@lidiameggiolaro',
  },
  {
    image: assets.anestesiaVet,
    quote:
      'Tem momentos na rotina que pedem silêncio, foco e muito coração.Enquanto tudo parece técnico por fora, existe cuidado em cada detalhe, respeito por cada vida e uma responsabilidade enorme nas mãos. É por isso que eu escolhi estar aqui: pra cuidar de quem não pode dizer o que sente, mas confia tudo na gente Registro lindo da  _neststudio',
    author: '@vetbeatriznardi',
  },
  {
    image: assets.equestrianSport,
    quote:
      'Com enorme prazer que a BCC SPORT HORSE inicia uma nova iornada com a _neststudio , um pouco do nosso primeiro trabalho juntos. Muito obrigado pelc trabalho incrível de todas vocês.',
    author: '@bccsporthorse',
  },
]

const steps = [
  {
    title: 'Conversa inicial',
    description: 'Entendimento do momento da marca, objetivos, diferenciais e perfil de atendimento.',
  },
  {
    title: 'Diagnóstico gratuito',
    description: 'Leitura do posicionamento atual para identificar o que precisa ser reforçado, ajustado e priorizado.',
  },
  {
    title: 'Proposta personalizada',
    description: 'Definição de escopo, linguagem visual, ritmo de produção e estratégia de comunicação.',
  },
  {
    title: 'Execução e resultados',
    description: 'Captação, criação, gestão e acompanhamento para transformar presença em percepção de valor.',
  },
]

function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  light = false,
}: {
  eyebrow: string
  title: string
  description: string
  className?: string
  light?: boolean
}) {
  return (
    <div className={`section-intro${className ? ` ${className}` : ''}`}>
      <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{eyebrow}</span>
      <h2 className={`section-title${light ? ' section-title-light' : ''}`}>{title}</h2>
      <p className={`section-description${light ? ' section-description-light' : ''}`}>{description}</p>
    </div>
  )
}

function HorizontalRail({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollTrack = (direction: number) => {
    if (!trackRef.current) {
      return
    }

    trackRef.current.scrollBy({
      left: direction * trackRef.current.clientWidth * 0.86,
      behavior: 'smooth',
    })
  }

  return (
    <div className="rail-wrap">
      <div className="rail-actions">
        <button type="button" className="rail-button" onClick={() => scrollTrack(-1)} aria-label="Voltar">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className="rail-button" onClick={() => scrollTrack(1)} aria-label="Avançar">
          <ChevronRight size={18} />
        </button>
      </div>
      <div ref={trackRef} className="rail-track">
        {children}
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSelectedMedia(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = menuOpen || selectedMedia ? 'hidden' : ''

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen, selectedMedia])

  return (
    <div className="page-shell">
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>

      <header className="site-header">
        <div className="container">
          <div className="header-bar">
            <a href="#inicio" className="brand-link" aria-label="Nest Studio">
              <img src={assets.logo} alt="Nest Studio" className="brand-logo" />
            </a>

            <nav className="desktop-nav">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="desktop-nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary header-cta">
              Falar no WhatsApp
            </a>

            <button type="button" className="mobile-menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-panel">
            <div className="mobile-menu-top">
              <img src={assets.logo} alt="Nest Studio" className="brand-logo" />
              <button type="button" className="mobile-menu-button" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
                <X size={20} />
              </button>
            </div>
            <nav className="mobile-nav">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary button-full">
              Quero crescer agora
            </a>
          </div>
        </div>
      ) : null}

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-media-desktop" aria-hidden="true">
            <picture>
              <source media="(max-width: 767px)" srcSet={assets.heroMobile} />
              <img src={assets.hero} alt="Cachorros se divertindo" className="hero-background hero-background-fill" />
            </picture>
            <img src={assets.heroMobile} alt="" className="hero-background-mobile-full" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-glow" />
          <div className="container hero-content">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow eyebrow-light">Marketing digital para o universo animal</span>
                <h1 className="hero-title">Sua marca no mundo animal merece ser vista</h1>
                <p className="hero-description">
                  Somos especialistas em marketing digital para o universo pet. Do conteúdo à conversão, cuidamos de tudo com direção visual, estratégia e presença de marca.
                </p>
                <div className="hero-actions">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary">
                    Quero crescer agora
                    <ArrowRight size={18} />
                  </a>
                </div>
                <div className="hero-highlights">
                  <div className="hero-highlight">
                    <PawPrint size={18} />
                    <span>Especialização real no universo pet</span>
                  </div>
                  <div className="hero-highlight">
                    <ShieldCheck size={18} />
                    <span>Portfólio visual como prova de credibilidade</span>
                  </div>
                  <div className="hero-highlight">
                    <BarChart3 size={18} />
                    <span>Clareza estratégica para transformar presença em valor</span>
                  </div>
                  <div className="hero-highlight">
                    <Heart size={18} />
                    <span>Trabalho 100% feito com amor pelos animais e dedicação em tudo que engloba esse meio</span>
                  </div>
                </div>
              </div>

              <div className="hero-aside">
                <div className="glass-card">
                  <span className="eyebrow eyebrow-light">Direção editorial</span>
                  <p>
                    Imagem, comunicação e presença digital alinhadas para marcas que precisam parecer tão profissionais quanto realmente são.
                  </p>
                </div>
                <div className="hero-mini-grid">
                  <article className="mini-card mini-card-dark">
                    <span className="mini-label">Atuação</span>
                    <p>Conteúdo, posicionamento e conversão</p>
                  </article>
                  <article className="mini-card mini-card-dark">
                    <span className="mini-label">Atendimento</span>
                    <p>Atendemos São Paulo (capital) e regiões próximas, com deslocamento personalizado para distâncias acima de 20 km.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section section-cream">
          <div className="container two-column-grid">
            <div className="content-stack">
              <SectionIntro
                eyebrow="Sobre nós"
                title="Paixão pelo universo animal com visão de marca"
                description="Nascemos da paixão pelos animais e da expertise em marketing digital. Marcas não crescem por acaso. Elas são construídas com estratégia, visão e posicionamento."
              />
              <div className="body-copy">
                <p>
                  A Nest cria imagem, direciona comunicação e gerencia presença digital para marcas, clínicas, pet shops, creches, profissionais autônomos do mercado pet e pets influencers que desejam evoluir. Transformamos presença em reconhecimento, consistência em valor e trabalho em autoridade. Cada decisão visual é pensada para fortalecer percepção de qualidade e facilitar conversão.
                </p>
              </div>
            </div>

            <div className="about-grid">
              <div className="images-stack">
                <article className="media-frame media-frame-tall">
                  <img src={assets.vetGroup} alt="Equipe veterinária Nest Studio" />
                </article>
                <article className="media-frame media-frame-tall">
                  <img src={assets.professores} alt="Equipe de treinadores Nest Studio" />
                </article>
              </div>
              <div className="stack-grid">
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

        <section id="servicos" className="section section-light">
          <div className="container content-stack-lg">
            <div className="services-header">
              <SectionIntro
                eyebrow="Serviços"
                title="Tudo que a sua marca precisa, em um só lugar"
                description="Do planejamento à execução, oferecemos soluções completas para posicionar sua marca, atrair clientes e gerar resultados reais."
              />
              <article className="media-frame">
                <img src={assets.services} alt="Mesa de direção criativa com notebook, câmera e elementos da marca" />
              </article>
            </div>

            <div className="services-grid">
              {services.map((group) => (
                <article key={group.title} className="service-card">
                  <span className="eyebrow">{group.title}</span>
                  <p className="service-description">{group.description}</p>
                  <div className="service-items">
                    {group.items.map((item) => {
                      const Icon = item.icon

                      return (
                        <div key={item.label} className="service-item">
                          <span className="service-item-icon">
                            <Icon size={18} />
                          </span>
                          <span>{item.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container dark-feature-grid">
            <article className="media-frame media-frame-dark">
              <img src={assets.hipismo} alt="Profissional com cavalo em ambiente equestre premium" />
            </article>
            <div className="content-stack">
              <SectionIntro
                eyebrow="Nichos atendidos"
                title="Feito para quem vive o mundo animal"
                description="Cada segmento tem sua linguagem. Nós falamos todas elas com leitura de mercado, repertório visual e estratégia."
                light
              />
              <div className="niches-grid">
                {niches.map((item) => (
                  <div key={item} className="niche-pill">
                    <PawPrint size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="section section-light">
          <div className="container content-stack-lg">
            <SectionIntro
              eyebrow="Vídeos em destaque"
              title="Conteúdos que geram conexão e resultado"
              description="Veja na prática como transformamos ideias em conteúdo que engaja, comunica com clareza e aproxima a marca do público certo."
            />
            <HorizontalRail>
              {featuredVideos.map((item) => (
                <article key={item.title} className="media-card">
                  <button type="button" className="media-card-button" onClick={() => setSelectedMedia(item)}>
                    <div className="media-thumb media-thumb-dark">
                      <img src={item.cover} alt={item.title} />
                      <div className="media-thumb-overlay" />
                      <div className="media-badge">
                        <Play size={14} />
                        <span>Assistir</span>
                      </div>
                    </div>
                    <div className="media-body">
                      <span className="eyebrow">{item.tag}</span>
                      <h3 className="media-title">{item.title}</h3>
                      <p className="media-description">{item.description}</p>
                      <div className="media-meta media-meta-accent">
                        <span>{item.service}</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </HorizontalRail>
          </div>
        </section>

        <section id="portfolio" className="section section-cream">
          <div className="container content-stack-lg">
            <SectionIntro
              eyebrow="Portfólio"
              title="Resultados que falam por si"
              description="Projetos reais desenvolvidos para o mercado animal, com mistura de fotografia, vídeos, peças para redes e construção de posicionamento visual."
              className="portfolio-intro"
            />
            <HorizontalRail>
              {portfolio.map((item) => (
                <article key={`${item.title}-${item.service}`} className="media-card">
                  <button type="button" className="media-card-button" onClick={() => setSelectedMedia(item)}>
                    <div className="media-thumb media-thumb-dark">
                      {item.kind === 'video' ? (
                        <>
                          <img src={item.cover} alt={item.title} />
                          <div className="media-thumb-overlay" />
                          <div className="media-badge">
                            <Play size={14} />
                            <span>Vídeo</span>
                          </div>
                        </>
                      ) : (
                        <img src={item.src} alt={item.title} />
                      )}
                    </div>
                    <div className="media-body">
                      <span className="eyebrow">{item.tag}</span>
                      <h3 className="media-title">{item.title}</h3>
                      <p className="media-description">{item.description}</p>
                      <div className="media-meta media-meta-olive">
                        <span>{item.service}</span>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </HorizontalRail>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container content-stack-lg">
            <SectionIntro
              eyebrow="Depoimentos"
              title="Quem confia, recomenda"
              description="Experiências reais de quem buscava mais clareza de posicionamento, consistência visual e presença digital com mais autoridade."
              light
            />
            <HorizontalRail>
              {testimonials.map((item, index) => (
                <article key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={item.image} alt="Depoimento cliente" className="testimonial-image" />
                    <span className="testimonial-author">{item.author}</span>
                  </div>
                  <p className="testimonial-quote">“{item.quote}”</p>
                </article>
              ))}
            </HorizontalRail>
          </div>
        </section>

        <section className="section section-light">
          <div className="container process-grid">
            <SectionIntro
              eyebrow="Como funciona"
              title="Simples, rápido e eficiente"
              description="Um processo pensado para facilitar a tomada de decisão, acelerar o início do projeto e manter estratégia com execução alinhada."
              className="process-intro"
            />
            <div className="steps-grid">
              {steps.map((step, index) => (
                <article key={step.title} className="step-card">
                  <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={assets.logo} alt="Nest Studio" className="brand-logo-footer" />
            <p>Marketing digital para o universo animal</p>
          </div>
          <div className="footer-contact-links">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="footer-contact-item">
              <Instagram size={18} />
              <span>@_neststudio</span>
            </a>
            <a href={emailUrl} className="footer-contact-item">
              <Mail size={18} />
              <span>Neststudiopet@gmail.com</span>
            </a>
          </div>
          <div className="footer-copyright">
            <span>© 2026 Nest Studio. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {selectedMedia ? (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-shell">
            <button type="button" className="modal-close" onClick={() => setSelectedMedia(null)} aria-label="Fechar modal">
              <X size={20} />
            </button>
            <div className="modal-grid">
              <div className="modal-media">
                {selectedMedia.kind === 'video' ? (
                  <video src={selectedMedia.src} poster={selectedMedia.cover} controls autoPlay playsInline />
                ) : (
                  <img src={selectedMedia.src} alt={selectedMedia.title} />
                )}
              </div>
              <div className="modal-copy">
                <span className="eyebrow">{selectedMedia.tag}</span>
                <h3>{selectedMedia.title}</h3>
                <p>{selectedMedia.description}</p>
                <div className="modal-service">
                  <span>Serviço realizado</span>
                  <strong>{selectedMedia.service}</strong>
                </div>
                <div className="modal-actions">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary">
                    Solicitar projeto
                    <ArrowRight size={18} />
                  </a>
                  <button type="button" className="button button-secondary" onClick={() => setSelectedMedia(null)}>
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}