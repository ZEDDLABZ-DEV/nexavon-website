import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import GlobalPresence from './components/GlobalPresence.jsx'
import Trust from './components/Trust.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <GlobalPresence />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
