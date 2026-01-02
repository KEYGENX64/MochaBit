import React from 'react'
import headerImg from '../assets/Images/headerBgMobile.webp'
import contactImg from '../assets/Images/contact.png'

export default function About() {
    return (
        <section id="about_cafe" className="max-w-[1660px] mx-auto py-16 md:py-24 bg-white relative overflow-hidden">
            <div>
                <div className="relative w-full flex gap-12 mb-24 items-center">
                    <div className="w-full text-center md:text-right space-y-6 bg-brown-light/10 rounded-3xl md:rounded-l-full 2xl:rounded-full mx-4 md:mx-0 md:ml-12 2xl:mr-12 py-16 pl-12 md:pl-24 pr-12 2xl:pr-24 pb-24 md:pb-16">
                        <h2 className="text-4xl md:text-6xl font-display-bold text-brown-dark relative inline-block"> درباره کافه </h2>
                        <p className="max-w-2xl lg:max-w-lg text-lg font-light text-gray-dark leading-relaxed">
                            موکابیت فقط یک کافه نیست؛<br/>
                            ترکیبی است از طعم محبوب موکا و دنیای هوشمند تکنولوژی.<br/>
                            ما اینجاییم تا تجربه سفارش، پرداخت و حتی رزرو میز را برای شما ساده‌تر، سریع‌تر و لذت‌بخش‌تر کنیم.<br/>
                            در موکابیت، نظم دیجیتال و حال‌وهوای گرم کافه در کنار هم قرار گرفته‌اند.
                        </p>
                    </div>

                    <div className="w-fit h-fit absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 2xl:translate-x-20 -bottom-20 md:-top-10 lg:top-1/2 lg:-translate-y-1/2 rounded-full md:rounded-l-none md:rounded-r-full 2xl:rounded-full overflow-hidden">
                        <img src={headerImg} alt="داخل کافه موکابیت" className="w-4xl md:w-md 2xl:w-xl object-cover h-32 md:h-48 lg:h-72" />
                    </div>
                </div>

                <div className="mt-16 bg-brown-light/10 p-8 md:p-12 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <img src={contactImg} alt="عکس مدیر کافه" className="w-32 h-32 rounded-full border-4 border-yellow shadow-lg" />
                        <div>
                            <p className="text-xl md:text-2xl text-brown-dark italic leading-relaxed"> "در کافه موکابیت، هر فنجان قهوه داستانی از عشق و کیفیت است." </p>
                            <p className="mt-4 text-lg font-bold text-brown-dark">علی رضایی - مدیر کافه</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}