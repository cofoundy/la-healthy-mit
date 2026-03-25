export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Crianza libre",
      description: "Nuestros animales crecen al aire libre, con espacio para moverse, pasto verde y luz solar natural.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Alimentación natural",
      description: "Solo granos naturales, maíz y agua limpia. Sin hormonas de crecimiento ni antibióticos preventivos.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Selección cuidadosa",
      description: "Cada animal es seleccionado en su punto óptimo. Control de calidad riguroso en cada etapa.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Entrega directa",
      description: "Del campo a tu mesa sin intermediarios. Coordina tu pedido por WhatsApp y recibe frescura garantizada.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="proceso" className="py-24 sm:py-32 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <span className="text-sm font-semibold tracking-[0.25em] text-green-light/70 uppercase"
            style={{ fontFamily: "var(--font-display)" }}>
            Nuestro Proceso
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}>
            De la granja a tu mesa
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto">
            Cada paso de nuestro proceso está diseñado para garantizar la
            máxima calidad y frescura de nuestros productos.
          </p>
        </div>

        {/* Steps grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`scroll-animate-scale stagger-${i + 1} relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500`}
            >
              {/* Number */}
              <span className="text-5xl font-bold text-white/10 absolute top-4 right-6"
                style={{ fontFamily: "var(--font-display)" }}>
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-green-dark/30 flex items-center justify-center text-green-light mb-5">
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </h3>
              <p className="mt-3 text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
