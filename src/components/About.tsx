export default function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="scroll-animate-left relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/farm-aerial.webp"
                alt="Granja de crianza libre La Healthy Mit"
                className="w-full h-[350px] sm:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-dark/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-green-dark text-lg">100%</p>
                  <p className="text-sm text-text-light">Crianza libre</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-animate-right">
            <span className="text-sm font-semibold tracking-widest text-green-mid uppercase">
              Nuestra Historia
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-green-dark leading-tight">
              Crianza libre,{" "}
              <span className="text-olive">sabor auténtico</span>
            </h2>
            <p className="mt-6 text-text-light text-lg leading-relaxed">
              En <strong className="text-green-dark">La Healthy Mit</strong>{" "}
              criamos nuestros animales en libertad, con espacio para moverse,
              alimentación 100% natural y mucho cariño. Creemos que la calidad
              de lo que comes empieza en cómo se cría.
            </p>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              Nuestros pollos, gallinas, patos y cuyes crecen al aire libre,
              picoteando en el pasto, bebiendo agua limpia y sin ningún tipo de
              hormona o químico. Así garantizamos un producto fresco, saludable
              y con el sabor de campo que tanto extrañamos.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-dark">0%</div>
                <div className="text-sm text-text-light mt-1">Hormonas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-dark">100%</div>
                <div className="text-sm text-text-light mt-1">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-dark">
                  <svg
                    className="w-8 h-8 mx-auto text-green-dark"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="text-sm text-text-light mt-1">Con amor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
