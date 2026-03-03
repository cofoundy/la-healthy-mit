import { img } from "@/lib/constants";
import Logo from "./Logo";

const WHATSAPP_URL =
  "https://wa.me/51994885883?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20La%20Healthy%20Mit%20%F0%9F%8C%BF";
const INSTAGRAM_URL = "https://instagram.com/lahealthymit";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${img("/images/hero-bg.webp")}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-deep/85 via-green-deep/70 to-green-deep/95" />

      {/* Decorative leaves */}
      <div className="absolute top-16 left-4 sm:left-12 w-24 h-36 sm:w-32 sm:h-48 opacity-15 animate-leaf">
        <svg viewBox="0 0 120 180" fill="none">
          <path d="M60 0C30 30 0 70 10 120c5 25 20 40 35 50 8-20 15-50 15-80 0 30 7 60 15 80 15-10 30-25 35-50C120 70 90 30 60 0z" fill="#B2D78B" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-4 sm:right-12 w-20 h-30 sm:w-28 sm:h-42 opacity-10 animate-leaf" style={{ animationDelay: "2s" }}>
        <svg viewBox="0 0 120 180" fill="none">
          <path d="M60 0C30 30 0 70 10 120c5 25 20 40 35 50 8-20 15-50 15-80 0 30 7 60 15 80 15-10 30-25 35-50C120 70 90 30 60 0z" fill="#B2D78B" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: "1s" }}>
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M32 4L28 20L12 16L24 28L8 36L24 36L20 52L32 40L44 52L40 36L56 36L40 28L52 16L36 20Z" fill="#B2D78B" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo mark */}
        <div className="hero-animate flex justify-center mb-6">
          <Logo className="w-16 h-16 sm:w-20 sm:h-20" color="#B2D78B" />
        </div>

        {/* Brand name */}
        <h1
          className="hero-animate hero-animate-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-light"
          style={{ fontFamily: "var(--font-script)" }}
        >
          La Healthy Mit
        </h1>

        {/* Tagline */}
        <p className="hero-animate hero-animate-delay-2 mt-4 text-lg sm:text-xl text-olive font-medium tracking-widest uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Crianza Libre en Libertad
        </p>

        {/* Description */}
        <p className="hero-animate hero-animate-delay-3 mt-6 text-base sm:text-lg text-beige/70 max-w-2xl mx-auto leading-relaxed">
          Pollos, gallinas, patos y cuyes criados con amor, alimentación 100% natural y sin hormonas. Del campo a tu mesa.
        </p>

        {/* CTAs - WhatsApp + Instagram */}
        <div className="hero-animate hero-animate-delay-4 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-base font-semibold btn-primary shadow-lg shadow-[#25D366]/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-beige/30 text-beige hover:bg-beige/10 px-8 py-4 rounded-full text-base font-semibold transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
        </div>
      </div>

      {/* Bottom gradient fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-deep to-transparent" />
    </section>
  );
}
