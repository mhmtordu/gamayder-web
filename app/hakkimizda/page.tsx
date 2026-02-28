import { Users, Target, Heart, Award, Calendar, MapPin } from 'lucide-react';
import './page.css';

export default function Hakkimizda() {
  const yonetimKurulu = [
    { isim: 'İsmail Akgedik', gorev: 'Dernek Başkanı' },
    { isim: 'Ali Doğan Dinç', gorev: 'Başkan Yardımcısı' },
    { isim: 'Serdar Serçe', gorev: 'Başkan Yardımcısı' },
    { isim: 'Gülay Varlık Şahan', gorev: 'Başkan Yardımcısı' },
    { isim: 'İsmail Canpolat', gorev: 'Sekreter' },
    { isim: 'Bahri Atçeken', gorev: 'Sayman' },
    { isim: 'Mehmet Tabaroğulları', gorev: 'Üye' },
    { isim: 'Özer Kısacık', gorev: 'Üye' },
    { isim: 'Cevdet Arslan', gorev: 'Üye' },
    { isim: 'H. Basri Kaya', gorev: 'Üye' },
    { isim: 'Ahmet Karabay', gorev: 'Üye' },
  ];

  const denetimKurulu = [
    { isim: 'İsmet Hozatlıoğlu', gorev: 'Başkan' },
    { isim: 'Celal Fırat', gorev: 'Üye' },
    { isim: 'Mustafa Demirci', gorev: 'Üye' },
  ];

  const degerler = [
    {
      icon: Users,
      baslik: 'Birlik ve Beraberlik',
      aciklama: 'Hemşehrilerimizi bir araya getirerek güçlü bir topluluk oluşturuyoruz.',
    },
    {
      icon: Heart,
      baslik: 'Dayanışma',
      aciklama: 'Zor günlerde yanında olduğumuz, mutlu günlerde sevinç paylaştığımız bir aile.',
    },
    {
      icon: Target,
      baslik: 'Kültürel Değerler',
      aciklama: 'Malatya\'nın zengin kültürünü ve geleneklerini yaşatıyoruz.',
    },
    {
      icon: Award,
      baslik: 'Sosyal Sorumluluk',
      aciklama: 'Topluma faydalı projeler ve yardımlaşma faaliyetleri yürütüyoruz.',
    },
  ];

  return (
    <div className="hakkimizda-page">
      {/* Hero Section */}
      <section className="hakkimizda-hero">
        <div className="container-custom">
          <h1>Hakkımızda</h1>
          <p className="hero-subtitle">22 Yıldır Birlikte, Güçlüyüz</p>
        </div>
      </section>

      {/* Tarihçe */}
      <section className="section-white">
        <div className="container-custom">
          <div className="content-grid">
            <div className="content-text">
              <div className="section-badge">
                <Calendar className="badge-icon" />
                <span>Tarihçemiz</span>
              </div>
              <h2 className="section-title">Köklü Bir Geçmiş</h2>
              <p className="text-large">
                GAMAYDER (Gaziantep Malatyalılar Yardımlaşma ve Dayanışma Derneği), <strong>2003 yılında</strong> dönemin 
                Gaziantep İl Emniyet Müdürü hemşehrimiz <strong>Ali Kalkan</strong>'ın öncülüğünde ve 
                değerli hemşehrilerimizin girişimleriyle kurulmuştur.
              </p>
              <p>
                22 yıldır kesintisiz hizmet veren derneğimiz, Gaziantep'te yaşayan Malatya 
                kökenli hemşehrilerimizi bir araya getirerek güçlü bir dayanışma ağı oluşturmuştur. 
                Bugün 500'den fazla aktif üyemiz ile bölgenin en köklü hemşehri derneklerinden 
                biri olma gururunu yaşıyoruz.
              </p>
              <p>
                Yıllar içinde düzenlediğimiz yüzlerce etkinlik, sosyal sorumluluk projesi ve 
                kültürel faaliyet ile hem hemşehrilerimize hem de Gaziantep'in sosyal dokusuna 
                katkıda bulunduk.
              </p>
            </div>
            <div className="content-stats">
              <div className="stat-box">
                <div className="stat-number">2003</div>
                <div className="stat-label">Kuruluş Yılı</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">22</div>
                <div className="stat-label">Yıllık Deneyim</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">250+</div>
                <div className="stat-label">Aktif Üye</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">10+</div>
                <div className="stat-label">Yıllık Etkinlik</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="section-gray">
        <div className="container-custom">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-icon primary">
                <Target />
              </div>
              <h3>Misyonumuz</h3>
              <p>
                Gaziantep'te yaşayan Malatya kökenli hemşehrilerimizi bir araya getirerek, 
                dayanışma ve yardımlaşma kültürünü güçlendirmek, kültürel değerlerimizi 
                koruyup gelecek nesillere aktarmak, sosyal ve kültürel etkinliklerle toplumsal 
                bağları pekiştirmektir.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon secondary">
                <Award />
              </div>
              <h3>Vizyonumuz</h3>
              <p>
                Türkiye'nin en etkin ve saygın hemşehri derneklerinden biri olarak, üyelerimize 
                en iyi hizmeti sunmak, genç nesillere örnek olmak ve toplumsal sorumluluk 
                bilinci ile hareket ederek Gaziantep'in sosyal ve kültürel hayatına değer 
                katmaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="section-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Değerlerimiz</h2>
            <p className="section-subtitle">
              Bizi biz yapan temel prensipler
            </p>
          </div>
          <div className="degerler-grid">
            {degerler.map((deger, index) => (
              <div key={index} className="deger-card">
                <div className="deger-icon">
                  <deger.icon />
                </div>
                <h4>{deger.baslik}</h4>
                <p>{deger.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yönetim Kurulu */}
      <section className="section-gray">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Yönetim Kurulu</h2>
            <p className="section-subtitle">Asil Üyeler</p>
          </div>
          <div className="yonetim-grid">
            {yonetimKurulu.map((uye, index) => (
              <div key={index} className="yonetim-card">
                <div className="yonetim-avatar">
                  <Users size={32} />
                </div>
                <h4>{uye.isim}</h4>
                <p className="gorev">{uye.gorev}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 mt-16">
            <h2 className="section-title">Denetim Kurulu</h2>
            <p className="section-subtitle">Asil Üyeler</p>
          </div>
          <div className="yonetim-grid-small">
            {denetimKurulu.map((uye, index) => (
              <div key={index} className="yonetim-card">
                <div className="yonetim-avatar">
                  <Users size={32} />
                </div>
                <h4>{uye.isim}</h4>
                <p className="gorev">{uye.gorev}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container-custom text-center">
          <MapPin size={48} className="cta-icon" />
          <h2>Derneğimize Katılın</h2>
          <p>
            Siz de bu güzel ailenin bir parçası olun, etkinliklerimize katılın, 
            yeni dostluklar edinin!
          </p>
          <a href="/uyelik" className="btn-primary">
            Üye Ol
          </a>
        </div>
      </section>
    </div>
  );
}