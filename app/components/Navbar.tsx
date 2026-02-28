"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Info, Newspaper, Mail, Users } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Ana Sayfa", href: "/", icon: Home },
    { name: "Hakkımızda", href: "/hakkimizda", icon: Info },
    { name: "Haberler", href: "/haberler", icon: Newspaper },
    { name: "Üyelik", href: "/uyelik", icon: Users },
    { name: "İletişim", href: "/iletisim", icon: Mail },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Image
            src="/images/logo.png"
            alt="GAMAYDER Logo"
            width={60}
            height={60}
            className="navbar-logo-image"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <div className="navbar-logo-text">
            <h1>GAMAYDER</h1>
            <p>Gaziantep Malatyalılar Yardımlaşma ve Dayanışma Derneği</p>
          </div>
        </Link>

        <div className="navbar-menu">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="navbar-menu-item">
              <item.icon />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-mobile-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="navbar-mobile-menu-item"
            >
              <item.icon />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
