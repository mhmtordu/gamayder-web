import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Dernek Bilgileri */}
          <div className="footer-section">
            <div className="footer-logo">
              <Image 
                src="/gamayder.jpeg" 
                alt="GAMAYDER Logo" 
                width={80} 
                height={80}
                style={{ borderRadius: '8px' }}
              />
            </div>
            <h3>GAMAYDER</h3>
            <p>
              Gaziantep Malatya Derneği olarak hemşehrilerimizi bir araya getiriyor, 
              kültürel ve sosyal faaliyetler düzenliyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <ul className="footer-links">
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/faaliyetler">Faaliyetler</Link></li>
              <li><Link href="/haberler">Haberler</Link></li>
              <li><Link href="/uyelik">Üye Ol</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="footer-section">
            <h3>İletişim</h3>
            <ul className="footer-contact">
              <li>
                <MapPin />
                <span>Gaziantep, Türkiye</span>
              </li>
              <li>
                <Phone />
                <span>+90 (XXX) XXX XX XX</span>
              </li>
              <li>
                <Mail />
                <span>info@gamayder.org</span>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="footer-section">
            <h3>Bizi Takip Edin</h3>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GAMAYDER - Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}