"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/51994885883?text=Hola%2C%20me%20interesa%20hacer%20un%20pedido%20%F0%9F%8C%BF";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-green-dark"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 28s-11-6.5-11-14c0-4 3.2-7 7-7 2 0 4 1 4 1s2-1 4-1c3.8 0 7 3 7 7 0 7.5-11 14-11 14z"
                fill="currentColor"
              />
            </svg>
            <span
              className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-green-dark" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-script)" }}
            >
              La Healthy Mit
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-green-mid ${
                  scrolled ? "text-text" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold btn-primary"
            >
              Pedir ahora
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-beige">
          <div className="px-4 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-text font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-dark text-white text-center px-5 py-3 rounded-full font-semibold"
            >
              Pedir ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
