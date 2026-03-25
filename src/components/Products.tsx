import { img } from "@/lib/constants";

const WHATSAPP_BASE = "https://wa.me/51984300441?text=";

const products = [
  {
    name: "Pollo de Campo",
    tagline: "El favorito de todos",
    description: "Criado al aire libre con alimentación natural. Carne firme, jugosa y con el verdadero sabor del campo que tu familia merece.",
    image: "/images/product-pollo.webp",
    badge: "Más vendido",
    whatsappText: "Hola, me interesa pedir Pollo de Campo 🐔",
  },
  {
    name: "Gallina Criolla",
    tagline: "Para caldos memorables",
    description: "Gallina de campo criada en total libertad. Ideal para caldos reconfortantes, estofados y los platos de la abuela.",
    image: "/images/product-gallina.webp",
    badge: null,
    whatsappText: "Hola, me interesa pedir Gallina Criolla 🐓",
  },
  {
    name: "Pato de Crianza Libre",
    tagline: "Sabor de celebración",
    description: "Pato criado en libertad con carne tierna y sabrosa. Perfecto para celebraciones familiares y ocasiones especiales.",
    image: "/images/product-pato.webp",
    badge: null,
    whatsappText: "Hola, me interesa pedir Pato 🦆",
  },
  {
    name: "Cuy Natural",
    tagline: "Tradición peruana",
    description: "Cuy de crianza natural, el favorito de la gastronomía peruana. Sabor inigualable, criado con los más altos estándares.",
    image: "/images/product-cuy.webp",
    badge: "Especial",
    whatsappText: "Hola, me interesa pedir Cuy 🇵🇪",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-24 sm:py-32 bg-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <span className="text-sm font-semibold tracking-[0.25em] text-olive uppercase"
            style={{ fontFamily: "var(--font-display)" }}>
            Nuestros Productos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-forest"
            style={{ fontFamily: "var(--font-serif)" }}>
            Sabor que se nota{" "}
            <span className="italic text-green-dark">desde el primer bocado</span>
          </h2>
          <p className="mt-5 text-text-mid text-lg max-w-2xl mx-auto">
            Todos nuestros animales son criados en libertad, con alimentación
            natural y sin hormonas. Frescura y calidad que se nota.
          </p>
        </div>

        {/* Product grid — 2x2 on large, stacked on mobile */}
        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`scroll-animate-scale stagger-${i + 1} group bg-white rounded-3xl overflow-hidden shadow-md card-hover border border-beige-dark/30`}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={img(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-green-dark text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
                    {product.badge}
                  </span>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <span className="text-xs text-olive font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {product.tagline}
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-forest"
                  style={{ fontFamily: "var(--font-serif)" }}>
                  {product.name}
                </h3>
                <p className="mt-3 text-text-mid text-sm leading-relaxed">{product.description}</p>

                {/* CTA */}
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(product.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-green-dark font-semibold text-sm hover:text-green-mid transition-colors group/link"
                >
                  Consultar disponibilidad
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
