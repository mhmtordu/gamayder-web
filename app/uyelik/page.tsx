import { Users, Heart, Calendar, Award, Download, FileText } from 'lucide-react';
import './page.css';

export default function Uyelik() {
  const avantajlar = [
    {
      icon: Calendar,
      baslik: 'Etkinliklere Katılım',
      aciklama: 'Düzenlenen tüm sosyal ve kültürel etkinliklere ücretsiz katılım hakkı.',
    },
    {
      icon: Users,
      baslik: 'Hemşehri Ağı',
      aciklama: 'Gaziantep\'te yaşayan hemşehrilerimizle tanışma ve networking fırsatı.',
    },
    {
      icon: Heart,
      baslik: 'Dayanışma',
      aciklama: 'Zor günlerde maddi ve manevi destek alabileceğiniz güçlü bir topluluk.',
    },
    {
      icon: Award,
      baslik: 'Kültürel Değerler',
      aciklama: 'Malatya kültürünü yaşatma ve gelecek nesillere aktarma imkanı.',
    },
  ];

  return (
    <div className="uyelik-page">
      {/* Hero Section */}
      <section className="uyelik-hero">
        <div className="container-custom">
          <h1>Aramıza Katılın!</h1>
          <p className="hero-subtitle">
            Gaziantep'te güçlü bir hemşehri ailesi oluşturuyoruz.
            Siz de bu birlikteliğin bir parçası olun!
          </p>
          <p className="hero-text">
            250'den fazla üyemizle birlikte kültürel etkinlikler düzenliyor,
            dayanışma ruhumuzu güçlendiriyor ve Malatya'nın zengin mirasını
            yaşatıyoruz. Bir telefon kadar yakınınızdayız!
          </p>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="section-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Üyelik Avantajları</h2>
            <p className="section-subtitle">
              Derneğimize üye olarak neler kazanıyorsunuz?
            </p>
          </div>
          <div className="avantajlar-grid">
            {avantajlar.map((avantaj, index) => (
              <div key={index} className="avantaj-card">
                <div className="avantaj-icon">
                  <avantaj.icon />
                </div>
                <h3>{avantaj.baslik}</h3>
                <p>{avantaj.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form İndirme */}
      <section className="section-gray">
        <div className="container-custom">
          <div className="form-container">
            <div className="form-header">
              <Download size={64} className="form-icon" />
              <h2 className="section-title">Üye Olmak İçin Formu Doldurun</h2>
              <p className="form-description">
                Aşağıdaki üyelik formunu indirip doldurduktan sonra dernek merkezimize
                teslim edebilir veya <strong>info@gamayder.org</strong> adresine e-posta ile gönderebilirsiniz.
              </p>
              <p className="form-note">
                Formu doldurmadan önce lütfen dernek tüzüğümüzü okuyunuz.
              </p>
            </div>

            <div className="form-buttons">
              <a
                href="/documents/uyelik-formu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-large"
              >
                <Download size={20} />
                <span>Üyelik Formunu İndir</span>
              </a>
              <a
                href="/documents/tuzuk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-large"
              >
                <FileText size={20} />
                <span>Dernek Tüzüğü</span>
              </a>
            </div>

            <div className="form-info">
              <div className="info-card">
                <h4>📧 E-posta ile Gönderin</h4>
                <p>Doldurulmuş formu <strong>info@gamayder.org</strong> adresine gönderin</p>
              </div>
              <div className="info-card">
                <h4>🏢 Elden Teslim Edin</h4>
                <p>Dernek merkezimize şahsen gelerek teslim edebilirsiniz</p>
              </div>
              <div className="info-card">
                <h4>📞 Bilgi Alın</h4>
                <p><strong>+90 (XXX) XXX XX XX</strong> numaralı telefondan bize ulaşabilirsiniz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container-custom text-center">
          <Users size={48} className="cta-icon" />
          <h2>Sorularınız mı var?</h2>
          <p>
            Üyelik hakkında daha fazla bilgi almak için bizimle iletişime geçin!
          </p>
          <a href="/iletisim" className="btn-primary">
            İletişime Geç
          </a>
        </div>
      </section>
    </div>
  );
}