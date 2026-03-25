import { img } from "@/lib/constants";

export default function Philosophy() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <span className="text-sm font-semibold tracking-[0.25em] text-olive uppercase"
            style={{ fontFamily: "var(--font-display)" }}>
            Nuestra Filosofía
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}>
            Crianza libre,{" "}
            <span className="italic text-green-dark">sabor auténtico</span>
          </h2>
          <p className="mt-5 text-text-mid text-lg leading-relaxed">
            Creemos que la calidad de lo que comes empieza en cómo se cría.
            Nuestros animales crecen al aire libre, con espacio para moverse
            y alimentación 100% natural.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="scroll-animate-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src={img("/images/farm-aerial.webp")}
                alt="Nuestras aves en crianza libre"
                className="w-full h-full object-cover"
              />
              {/* Soft brand overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-sm font-medium"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Nuestros pollos crecen al aire libre, picoteando en el pasto
                </p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="scroll-animate-right space-y-8">
            {/* Value 1 */}
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-green-dark/8 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Crianza al aire libre
                </h3>
                <p className="mt-1 text-text-mid text-sm leading-relaxed">
                  Nuestros animales viven en espacios abiertos, con acceso a pasto
                  verde y luz solar natural. Así como debe ser.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-green-dark/8 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Cero hormonas, cero químicos
                </h3>
                <p className="mt-1 text-text-mid text-sm leading-relaxed">
                  Sin hormonas de crecimiento, sin antibióticos preventivos.
                  Solo alimentación natural y agua limpia.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-green-dark/8 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Criados con amor
                </h3>
                <p className="mt-1 text-text-mid text-sm leading-relaxed">
                  Cada animal recibe atención y cuidado individual. El bienestar
                  animal no es un eslogan — es nuestra forma de trabajar.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-green-dark/8 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest"
                  style={{ fontFamily: "var(--font-display)" }}>
                  Directo del campo
                </h3>
                <p className="mt-1 text-text-mid text-sm leading-relaxed">
                  Sin intermediarios, sin cadenas de frío rotas. Del campo
                  directo a tu mesa para máxima frescura.
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="pt-4 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl bg-beige/60">
                <div className="text-2xl sm:text-3xl font-bold text-green-dark">0%</div>
                <div className="text-xs text-text-light mt-1 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}>Hormonas</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-beige/60">
                <div className="text-2xl sm:text-3xl font-bold text-green-dark">100%</div>
                <div className="text-xs text-text-light mt-1 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}>Natural</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-beige/60">
                <div className="text-2xl sm:text-3xl font-bold text-green-dark">4</div>
                <div className="text-xs text-text-light mt-1 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-display)" }}>Productos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
