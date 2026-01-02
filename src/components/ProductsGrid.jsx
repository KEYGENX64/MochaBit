import React, { useEffect, useState } from 'react'
import { loadProducts } from '../lib/products'
import ProductCard from './ProductCard'

export default function ProductsGrid() {
  const [products, setProducts] = useState([])
  const [cat, setCat] = useState('all')

  useEffect(() => {
    loadProducts().then(setProducts)
  }, [])

  const filtered = cat === 'all' ? products : products.filter(p => (p.categories || []).includes(cat))

  return (
    <section id="product_menu" className="py-10 md:py-16 relative">
      <div className="container mx-auto flex flex-col gap-8 px-4">
        <div className="relative w-fit text-right px-4">
          <h2 className="text-4xl md:text-6xl font-display-bold text-brown-dark">منو</h2>
        </div>

        <div id="category-bar" className="flex gap-4 md:gap-5 overflow-x-auto">
          {['all','popular','cold','hot','dessert'].map(c => (
            <button key={c} onClick={() => setCat(c)} className={`category-btn flex items-center gap-2 px-5 py-2 rounded-full ${cat===c ? 'category-active bg-yellow-custom' : 'bg-neutral-100 text-gray-600'}`}>
              {c === 'all' ? 'همه' : c}
            </button>
          ))}
        </div>

        <div id="products-grid" className="w-full md:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
          {filtered.map(p => <ProductCard key={p.id} product={p} onAdd={(prod)=>alert(`${prod.name} به سبد اضافه شد (نمونه).`)} />)}
        </div>
      </div>
    </section>
  )
}