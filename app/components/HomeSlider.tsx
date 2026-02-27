'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Swiper CSS'leri
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HomeSlider.css';

export default function HomeSlider() {
    const slides = [
        {
            image: '/slider/iftar.png',
            title: '2025 Hemşehri İftarı',
            description: 'Gaziantep\'te yaşayan hemşehrilerimizle birlik ve beraberlik iftarı',
            link: '/haberler',
        },

    ];

    return (
        <div className="home-slider">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="slider-container"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide">
                            <div className="slide-image">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority={index === 0}
                                />
                                <div className="slide-overlay"></div>
                            </div>
                            <div className="slide-content">
                                <div className="container-custom">
                                    <h2 className="slide-title">{slide.title}</h2>
                                    <p className="slide-description">{slide.description}</p>
                                    <Link href={slide.link} className="slide-button">
                                        Daha Fazla
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
