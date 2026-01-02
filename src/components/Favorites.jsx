import React, { useEffect, useState } from 'react'
import { loadProducts } from '../lib/products'
import FeaturedCard from './FeaturedSection'

export default function Favorites() {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        loadProducts().then(list => {
            const favorites = list.filter(p => (p.featured || []).includes('favorite')).slice(0,3)
            if (favorites.length >= 3) setFavs(favorites)
            else {
                const extras = list.filter(p => !((p.featured || []).includes('favorite'))).sort((a,b) => (b.rating||0)-(a.rating||0)).slice(0, 3 - favorites.length)
                setFavs([...favorites, ...extras])
            }
        })
    }, [])

    if (!favs.length) return null

    return (
        <section className="py-8 relative">
            <div className="flex flex-col items-center justify-center gap-12 mx-auto px-4">
                <div className="relative w-full text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-display-bold text-brown-dark relative z-10"> سفارشات مورد علاقه </h2>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-2 md:h-2 bg-brown-light/20 rounded-xs"></div>
                </div>

                <div id="favorites-container" className="w-full flex flex-col md:flex-row items-center justify-center gap-4 max-w-[1360px]">
                    {favs.map((p,i) => (
                        <div key={p.id || i} className="w-full max-w-md">
                            <div className={`w-full relative rounded-3xl py-6 px-6 bg-zinc-100`}>
                                <div className="flex items-center gap-4">
                                    <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-lg" />
                                    <div>
                                        <h4 className="font-display-bold text-brown-dark">{p.name}</h4>
                                        <p className="text-sm text-gray-600">{p.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}