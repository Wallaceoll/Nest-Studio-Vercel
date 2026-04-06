import type { LucideIcon } from 'lucide-react'

export type MediaItem = {
  title: string
  description: string
  tag: string
  service: string
  kind: 'image' | 'video'
  src: string
  cover?: string
}

export type ServiceGroup = {
  title: string
  description: string
  items: { icon: LucideIcon; label: string }[]
}

export type Testimonial = {
  image: string
  quote: string
  author: string
}

export type NavigationItem = {
  label: string
  href: string
}

export type ProcessStep = {
  title: string
  description: string
}
