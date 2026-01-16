import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

type Category = "all" | "plates" | "decorations" | "table-settings";

interface ShowroomItem {
  id: number;
  category: Exclude<Category, "all">;
  title: string;
  description: string;
  space: string;
  image: string;
}

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "plates", label: "Platillos Exclusivos" },
  { id: "decorations", label: "Decoraciones" },
  { id: "table-settings", label: "Montaje de Mesas" },
];

const showroomItems: ShowroomItem[] = [
  {
    id: 1,
    category: "plates",
    title: "Entrada Artesanal",
    description: "Ingredientes de temporada artísticamente presentados",
    space: "Comedor íntimo",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "decorations",
    title: "Centro de Mesa Floral",
    description: "Flores frescas en tonos tierra cálidos",
    space: "Salón de eventos",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "table-settings",
    title: "Elegancia Clásica",
    description: "Porcelana fina con acentos dorados",
    space: "Salón de recepciones",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "plates",
    title: "Plato Principal Gourmet",
    description: "Cortes premium con vegetales del huerto",
    space: "Loft moderno",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "decorations",
    title: "Ambiente con Velas",
    description: "Iluminación cálida con latón vintage",
    space: "Granero rústico",
    image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "table-settings",
    title: "Minimalismo Moderno",
    description: "Líneas limpias con texturas naturales",
    space: "Galería contemporánea",
    image: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "plates",
    title: "Obra Maestra de Postre",
    description: "Arte en chocolate con frutos rojos frescos",
    space: "Terraza elegante",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "decorations",
    title: "Cosecha de Temporada",
    description: "Decoración de mesa inspirada en otoño",
    space: "Hacienda campestre",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
  },
];

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
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                  {/* Gallery Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              </motion.div>
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
            ¿Quieres ver cómo podemos transformar tu espacio?
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gold-500 text-cream-50 px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-gold-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agenda una Consulta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal for selected item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
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
