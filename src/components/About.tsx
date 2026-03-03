import { img } from "@/lib/constants";

export default function About() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28 bg-green-deep overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B2D78B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center scroll-animate mb-16">
          <span className="text-sm font-semibold tracking-widest text-olive uppercase">
            Nuestra Historia
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-beige leading-tight">
            Crianza libre,{" "}
            <span className="text-gradient">sabor auténtico</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="scroll-animate-left relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={img("/images/farm-aerial.webp")}
                alt="Granja de crianza libre La Healthy Mit"
                className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 to-transparent rounded-2xl" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 right-4 sm:right-8 glass-card rounded-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-light/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-green-light text-lg">100%</p>
                  <p className="text-sm text-beige/60">Crianza libre</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-animate-right">
            <p className="text-beige/70 text-lg leading-relaxed">
              En <strong className="text-green-light">La Healthy Mit</strong>{" "}
              criamos nuestros animales en libertad, con espacio para moverse,
              alimentación 100% natural y mucho cariño. Creemos que la calidad
              de lo que comes empieza en cómo se cría.
            </p>
            <p className="mt-4 text-beige/70 text-lg leading-relaxed">
              Nuestros pollos, gallinas, patos y cuyes crecen al aire libre,
              picoteando en el pasto, bebiendo agua limpia y sin ningún tipo de
              hormona o químico. Así garantizamos un producto fresco, saludable
              y con el sabor de campo que tanto extrañamos.
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center glass-card rounded-xl py-5 px-3">
                <div className="text-2xl sm:text-3xl font-bold text-green-light">0%</div>
                <div className="text-xs sm:text-sm text-beige/50 mt-1">Hormonas</div>
              </div>
              <div className="text-center glass-card rounded-xl py-5 px-3">
                <div className="text-2xl sm:text-3xl font-bold text-green-light">100%</div>
                <div className="text-xs sm:text-sm text-beige/50 mt-1">Natural</div>
              </div>
              <div className="text-center glass-card rounded-xl py-5 px-3">
                <div className="flex justify-center">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm text-beige/50 mt-1">Con amor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
