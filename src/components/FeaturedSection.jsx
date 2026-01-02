import React, { useEffect, useState } from 'react'
import { loadProducts } from '../lib/products'

function FeaturedCard({ product }) {
    return (
        <div className={`w-full max-w-[500px] relative rounded-3xl py-10 pl-3 pr-12 text-zinc-800 flex flex-col items-center gap-2 transition overflow-hidden ${product.featuredBg === 'dark' ? 'bg-brown-dark text-white' : 'bg-zinc-100'}`}>
            <div className="w-full flex items-center gap-2 text-base">
                <span className={`text-nowrap ${product.featuredBg === 'dark' ? 'text-rose-100' : 'text-neutral-600'}`}>{product.categories && product.categories[0] ? (product.categories[0] === 'hot' ? 'قهوه گرم' : product.categories[0]) : ''}</span>
                <div className={`w-full flex-grow border-b ${product.featuredBg === 'dark' ? 'border-zinc-100/20' : 'border-zinc-600/20'}`}></div>
            </div>

            <div className="w-full flex flex-col gap-2">
                <h3 className="text-3xl font-display-bold">{product.name}</h3>
                <p className={`text-base ${product.featuredBg === 'dark' ? 'text-rose-100' : 'text-neutral-600'}`}>{product.description || ''}</p>
                <div className="flex items-center gap-4 mt-2.5 font-display-bold">
                    {product.oldPrice && <del className="text-neutral-500 text-xl">{product.oldPrice}<span className="text-base">ت</span></del>}
                    <span className="text-3xl">{product.price}<span className="text-base">ت</span></span>
                </div>
                <button className="w-fit mt-6 bg-[#FFFDE6] text-brown-dark px-4 py-3 rounded-[20px] text-base font-bold flex items-center gap-2 justify-center hover:bg-gray-200 transition cursor-pointer">
                    سفارش
                </button>
            </div>

            <div className="absolute -left-1/4 translate-x-1/4 top-1/2 -translate-y-1/2 w-60">
                <img src={product.image} alt={product.name} className="w-full rounded-2xl object-cover drop-shadow-xl" />
            </div>
        </div>
    )
}

export default function FeaturedSection() {
    const [bests, setBests] = useState([])

    useEffect(() => {
        loadProducts().then(list => {
            const bestsFromData = list.filter(p => (p.featured || []).includes('bestseller')).slice(0, 3)
            if (bestsFromData.length >= 3) setBests(bestsFromData)
            else {
                const extras = list.filter(p => !((p.featured || []).includes('bestseller'))).sort((a,b) => (b.rating||0)-(a.rating||0)).slice(0, 3 - bestsFromData.length)
                setBests([...bestsFromData, ...extras])
            }
        })
    }, [])

    if (!bests.length) return null

    return (
        <section className="py-8 relative">
            <div className="flex flex-col items-center justify-center gap-12 mx-auto px-4">
                <div className="relative w-full text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-display-bold text-brown-dark relative z-10"> پر فروش ها </h2>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-2 md:h-2 bg-brown-light/20 rounded-xs"></div>
                </div>

                <div id="bestsellers-container" className="w-full flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1360px]">
                    {bests.map((p, i) => <FeaturedCard key={p.id || i} product={{...p, featuredBg: i===1 ? 'dark' : undefined}} />)}
                </div>
            </div>
        </section>
    )
}