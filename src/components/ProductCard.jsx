import React from 'react'

export default function ProductCard({ product }) {
    return (
        <div className="product-card w-full flex flex-col rounded-xl transition p-4 border border-neutral-200 gap-2" data-id={product.id}>
            <div className="w-full relative flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-48 object-cover z-10" />
                <div className="absolute bottom-0 left-0 w-full bg-brown-light/5 rounded-lg h-1/2 z-0" />
            </div>

            <div>
                <h3 className="text-xl font-display-bold text-brown-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description || ''}</p>

                <div className="flex items-center gap-2 mb-4">
                    {/* ساده شده: فقط شمارۀ رأی */}
                    <span className="text-sm text-gray-600">({product.ratingCount || 0})</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-display-bold text-brown-dark">{product.price} ت</span>
                    <button className="add-to-cart flex items-center justify-center bg-brown-light text-white px-3 py-2 rounded-lg hover:bg-brown-primary transition">
                        افزودن
                    </button>
                </div>
            </div>
        </div>
    )
}