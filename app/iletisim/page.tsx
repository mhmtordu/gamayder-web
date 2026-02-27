import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import './iletisim.css';

export default function Iletisim() {
    return (
        <div className="iletisim-page">
            {/* Hero Section */}
            <section className="iletisim-hero">
                <div className="container-custom">
                    <h1>İletişim</h1>
                    <p>Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz</p>
                </div>
            </section>

            {/* İletişim Bilgileri */}
            <section className="iletisim-content">
                <div className="container-custom">
                    <div className="iletisim-grid">
                        {/* İletişim Kartları */}
                        <div className="info-cards">
                            <div className="info-card">
                                <div className="info-icon">
                                    <MapPin size={28} />
                                </div>
                                <div className="info-content">
                                    <h3>Adres</h3>
                                    <p>Gazimuhtar Paşa Bulvarı<br />Şahinbey/Gaziantep</p>
                                    <p className="info-note">(Detaylı adres yakında eklenecek)</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Phone size={28} />
                                </div>
                                <div className="info-content">
                                    <h3>Telefon</h3>
                                    <a href="tel:+905308984427" className="info-link">
                                        0530 898 44 27
                                    </a>
                                    <p className="info-note">Hafta içi 09:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Mail size={28} />
                                </div>
                                <div className="info-content">
                                    <h3>E-posta</h3>
                                    <a href="mailto:info@gamayder.org" className="info-link">
                                        info@gamayder.org
                                    </a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <Clock size={28} />
                                </div>
                                <div className="info-content">
                                    <h3>Çalışma Saatleri</h3>
                                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                                    <p>Cumartesi: 10:00 - 14:00</p>
                                    <p>Pazar: Kapalı</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp ve Sosyal Medya */}
                        <div className="contact-actions">
                            {/* WhatsApp Butonu */}
                            <div className="whatsapp-section">
                                <h2>Hızlı İletişim</h2>
                                <p className="whatsapp-description">
                                    WhatsApp üzerinden bize ulaşın, sorularınızı yanıtlayalım!
                                </p>
                                <a
                                    href="https://wa.me/00905308984427"
                                    className="whatsapp-btn"
                                >
                                    <MessageCircle size={24} />
                                    <span>WhatsApp ile Mesaj Gönder</span>
                                </a>
                            </div>

                            {/* Sosyal Medya */}
                            <div className="social-section">
                                <h3>Bizi Takip Edin</h3>
                                <div className="social-links">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link instagram"
                                        aria-label="Instagram"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link facebook"
                                        aria-label="Facebook"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://x.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link twitter"
                                        aria-label="X (Twitter)"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Harita */}
            <section className="map-section">
                <div className="container-custom">
                    <h2>Bizi Ziyaret Edin</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25378.38477682!2d37.3615!3d37.0662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0e0e0e0e0e0%3A0x0!2sGaziantep!5e0!3m2!1str!2str!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}