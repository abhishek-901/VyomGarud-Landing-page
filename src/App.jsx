import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="bg-brand py-16">
        <div className="container-max">
          <About />
          <Products />
          <Highlights />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
