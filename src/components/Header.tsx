"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Nuestro Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/51984300441?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20La%20Healthy%20Mit%20🌿";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Brand */}
          <a href="#inicio" className="flex items-center gap-3">
            <Logo className="w-9 h-9 sm:w-10 sm:h-10" variant={scrolled ? "dark" : "light"} />
            <div className="flex flex-col leading-none">
              <span
                className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-green-dark" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-script)" }}
              >
                La Healthy Mit
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-olive" : "text-white/60"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                Crianza Libre
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-text-mid hover:text-green-dark" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold btn-primary hover:bg-green-mid"
            >
              Haz tu pedido
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-text" : "text-white"
            }`}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-warm-white/98 backdrop-blur-md border-t border-beige-dark/30">
          <div className="px-4 py-5 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-text font-medium py-3 px-3 rounded-lg hover:bg-beige hover:text-green-dark transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-dark text-white text-center px-5 py-3.5 rounded-full font-semibold mt-3"
            >
              Haz tu pedido
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
