import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './haberler.css';

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

export default function Haberler() {
  // Haberleri direkt olarak tanımla
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

  // Haberleri tarihe göre sırala (en yeni önce)
  const haberler = [...haberlerData].sort(
    (a, b) => new Date(b.tarih).getTime() - new Date(a.tarih).getTime()
  );

  // Tarih formatlama
  const formatTarih = (tarih: string) => {
    return new Date(tarih).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="haberler-page">
      {/* Hero Section */}
      <section className="haberler-hero">
        <div className="container-custom">
          <h1>Haberler ve Duyurular</h1>
          <p>Derneğimizden son haberler, etkinlikler ve duyurular</p>
        </div>
      </section>

      {/* Haberler Grid */}
      <section className="haberler-content">
        <div className="container-custom">
          {haberler.length === 0 ? (
            <div className="haberler-bos">
              <p>Henüz haber bulunmamaktadır.</p>
            </div>
          ) : (
            <div className="haberler-grid">
              {haberler.map((haber) => (
                <article key={haber.id} className="haber-card">
                  <div className="haber-gorsel">
                    <Image
                      src={haber.gorsel}
                      alt={haber.baslik}
                      width={600}
                      height={400}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="haber-icerik">
                    <div className="haber-tarih">
                      <Calendar size={16} />
                      <span>{formatTarih(haber.tarih)}</span>
                    </div>
                    <h2 className="haber-baslik">{haber.baslik}</h2>
                    <p className="haber-aciklama">{haber.aciklama}</p>
                    
                    {haber.detay && (
                      <div className="haber-detaylar">
                        {haber.detay.saat && (
                          <div className="haber-detay-item">
                            <Clock size={16} />
                            <span>{haber.detay.saat}</span>
                          </div>
                        )}
                        {haber.detay.yer && (
                          <div className="haber-detay-item">
                            <MapPin size={16} />
                            <span>{haber.detay.yer}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <Link href={haber.link} className="haber-btn">
                      Detaylı Bilgi
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}