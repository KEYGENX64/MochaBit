import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import CategoryBar from './CategoryBar'
import { loadProducts } from '../lib/products'

export default function ProductsSection() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('all')

    useEffect(() => {
        loadProducts().then(setProducts)
    }, [])

    const filtered = category === 'all' ? products : products.filter(p => (p.categories || []).includes(category))

    return (
        <section id="product_menu" className="py-10 md:py-16 relative">
            <div className="container mx-auto flex flex-col gap-8 px-4">
                <div className="relative w-fit text-right px-4">
                    <h2 className="text-4xl md:text-6xl font-display-bold text-brown-dark relative z-10"> منو </h2>
                    <div className="absolute bottom-1 right-0 w-32 md:w-48 h-1 md:h-2 bg-brown-light/20 rounded-xs"></div>
                </div>

                <CategoryBar value={category} onChange={setCategory} />

                <div id="products-grid" className="w-full md:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
                    {filtered.map(p => <ProductCard key={p.id} product={p} />)}
                </div>

                <div className="text-center mt-6">
                    <a href="menu.html" className="text-gray-dark text-lg underline hover:text-brown-light transition">مشاهده منو</a>
                </div>
            </div>
        </section>
    )
}