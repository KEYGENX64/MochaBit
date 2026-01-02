import React from 'react'
import logo from '../assets/Images/svgs/logo.svg'

export default function Footer() {
    return (
        <footer id="footer-section" className="py-12 md:py-20 bg-brown-light/5 text-brown-dark">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-32">
                    <div className="space-y-8">
                        <div className="flex items-center justify-center md:justify-end gap-4">
                            <img src={logo} alt="لوگو کافه موکابیت" className="h-12 w-auto" />
                            <h3 className="text-2xl md:text-3xl font-display-bold">کافه موکابیت</h3>
                        </div>

                        <div className="flex justify-center md:justify-end gap-6">
                            <a href="#" className="text-2xl hover:text-yellow transition"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-2xl hover:text-yellow transition"><i className="fab fa-telegram-plane"></i></a>
                            <a href="#" className="text-2xl hover:text-yellow transition"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-2xl hover:text-yellow transition"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 lg:gap-24">
                        <div className="text-right space-y-6">
                            <h4 className="text-xl md:text-2xl font-display-bold">لینک‌های کاربردی</h4>
                            <ul className="space-y-4 text-base md:text-lg">
                                <li><a href="#" className="underline hover:text-yellow transition">صفحه اصلی</a></li>
                                <li><a href="menu.html" className="underline hover:text-yellow transition">منو</a></li>
                                <li><a href="#" className="underline hover:text-yellow transition">درباره کافه</a></li>
                            </ul>
                        </div>

                        <div className="text-right space-y-6">
                            <h4 className="text-xl md:text-2xl font-display-bold">ساعات کاری</h4>
                            <ul className="space-y-4 text-base md:text-lg">
                                <li>شنبه تا چهارشنبه - 9 صبح تا 23 شب</li>
                                <li>پنجشنبه و جمعه - 10 صبح تا 24 شب</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}