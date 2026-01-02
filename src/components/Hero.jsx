import React from 'react'
import bg from '../assets/Images/body-bg.png'
import heartDesktop from '../assets/Images/HeartCoffeDesktop.png'
import heartMobile from '../assets/Images/HeartCoffeMobile.png'

export default function Hero() {
    return (
        <section className="relative">
            <div className="absolute inset-0 opacity-10">
                <img src={bg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between md:justify-around">
                    <div className="text-center md:-translate-y-10 md:text-right">
                        <h2 className="flex md:flex-col justify-center md:justify-end gap-2 md:gap-4 text-4xl sm:text-5xl lg:text-7xl font-display-bold text-brown-dark leading-tight truncate">
                            <span>هر مدل قهوه‌ای </span><span>که بخوای</span>
                        </h2>
                        <p className="flex md:flex-col justify-center md:justify-end gap-1 md:gap-2 mt-6 text-gray-dark text-lg md:text-xl max-w-lg mx-auto md:mx-0">
                            <span>سفارش، پرداخت و رزرو میز با تجربه‌ای</span><span>مدرن و دلنشین</span>
                        </p>
                    </div>

                    <div className="relative flex justify-center md:justify-end">
                        <img src={heartDesktop} alt="فنجان قهوه لاته" className="relative z-20 hidden md:inline-block w-[450px] lg:w-[650px] drop-shadow-2xl" />
                        <img src={heartMobile} alt="فنجان قهوه لاته" className="relative z-20 md:hidden w-96 drop-shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}