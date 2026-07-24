import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Section from './components/Section2'
import Portfolio from './components/Portfolio'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Herosection />
    <Section />
    <Portfolio />
    {/* <ContactSection /> */}
    <Footer />
  </StrictMode>,
)
