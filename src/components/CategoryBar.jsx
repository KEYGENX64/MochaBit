import React from 'react'

const CATEGORIES = [
    { id: 'all', label: 'همه', icon: 'fa-tags' },
    { id: 'popular', label: 'پرفروش‌ترین', icon: 'fa-star' },
    { id: 'cold', label: 'نوشیدنی سرد', icon: 'fa-whiskey-glass' },
    { id: 'hot', label: 'نوشیدنی گرم', icon: 'fa-mug-hot' },
    { id: 'dessert', label: 'دسر', icon: 'fa-ice-cream' },
]

export default function CategoryBar({ value = 'all', onChange = () => {} }) {
    return (
        <div id="category-bar" className="flex gap-4 md:gap-5 overflow-x-auto">
            {CATEGORIES.map(cat => (
                <button
                    key={cat.id}
                    data-cat={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={`category-btn flex items-center gap-2 px-5 py-2 rounded-full text-sm md:text-base text-nowrap cursor-pointer ${value === cat.id ? 'category-active flex items-center text-brown-dark font-display-bold' : 'bg-neutral-100 text-gray-dark border border-neutral-200 hover:bg-neutral-200 hover:text-brown-dark transition'}`}
                >
                    <i className={`fas ${cat.icon}`}></i>
                    <span>{cat.label}</span>
                </button>
            ))}
        </div>
    )
}