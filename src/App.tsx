import { useEffect, useState } from 'react'

import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MobileMenu } from './components/Header/MobileMenu'
import { Hero } from './components/Hero/Hero'
import { MediaModal } from './components/Media/MediaModal'
import { Niches } from './components/Niches/Niches'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Process } from './components/Process/Process'
import { Services } from './components/Services/Services'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Videos } from './components/Videos/Videos'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'
import { assets, contactLinks, navigation } from './data/siteContent'
import type { MediaItem } from './types/content'

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
      <WhatsAppFloat whatsappUrl={contactLinks.whatsapp} />

      <Header
        logoSrc={assets.logo}
        navigation={navigation}
        whatsappUrl={contactLinks.whatsapp}
        onOpenMenu={() => setMenuOpen(true)}
      />

      <MobileMenu
        logoSrc={assets.logo}
        navigation={navigation}
        whatsappUrl={contactLinks.whatsapp}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <main>
        <Hero
          heroImage={assets.hero}
          heroMobileImage={assets.heroMobile}
          whatsappUrl={contactLinks.whatsapp}
        />
        <About />
        <Services />
        <Niches />
        <Videos onSelectMedia={setSelectedMedia} />
        <Portfolio onSelectMedia={setSelectedMedia} />
        <Testimonials />
        <Process />
      </main>

      <Footer
        logoSrc={assets.logo}
        instagramUrl={contactLinks.instagram}
        emailUrl={contactLinks.email}
      />

      <MediaModal
        media={selectedMedia}
        whatsappUrl={contactLinks.whatsapp}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  )
}
