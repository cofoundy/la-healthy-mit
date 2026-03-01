const WHATSAPP_BASE =
  "https://wa.me/51994885883?text=";

const products = [
  {
    name: "Pollo",
    description:
      "Pollo de crianza libre, alimentado naturalmente. Carne firme, jugosa y con el verdadero sabor del campo.",
    image: "/images/product-pollo.webp",
    badge: "Popular",
    whatsappText: "Hola%2C%20quiero%20pedir%20pollo%20de%20crianza%20libre%20%F0%9F%90%94",
  },
  {
    name: "Gallina",
    description:
      "Gallina de campo criada en libertad. Ideal para caldos reconfortantes y platos tradicionales llenos de sabor.",
    image: "/images/product-gallina.webp",
    badge: null,
    whatsappText: "Hola%2C%20quiero%20pedir%20gallina%20de%20campo%20%F0%9F%90%94",
  },
  {
    name: "Pato",
    description:
      "Pato de crianza libre con carne tierna y sabrosa. Perfecto para platos especiales y celebraciones familiares.",
    image: "/images/product-pato.webp",
    badge: null,
    whatsappText: "Hola%2C%20quiero%20pedir%20pato%20de%20crianza%20libre%20%F0%9F%A6%86",
  },
  {
    name: "Cuy",
    description:
      "Cuy de crianza natural, el favorito de la gastronomía peruana. Sabor inigualable para ocasiones especiales.",
    image: "/images/product-cuy.webp",
    badge: "Especial",
    whatsappText: "Hola%2C%20quiero%20pedir%20cuy%20%F0%9F%87%B5%F0%9F%87%AA",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 sm:py-28 bg-beige-light">
      {/* Wave top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center scroll-animate">
          <span className="text-sm font-semibold tracking-widest text-green-mid uppercase">
            Nuestros Productos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-green-dark">
            Del campo a tu mesa
          </h2>
          <p className="mt-4 text-text-light text-lg max-w-2xl mx-auto">
            Todos nuestros animales son criados en libertad, con alimentación
            natural y sin hormonas. Frescura y calidad garantizada.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`scroll-animate stagger-${i + 1} group bg-white rounded-2xl overflow-hidden shadow-md card-hover`}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} de crianza libre`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-green-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-green-dark">
                  {product.name}
                </h3>
                <p className="mt-2 text-text-light text-sm leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={`${WHATSAPP_BASE}${product.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-green-dark font-semibold text-sm hover:text-green-mid transition-colors"
                >
                  Pedir por WhatsApp
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
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
