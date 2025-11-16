import Link from 'next/link';
import { Calendar, Users, Heart, Trophy, ArrowRight, Newspaper } from 'lucide-react';
import './page.css';

export default function Home() {
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

  const news = [
    {
      title: 'Hemşehri İftarı Düzenlendi',
      date: '15 Kasım 2025',
      description: 'Derneğimiz geleneksel hemşehri iftarını bu yıl da gerçekleştirdi.',
    },
    {
      title: 'Kapadokya Gezisi',
      date: '10 Kasım 2025',
      description: 'Üyelerimiz ile birlikte muhteşem bir Kapadokya gezisi düzenledik.',
    },
    {
      title: 'Yeni Üyelerimiz',
      date: '5 Kasım 2025',
      description: 'Derneğimize katılan yeni üyelerimizi sevgiyle karşılıyoruz.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container-custom">
          <div className="hero-content">
            <h1>
              Hoş Geldiniz!
              <br />
              <span className="hero-subtitle">Gaziantep Malatya Derneği</span>
            </h1>
            <p>
              Malatya kökenli hemşehrilerimizi Gaziantep'te bir araya getiriyoruz.
              Kültürümüzü yaşatıyor, dayanışmamızı güçlendiriyoruz.
            </p>
            <div className="hero-buttons">
              <Link href="/uyelik" className="btn-primary">
                Üye Ol
              </Link>
              <Link href="/hakkimizda" className="btn-outline">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(249 250 251)"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Üye</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Etkinlik</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10</div>
              <div className="stat-label">Yıllık Tecrübe</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
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