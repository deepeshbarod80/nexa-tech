import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Industries from './components/Industries'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Industries />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
