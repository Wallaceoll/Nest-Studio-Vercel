import {
  BarChart3,
  Camera,
  Clapperboard,
  MapPin,
  MessageCircle,
  PenTool,
  Target,
  Video,
} from 'lucide-react'

import type { MediaItem, NavigationItem, ProcessStep, ServiceGroup, Testimonial } from '../types/content'

const safeUrl = (url: string) => encodeURI(url)

export const contactLinks = {
  whatsapp: 'https://wa.me/5511990061845',
  instagram: 'https://www.instagram.com/_neststudio',
  email: 'mailto:Neststudiopet@gmail.com',
}

export const assets = {
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
} as const

export const navigation: NavigationItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Portfólio', href: '#portfolio' },
]

export const services: ServiceGroup[] = [
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

export const niches = [
  'Clínicas Veterinárias',
  'Banho & Tosa',
  'Pet Shops',
  'Creches e Hotéis',
  'Haras e Centros Equestres',
  'Amazonas e Cavaleiros',
  'Professores e Treinadores',
  'Marcas Pet',
]

export const featuredVideos: MediaItem[] = [
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

export const portfolio: MediaItem[] = [
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

export const testimonials: Testimonial[] = [
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

export const steps: ProcessStep[] = [
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
