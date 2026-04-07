import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { categories, showroomItems } from "../data/showroom-items";
import type { Category, ShowroomItem } from "../data/showroom-items";

export function Showroom() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedItem, setSelectedItem] = useState<ShowroomItem | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems =
    activeCategory === "all"
      ? showroomItems
      : showroomItems.filter((item) => item.category === activeCategory);

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      "plates": "platillos",
      "decorations": "decoraciones",
      "table-settings": "montaje de mesas",
    };
    return labels[category] || category;
  };

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-tan-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-tan-600 uppercase tracking-[0.2em] text-sm mb-4"
          >
            Visualiza Tu Evento
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-charcoal-800 mb-6"
          >
            Nuestra <span className="text-gold-500">Galería</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-600 text-lg"
          >
            Explora cómo nuestros platillos, decoraciones y montajes de mesa
            transforman espacios en experiencias gastronómicas extraordinarias.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm tracking-wide uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-tan-600 text-cream-50"
                  : "bg-cream-50 text-charcoal-700 hover:bg-tan-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer text-left"
                aria-label={`Ver detalle de ${item.title}`}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  {/* Gallery Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-charcoal-800/80 via-charcoal-800/20 to-transparent flex items-end p-4"
                  >
                    <div className="text-cream-50">
                      <p className="text-xs uppercase tracking-wider text-gold-400 mb-1">
                        {item.space}
                      </p>
                      <p className="font-serif text-lg">{item.title}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-charcoal-600 mb-4">
            ¿Quieres saber qué banquete es ideal para tu evento?
          </p>
          <motion.a
            href="https://wa.me/525567070128?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20de%20banquete"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-500 text-cream-50 px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-gold-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Escríbenos por WhatsApp
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal for selected item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-charcoal-800/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-50 rounded-3xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2"
            >
              {/* Image side */}
              <div className="aspect-square md:aspect-auto relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gold-500/90 text-cream-50 text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    {getCategoryLabel(selectedItem.category)}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-tan-100 flex items-center justify-center hover:bg-tan-200 transition-colors"
                  aria-label="Cerrar"
                >
                  <svg className="w-5 h-5 text-charcoal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <p className="text-gold-500 uppercase tracking-wider text-sm mb-2">
                  {selectedItem.space}
                </p>
                <h3 className="font-serif text-3xl text-charcoal-800 mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-6">
                  {selectedItem.description}. Esta impresionante presentación está
                  diseñada para complementar tu espacio de evento y crear una
                  atmósfera inolvidable para tus invitados.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-charcoal-600">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Totalmente personalizable según tus preferencias</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-600">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Montaje y estilismo profesional incluido</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-600">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coordinación con los requisitos de tu venue</span>
                  </div>
                </div>

                <motion.a
                  href="#contacto"
                  onClick={() => setSelectedItem(null)}
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-tan-600 text-cream-50 px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-tan-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Consultar Sobre Esto
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
