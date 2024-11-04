import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Section from './components/Section2'
import Portifolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import ContactSection from './components/ContactSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Herosection />
    <Section/>
    <Portifolio/>
    <ContactSection/>
  </StrictMode>,
)
