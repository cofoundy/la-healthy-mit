import { img } from "@/lib/constants";

const products = [
  {
    name: "Pollo",
    description:
      "Pollo de crianza libre, alimentado naturalmente. Carne firme, jugosa y con el verdadero sabor del campo.",
    image: "/images/product-pollo.webp",
    badge: "Popular",
  },
  {
    name: "Gallina",
    description:
      "Gallina de campo criada en libertad. Ideal para caldos reconfortantes y platos tradicionales llenos de sabor.",
    image: "/images/product-gallina.webp",
    badge: null,
  },
  {
    name: "Pato",
    description:
      "Pato de crianza libre con carne tierna y sabrosa. Perfecto para platos especiales y celebraciones familiares.",
    image: "/images/product-pato.webp",
    badge: null,
  },
  {
    name: "Cuy",
    description:
      "Cuy de crianza natural, el favorito de la gastronomía peruana. Sabor inigualable para ocasiones especiales.",
    image: "/images/product-cuy.webp",
    badge: "Especial",
  },
];

export default function Products() {
  return (
    <section id="productos" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-deep via-[#1e4420] to-green-deep" />

      {/* Decorative elements */}
      <div className="absolute top-10 right-8 w-20 h-20 opacity-10 animate-float">
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M32 4L28 20L12 16L24 28L8 36L24 36L20 52L32 40L44 52L40 36L56 36L40 28L52 16L36 20Z" fill="#B2D78B" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center scroll-animate">
          <span className="text-sm font-semibold tracking-widest text-olive uppercase">
            Nuestros Productos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-beige">
            Del campo a tu mesa
          </h2>
          <p className="mt-4 text-beige/60 text-lg max-w-2xl mx-auto">
            Todos nuestros animales son criados en libertad, con alimentación
            natural y sin hormonas.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`scroll-animate stagger-${i + 1} group glass-card rounded-2xl overflow-hidden`}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={img(product.image)}
                  alt={`${product.name} de crianza libre`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 to-transparent" />
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-olive/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-green-light">
                  {product.name}
                </h3>
                <p className="mt-2 text-beige/50 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
