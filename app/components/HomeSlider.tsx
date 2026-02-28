'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Swiper CSS'leri
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HomeSlider.css';

// Haber tipi
interface HaberDetay {
  saat?: string;
  yer?: string;
  adres?: string;
}

interface Haber {
  id: number;
  baslik: string;
  aciklama: string;
  gorsel: string;
  tarih: string;
  detay?: HaberDetay;
  link: string;
}

export default function HomeSlider() {
    // Haberler verisi
    const haberlerData: Haber[] = [
        {
            id: 1,
            baslik: "İki Şehir Tek Sofra - Hemşehri İftarı 2026",
            aciklama: "05 Mart 2026, İftar Vakti - Tarihi Hacıbaba Et Lokantası'nda hemşehrilerimizle buluşuyoruz",
            gorsel: "/images/slider.png",
            tarih: "2026-03-05",
            detay: {
                saat: "İftar Vakti",
                yer: "Tarihi Hacıbaba Et Lokantası",
                adres: "Tarihi Kırkayak Gaziantep Evi - Gaziantep Şubesi"
            },
            link: "/haberler"
        }
    ];

    // Son 10 haberi al (en yeniden eskiye)
    const slides = haberlerData
        .sort((a, b) => new Date(b.tarih).getTime() - new Date(a.tarih).getTime())
        .slice(0, 10)
        .map(haber => ({
            image: haber.gorsel,
            title: haber.baslik,
            description: haber.aciklama,
            link: haber.link || '/haberler',
        }));

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
                loop={slides.length > 1}
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
                                    style={{ objectFit: 'contain' }}
                                    priority={index === 0}
                                />
                            </div>
                            {/* Detaylar Butonu */}
                            <div className="slide-button-container">
                                <Link href={slide.link} className="slide-detail-button">
                                    Detaylar İçin Tıklayın
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}