import Link from 'next/link';
import { Calendar, Users, Heart, Trophy, ArrowRight, Newspaper } from 'lucide-react';
import HomeSlider from './components/HomeSlider';
import './page.css';

// Haber tipi tanımla
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

export default function Home() {
  // GERÇEK HABERLER - HomeSlider ve Haberler sayfası ile aynı veri
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

  // Son 3 haberi al ve formatlayalım
  const news = haberlerData
    .sort((a, b) => new Date(b.tarih).getTime() - new Date(a.tarih).getTime())
    .slice(0, 3)
    .map(haber => ({
      title: haber.baslik,
      date: new Date(haber.tarih).toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      description: haber.aciklama,
    }));

  const activities = [
    {
      icon: Calendar,
      title: 'Etkinlikler',
      description: 'Düzenli olarak düzenlenen sosyal ve kültürel etkinlikler',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Hemşehri Buluşmaları',
      description: 'Malatya kökenli hemşehrilerimizi bir araya getiriyoruz',
      color: 'secondary',
    },
    {
      icon: Heart,
      title: 'Sosyal Sorumluluk',
      description: 'Yardımlaşma ve dayanışma projeleri',
      color: 'accent',
    },
    {
      icon: Trophy,
      title: 'Spor Faaliyetleri',
      description: 'Turnuva ve spor organizasyonları',
      color: 'primary',
    },
  ];

  return (
    <div>
      {/* Slider */}
      <HomeSlider />

      {/* Stats Section */}
      <section className="stats">
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">250+</div>
              <div className="stat-label">Üye</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Etkinlik</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">22</div>
              <div className="stat-label">Yıllık Tecrübe</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Katılımcı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Faaliyetlerimiz</h2>
            <p className="section-subtitle">
              Hemşehrilerimiz için düzenlediğimiz çeşitli etkinlikler
            </p>
          </div>

          <div className="activities-grid">
            {activities.map((activity) => (
              <div key={activity.title} className="card activity-card">
                <div className={`activity-icon ${activity.color}`}>
                  <activity.icon />
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <div className="container-custom">
          <div className="news-header">
            <div>
              <h2 className="section-title">Son Haberler</h2>
              <p className="section-subtitle">Derneğimizden güncel haberler</p>
            </div>
            <Link href="/haberler" className="news-link">
              <span>Tüm Haberler</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="news-grid">
            {news.map((item) => (
              <div key={item.title} className="card news-card">
                <div className="news-card-header">
                  <div className="news-icon">
                    <Newspaper />
                  </div>
                  <div className="news-card-content">
                    <div className="news-date">{item.date}</div>
                    <h3 className="news-title">{item.title}</h3>
                  </div>
                </div>
                <p className="news-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="news-link-mobile">
            <Link href="/haberler">
              <span>Tüm Haberler</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container-custom">
          <h2>Derneğimize Katılmak İster Misiniz?</h2>
          <p>
            Hemşehrilerimiz ile birlikte güzel etkinliklerde yer almak için hemen üye olun!
          </p>
          <Link href="/uyelik" className="btn-primary">
            Hemen Üye Ol
          </Link>
        </div>
      </section>
    </div>
  );
}