import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Modal } from "./Modal";
import { productosSociales as productos } from "../data/productos-sociales";
import type { ProductoSocial as Producto, Variante } from "../data/productos-sociales";


function VarianteCard({
  variante,
  isExpanded,
  onToggle,
}: {
  variante: Variante;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-cream-100 rounded-xl border border-cream-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-cream-200/50 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h4 className="font-serif text-lg font-medium text-charcoal-800">
              {variante.nombre}
            </h4>
            <span className="text-xs bg-tan-200 text-tan-700 px-2 py-0.5 rounded-full">
              Mín. {variante.minPax} pax
            </span>
          </div>
          <p className="text-charcoal-500 text-sm line-clamp-2">
            {variante.descripcion}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 bg-tan-200 rounded-full flex items-center justify-center text-tan-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 border-t border-cream-200">
              <div className="grid gap-4">
                {variante.menu.map((menuSection, idx) => (
                  <div key={idx} className="bg-cream-50 rounded-lg p-3">
                    <h5 className="font-medium text-charcoal-800 text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                      {menuSection.nombre}
                    </h5>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {menuSection.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-charcoal-600 text-xs flex items-start gap-1.5"
                        >
                          <span className="text-tan-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Grouped Buffet/Emplatado Component
interface MealGroup {
  nombre: string;
  icon: React.ReactNode;
  variantes: Variante[];
}

function GroupedMealCard({
  groups,
  expandedGroup,
  expandedVariante,
  onToggleGroup,
  onToggleVariante,
}: {
  groups: MealGroup[];
  expandedGroup: string | null;
  expandedVariante: number | null;
  onToggleGroup: (groupName: string) => void;
  onToggleVariante: (index: number) => void;
}) {
  return (
    <div className="space-y-3">
      {groups.map((group) => (
        <div key={group.nombre} className="bg-cream-100 rounded-xl border border-cream-200 overflow-hidden">
          {/* Group Header */}
          <button
            onClick={() => onToggleGroup(group.nombre)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-cream-200/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center text-gold-600">
                {group.icon}
              </div>
              <div>
                <h4 className="font-serif text-lg font-medium text-charcoal-800">
                  {group.nombre}
                </h4>
                <p className="text-charcoal-500 text-sm">
                  {group.variantes.length} opciones disponibles
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedGroup === group.nombre ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 bg-tan-200 rounded-full flex items-center justify-center text-tan-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </button>

          {/* Expanded Group - Show Variants */}
          <AnimatePresence>
            {expandedGroup === group.nombre && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-2 border-t border-cream-200 space-y-2">
                  {group.variantes.map((variante, idx) => {
                    const globalIndex = groups
                      .slice(0, groups.indexOf(group))
                      .reduce((acc, g) => acc + g.variantes.length, 0) + idx;
                    const tierName = variante.nombre.split(" ").pop() || "";

                    return (
                      <div key={idx} className="bg-cream-50 rounded-lg border border-cream-200 overflow-hidden">
                        <button
                          onClick={() => onToggleVariante(globalIndex)}
                          className="w-full p-3 flex items-center justify-between text-left hover:bg-tan-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-bold px-2 py-1 rounded ${
                              tierName === "A" ? "bg-tan-200 text-tan-700" :
                              tierName === "AA" ? "bg-gold-200 text-gold-700" :
                              "bg-gold-500 text-cream-50"
                            }`}>
                              {tierName}
                            </span>
                            <div>
                              <p className="text-charcoal-700 text-sm font-medium">{variante.nombre}</p>
                              <p className="text-charcoal-500 text-xs">Mín. {variante.minPax} pax</p>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedVariante === globalIndex ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-6 h-6 bg-tan-100 rounded-full flex items-center justify-center text-tan-600"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </button>

                        {/* Expanded Variant - Show Menu */}
                        <AnimatePresence>
                          {expandedVariante === globalIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-3 pb-3 pt-2 border-t border-cream-200">
                                <p className="text-charcoal-500 text-xs mb-3">{variante.descripcion}</p>
                                <div className="grid gap-3">
                                  {variante.menu.map((menuSection, menuIdx) => (
                                    <div key={menuIdx} className="bg-cream-100 rounded-lg p-2">
                                      <h5 className="font-medium text-charcoal-800 text-xs mb-1 flex items-center gap-1">
                                        <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                                        {menuSection.nombre}
                                      </h5>
                                      <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                                        {menuSection.items.map((item, itemIdx) => (
                                          <li
                                            key={itemIdx}
                                            className="text-charcoal-600 text-xs flex items-start gap-1"
                                          >
                                            <span className="text-tan-400 mt-0.5">•</span>
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// Helper function to group variants by meal type
function groupVariantsByMealType(variantes: Variante[]): MealGroup[] {
  const desayunoIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
  const comidaIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  const cenaIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );

  const groups: MealGroup[] = [];

  const desayunos = variantes.filter(v => v.nombre.toLowerCase().includes("desayuno"));
  const comidas = variantes.filter(v => v.nombre.toLowerCase().includes("comida"));
  const cenas = variantes.filter(v => v.nombre.toLowerCase().includes("cena"));

  if (desayunos.length > 0) {
    groups.push({ nombre: "Desayuno", icon: desayunoIcon, variantes: desayunos });
  }
  if (comidas.length > 0) {
    groups.push({ nombre: "Comida", icon: comidaIcon, variantes: comidas });
  }
  if (cenas.length > 0) {
    groups.push({ nombre: "Cena", icon: cenaIcon, variantes: cenas });
  }

  return groups;
}

export function CateringSocial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [expandedVariante, setExpandedVariante] = useState<number | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setExpandedVariante(null);
    setExpandedGroup(null);
  };

  const handleToggleVariante = (index: number) => {
    setExpandedVariante(expandedVariante === index ? null : index);
  };

  const handleToggleGroup = (groupName: string) => {
    setExpandedGroup(expandedGroup === groupName ? null : groupName);
    setExpandedVariante(null); // Reset expanded variant when changing groups
  };

  // Check if product should use grouped display
  const isGroupedProduct = (product: Producto) => {
    return product.title === "Buffet" || product.title === "Emplatado";
  };

  return (
    <section className="py-24 lg:py-32 bg-cream-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-tan-600 uppercase tracking-[0.2em] text-sm mb-4"
          >
            Para Celebraciones
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-charcoal-800 mb-6"
          >
            Catering <span className="text-rose-500">Social</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-600 text-lg"
          >
            Hacemos de tus momentos especiales experiencias inolvidables. Bodas,
            quinceañeras, cumpleaños y toda celebración que merezca lo mejor.
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
              className="bg-cream-50 rounded-2xl group hover:bg-tan-100 transition-colors duration-300 text-left cursor-pointer overflow-hidden"
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
                <span className="inline-block mt-4 text-rose-600 text-sm font-medium group-hover:text-rose-500">
                  Ver opciones →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <Modal
        isOpen={selectedProduct !== null}
        onClose={handleCloseModal}
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

            <p className="text-charcoal-600 mb-2">{selectedProduct.description}</p>
            <p className="text-sm text-tan-600 mb-6">
              {isGroupedProduct(selectedProduct)
                ? "Selecciona el tipo de servicio y la opción que mejor se adapte a tu evento"
                : "Haz clic en cada opción para ver el menú completo"
              }
            </p>

            {isGroupedProduct(selectedProduct) ? (
              <GroupedMealCard
                groups={groupVariantsByMealType(selectedProduct.variantes)}
                expandedGroup={expandedGroup}
                expandedVariante={expandedVariante}
                onToggleGroup={handleToggleGroup}
                onToggleVariante={handleToggleVariante}
              />
            ) : (
              <div className="space-y-3">
                {selectedProduct.variantes.map((variante, idx) => (
                  <VarianteCard
                    key={idx}
                    variante={variante}
                    isExpanded={expandedVariante === idx}
                    onToggle={() => handleToggleVariante(idx)}
                  />
                ))}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-cream-200">
              <a
                href={`https://wa.me/525567070128?text=${encodeURIComponent(`Hola, me interesa cotizar el servicio de ${selectedProduct.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCloseModal()}
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
