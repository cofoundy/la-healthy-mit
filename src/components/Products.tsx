import { img } from "@/lib/constants";

const products = [
  {
    name: "Pollo",
    description: "Pollo de crianza libre, alimentado naturalmente. Carne firme, jugosa y con el verdadero sabor del campo.",
    image: "/images/product-pollo.webp",
    badge: "Popular",
  },
  {
    name: "Gallina",
    description: "Gallina de campo criada en libertad. Ideal para caldos reconfortantes y platos tradicionales.",
    image: "/images/product-gallina.webp",
    badge: null,
  },
  {
    name: "Pato",
    description: "Pato de crianza libre con carne tierna y sabrosa. Perfecto para celebraciones familiares.",
    image: "/images/product-pato.webp",
    badge: null,
  },
  {
    name: "Cuy",
    description: "Cuy de crianza natural, el favorito de la gastronomía peruana. Sabor inigualable.",
    image: "/images/product-cuy.webp",
    badge: "Especial",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 sm:py-28 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center scroll-animate">
          <span className="text-sm font-semibold tracking-widest text-olive uppercase">
            Nuestros Productos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-green-dark">
            Del campo a tu mesa
          </h2>
          <p className="mt-4 text-text-mid text-lg max-w-2xl mx-auto">
            Todos nuestros animales son criados en libertad, con alimentación
            natural y sin hormonas. Frescura y calidad garantizada.
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`scroll-animate-scale stagger-${i + 1} group bg-white rounded-2xl overflow-hidden shadow-md card-hover`}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={img(product.image)}
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
                <h3 className="text-xl font-bold text-green-dark">{product.name}</h3>
                <p className="mt-2 text-text-mid text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
