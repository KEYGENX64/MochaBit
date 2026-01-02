import React, { useState } from 'react'
import logo from '../assets/Images/svgs/logo.svg'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="py-2 sticky top-0 z-20 bg-white shadow-xs">
            <div className="container mx-auto px-4">
                <nav className="relative flex items-center justify-between md:justify-around">
                    <div className="flex flex-row items-center gap-12">
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center p-2 pt-4 -translate-y-2 bg-brown-light/5 rounded-b-lg">
                                <img src={logo} alt="لوگو کافه قهوه" className="h-10 w-auto" />
                            </div>
                            <h1 className="font-display-bold text-brown-dark text-base">کافه موکابیت</h1>
                        </div>
                        <ul className="hidden md:flex items-center gap-x-12 text-base">
                            <li><a href="#" className="text-brown-light font-display-bold">صفحه اصلی</a></li>
                            <li><a href="menu.html" className="text-neutral-500 hover:text-brown-dark">منو</a></li>
                            <li><a href="#about_cafe" className="text-neutral-500 hover:text-brown-dark">درباره کافه</a></li>
                            <li><a href="#footer-section" className="text-neutral-500 hover:text-brown-dark">تماس با ما</a></li>
                        </ul>
                    </div>

                    <button className="hidden md:inline-block px-4 py-1 bg-brown-light hover:bg-brown-dark transition-colors text-white rounded-full text-base cursor-pointer">
                        رزرو میز
                    </button>

                    {/* mobile menu */}
                    <div className="md:hidden relative z-50">
                        <button aria-label="menu" onClick={() => setOpen(prev => !prev)}>
                            {!open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" className="block transition-all">
                                    <path d="M2.91675 20.4166C2.91675 19.6112 3.56967 18.9583 4.37508 18.9583H30.6251C31.4305 18.9583 32.0834 19.6112 32.0834 20.4166C32.0834 21.2221 31.4305 21.875 30.6251 21.875H4.37508C3.56967 21.875 2.91675 21.2221 2.91675 20.4166Z" fill="#504F4F"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.375 14.5833C4.375 9.75082 8.29251 5.83331 13.125 5.83331H21.875C26.7075 5.83331 30.625 9.75082 30.625 14.5833C30.625 15.3887 29.9721 16.0416 29.1667 16.0416H5.83333C5.02792 16.0416 4.375 15.3887 4.375 14.5833ZM13.125 11.6666C13.125 12.4721 12.4721 13.125 11.6667 13.125C10.8613 13.125 10.2083 12.4721 10.2083 11.6666C10.2083 10.8612 10.8613 10.2083 11.6667 10.2083C12.4721 10.2083 13.125 10.8612 13.125 11.6666ZM17.5 13.125C18.3054 13.125 18.9583 12.4721 18.9583 11.6666C18.9583 10.8612 18.3054 10.2083 17.5 10.2083C16.6946 10.2083 16.0417 10.8612 16.0417 11.6666C16.0417 12.4721 16.6946 13.125 17.5 13.125ZM24.7917 11.6666C24.7917 12.4721 24.1388 13.125 23.3333 13.125C22.5279 13.125 21.875 12.4721 21.875 11.6666C21.875 10.8612 22.5279 10.2083 23.3333 10.2083C24.1388 10.2083 24.7917 10.8612 24.7917 11.6666Z" fill="#504F4F"/>
                                    <path d="M30.625 26.25C30.625 27.8608 29.3192 29.1666 27.7083 29.1666H7.29167C5.68083 29.1666 4.375 27.8608 4.375 26.25C4.375 25.4446 5.02792 24.7916 5.83333 24.7916H29.1667C29.9721 24.7916 30.625 25.4446 30.625 26.25Z" fill="#504F4F"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 14 14" className="transition-all">
                                    <path stroke="#504F4F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            )}
                        </button>

                        {/* slide menu */}
                        <div className={`fixed inset-y-0 right-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 flex flex-col px-8 pt-16 space-y-8 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                            <li className="w-full text-center list-none"><h1 className="font-display-bold text-2xl text-brown-dark">کافه موکابیت</h1></li>
                            <li className="w-full list-none"><a href="#" className="w-full text-brown-dark font-display-bold text-lg">صفحه اصلی</a></li>
                            <li className="w-full list-none"><a href="menu.html" className="w-full text-gray-600 hover:text-brown-dark text-lg">منو</a></li>
                            <li className="w-full list-none"><a href="#" className="w-full text-gray-600 hover:text-brown-dark text-lg">درباره کافه</a></li>
                            <li className="w-full list-none"><a href="#" className="w-full text-gray-600 hover:text-brown-dark text-lg">تماس با ما</a></li>
                            <li className="pt-4 list-none">
                                <button className="w-full px-4 py-2 bg-brown-light hover:bg-brown-dark transition-colors text-white rounded-full text-base cursor-pointer">
                                    رزرو میز
                                </button>
                            </li>
                        </div>

                        {/* backdrop */}
                        {open && <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setOpen(false)} />}
                    </div>
                </nav>
            </div>
        </header>
    )
}