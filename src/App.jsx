import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import FeaturedSection from './components/FeaturedSection'
import About from './components/About'
import Favorites from './components/Favorites'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-light-bg font-display" dir="rtl" lang="fa">
            <Header />
            <main>
                <Hero />
                <ProductsSection />
                <FeaturedSection />
                <About />
                <Favorites />
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}