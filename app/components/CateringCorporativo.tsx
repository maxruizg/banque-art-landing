import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Modal } from "./Modal";
import { productosCorporativos as productos } from "../data/productos-corporativos";
import type { ProductoCorporativo as Producto } from "../data/productos-corporativos";

export function CateringCorporativo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-tan-600 uppercase tracking-[0.2em] text-sm mb-4"
          >
            Para Empresas
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-charcoal-800 mb-6"
          >
            Catering <span className="text-gold-500">Corporativo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-600 text-lg"
          >
            Soluciones gastronómicas profesionales para elevar tus eventos
            empresariales. Desde juntas ejecutivas hasta grandes conferencias.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto, index) => (
            <motion.button
              key={producto.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setSelectedProduct(producto)}
              className="bg-cream-100 rounded-2xl group hover:bg-tan-100 transition-colors duration-300 text-left cursor-pointer overflow-hidden"
            >
              {/* Product Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={producto.image}
                  alt={producto.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-lg font-medium text-charcoal-800 mb-2">
                  {producto.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed line-clamp-2">
                  {producto.description}
                </p>
                <span className="inline-block mt-4 text-gold-600 text-sm font-medium group-hover:text-gold-700">
                  Ver detalles →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <Modal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.title || ""}
      >
        {selectedProduct && (
          <div>
            {/* Modal Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-6 -mx-6 -mt-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              {selectedProduct.copy.map((paragraph, index) => (
                <p key={index} className="text-charcoal-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {selectedProduct.highlight && (
              <div className="mt-6 p-4 bg-tan-100 rounded-xl border-l-4 border-gold-500">
                <p className="text-charcoal-800 font-medium italic">
                  {selectedProduct.highlight}
                </p>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-cream-200">
              <a
                href={`https://wa.me/525567070128?text=${encodeURIComponent(`Hola, me interesa cotizar el servicio de ${selectedProduct.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedProduct(null)}
                className="inline-flex items-center justify-center gap-2 w-full text-center bg-green-600 text-cream-50 px-6 py-3 rounded-full text-sm tracking-wide uppercase hover:bg-green-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Cotización
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
