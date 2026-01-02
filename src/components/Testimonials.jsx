import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import tagDark from '../assets/Images/comments/tagDark.svg'
import tagLight from '../assets/Images/comments/tagLight.svg'
import c3 from '../assets/Images/comments/3.png'
import c5 from '../assets/Images/comments/5.png'
import c6 from '../assets/Images/comments/6.png'


export default function Testimonials() {
    const slides = [
        { img: c3, name: 'رضا محمدی', text: 'بهترین موکا عمرم رو اینجا خوردم! محیط خیلی دنج و پرسنل فوق‌العاده مهربون هستن.', tag: tagDark, dark: false },
        { img: c5, name: 'امیر حسینی', text: 'کیفیت قهوه‌ها عالیه و قیمت‌ها منصفانه. حتماً دوباره میام!', tag: tagLight, dark: true },
        { img: c6, name: 'نازنین رضایی', text: 'محیط آرام و موسیقی ملایم، جای عالی برای کار و مطالعه.', tag: tagDark, dark: false },
        { img: c3, name: 'محمد علیپور', text: 'دسرها فوق‌العاده هستن، مخصوصاً کیک شکلاتی!', tag: tagLight, dark: true },
    ]

    return (
        <section className="w-full py-16 md:py-24 bg-white relative">
            <div className="container h-96 mx-auto px-8 py-10 bg-brown-light/10 w-3/4 md:w-2/3 rounded-2xl overflow-visible">
                <div className="relative w-full text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-display-bold text-brown-dark relative z-10"> نظرات شما </h2>
                </div>
            </div>

            <div className="w-full absolute bottom-30 md:bottom-40 left-1/2 -translate-x-1/2">
                <Swiper
                    loop
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={1.1}
                    spaceBetween={30}
                    centeredSlides
                    pagination={{ clickable: true }}
                    breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2.5 } }}
                    modules={[Autoplay, Pagination]}
                >
                    {slides.map((s, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={`rounded-[48px] rounded-br-none px-8 py-6 text-center max-w-2xl mx-auto ${s.dark ? 'bg-brown-dark text-white' : 'bg-brown-light text-white'}`}>
                                <div className="w-full flex items-center justify-center gap-4 mb-4">
                                    <img src={s.img} alt={s.name} className="size-20 rounded-full shadow-lg" />
                                    <p className="text-white text-2xl font-display-bold">{s.name}</p>
                                </div>
                                <p className="text-sm md:text-base text-white leading-relaxed">{s.text}</p>
                                <img src={s.tag} className="size-10 absolute top-10 right-12" alt="tag" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}