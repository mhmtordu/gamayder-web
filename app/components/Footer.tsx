import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Dernek Bilgileri */}
          <div className="footer-section">
            <div className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="GAMAYDER Logo"
                width={60}
                height={60}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </div>
            <h3>GAMAYDER</h3>
            <p className="footer-dernek-adi">
              Gaziantep Malatyalılar Yardımlaşma ve Dayanışma Derneği
            </p>
            <p>
              Hemşehrilerimizi bir araya getirerek kültürel ve sosyal
              faaliyetler düzenliyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/haberler">Haberler</Link>
              </li>
              <li>
                <Link href="/uyelik">Üye Ol</Link>
              </li>
              <li>
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="footer-section">
            <h3>İletişim Bilgileri</h3>
            <ul className="footer-contact">
              <li>
                <MapPin />
                <span>
                  Değirmiçem Mahallesi
                  <br />
                  Hayri Sacır Cad. No: 1/A
                  <br />
                  Şehitkamil/Gaziantep
                </span>
              </li>
              <li>
                <Phone />
                <a href="tel:+905308984427" className="footer-phone-link">
                  0530 898 44 27
                </a>
              </li>
              <li>
                <Mail />
                <a
                  href="mailto:info@gamayder.org"
                  className="footer-email-link"
                >
                  info@gamayder.org
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" title="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" title="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram" title="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Yasal Linkler */}
        <div className="footer-legal">
          <ul className="footer-legal-links">
            <li>
              <a
                href="/documents/tuzuk.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dernek Tüzüğü
              </a>
            </li>
          </ul>
        </div>

        {/* Alt Kısım */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} GAMAYDER - Gaziantep Malatyalılar
            Yardımlaşma ve Dayanışma Derneği
          </p>
          <p className="footer-credit">Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
