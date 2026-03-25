import Logo from "./Logo";

export default function Promise() {
  return (
    <section className="py-24 sm:py-32 bg-warm-white relative overflow-hidden">
      {/* Background texture — subtle leaf pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-olive/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate text-center">
          {/* Logo as a divider/brand stamp */}
          <Logo className="w-16 h-16 mx-auto mb-8 opacity-20" variant="dark" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}>
            Nuestra promesa
          </h2>
          <p className="mt-6 text-xl sm:text-2xl text-text-mid leading-relaxed max-w-3xl mx-auto italic"
            style={{ fontFamily: "var(--font-serif)" }}>
            &ldquo;Sabemos exactamente de dónde viene cada producto que llega a tu
            mesa, porque nosotros mismos lo criamos con amor y responsabilidad.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-olive/40" />
            <span className="text-sm text-olive font-medium tracking-wider uppercase"
              style={{ fontFamily: "var(--font-display)" }}>
              La Healthy Mit
            </span>
            <div className="w-10 h-[1px] bg-olive/40" />
          </div>
        </div>

        {/* Promise cards */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          <div className="scroll-animate-scale stagger-1 text-center p-8 rounded-3xl bg-beige/40 border border-beige-dark/20">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-dark/8 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-forest"
              style={{ fontFamily: "var(--font-display)" }}>
              Trazabilidad total
            </h3>
            <p className="mt-3 text-text-mid text-sm leading-relaxed">
              Sabemos el origen de cada ave. Desde la granja hasta tu mesa,
              cada paso es transparente.
            </p>
          </div>

          <div className="scroll-animate-scale stagger-2 text-center p-8 rounded-3xl bg-beige/40 border border-beige-dark/20">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-dark/8 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-forest"
              style={{ fontFamily: "var(--font-display)" }}>
              Frescura garantizada
            </h3>
            <p className="mt-3 text-text-mid text-sm leading-relaxed">
              Entrega directa sin intermediarios. Tu pedido se prepara y
              entrega en el menor tiempo posible.
            </p>
          </div>

          <div className="scroll-animate-scale stagger-3 text-center p-8 rounded-3xl bg-beige/40 border border-beige-dark/20">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-dark/8 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-forest"
              style={{ fontFamily: "var(--font-display)" }}>
              Bienestar animal
            </h3>
            <p className="mt-3 text-text-mid text-sm leading-relaxed">
              Cada animal crece con espacio, sol y alimentación natural.
              El bienestar animal es nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
