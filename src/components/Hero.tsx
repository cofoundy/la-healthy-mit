import { img } from "@/lib/constants";
import Logo from "./Logo";

const WHATSAPP_URL =
  "https://wa.me/51994885883?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20La%20Healthy%20Mit%20%F0%9F%8C%BF";

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

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-green-dark/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo mark */}
        <div className="hero-animate flex justify-center mb-4">
          <Logo className="w-14 h-14 sm:w-16 sm:h-16" variant="light" />
        </div>

        {/* Brand name */}
        <h1
          className="hero-animate hero-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white"
          style={{ fontFamily: "var(--font-script)" }}
        >
          La Healthy Mit
        </h1>

        {/* Tagline */}
        <p
          className="hero-animate hero-delay-2 mt-3 text-base sm:text-lg tracking-[0.25em] uppercase text-green-light/90 font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Crianza Libre en Libertad
        </p>

        {/* Description */}
        <p className="hero-animate hero-delay-3 mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          Pollos, gallinas, patos y cuyes criados con amor, alimentación 100% natural y sin hormonas. Del campo a tu mesa.
        </p>

        {/* CTAs */}
        <div className="hero-animate hero-delay-4 mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-dark hover:bg-green-mid text-white px-8 py-4 rounded-full text-base font-semibold btn-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="#productos"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all"
          >
            Conoce nuestros productos
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-animate hero-delay-4 mt-10 flex flex-wrap justify-center gap-6 sm:gap-10 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Crianza libre
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Sin hormonas
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            100% natural
          </div>
        </div>
      </div>

      {/* Wave divider to cream section */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="var(--color-cream)"
      >
        <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z" />
      </svg>
    </section>
  );
}
