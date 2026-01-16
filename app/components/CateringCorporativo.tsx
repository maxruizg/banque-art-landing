import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Modal } from "./Modal";

interface Producto {
  title: string;
  description: string;
  copy: string[];
  highlight?: string;
  image: string;
}

const productos: Producto[] = [
  {
    title: "Barra de Mixología",
    description:
      "Cócteles profesionales para networking y eventos empresariales. Opciones premium para impresionar a clientes y socios.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    copy: [
      "En BanqueArt entendemos que una barra no es solo un punto de servicio, sino una herramienta de comunicación.",
      "Por eso diseñamos cada barra de mixología alineada al concepto, tono y objetivos de tu evento.",
      "Trabajamos desde la experiencia de marca, seleccionando cristalería, montaje, ingredientes y narrativa visual que refuercen el mensaje que quieres transmitir, ya sea elegancia, innovación, cercanía o celebración.",
      "Cada barra se adapta al tipo de evento, perfil del público y momento de consumo, cuidando siempre la fluidez del servicio y el impacto visual.",
    ],
    highlight: "No servimos cócteles genéricos. Creamos experiencias líquidas que comunican.",
  },
  {
    title: "Taquizas",
    description:
      "Estaciones de tacos gourmet ideales para eventos casuales de team building y celebraciones corporativas.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    copy: [
      "La taquiza es uno de los formatos más versátiles para eventos corporativos, y en BanqueArt la utilizamos como un recurso estratégico de convivencia.",
      "Diseñamos taquizas pensadas para optimizar tiempos, flujos y servicio, sin perder calidad ni presentación, adaptándolas a eventos de integración, celebraciones internas o activaciones de marca.",
      "Cuidamos desde la selección de guisos hasta la logística y montaje para que el servicio sea ágil, ordenado y alineado a la imagen de tu empresa, incluso en eventos de gran formato.",
    ],
    highlight: "Tradición bien ejecutada, con estándares corporativos.",
  },
  {
    title: "Canapés",
    description:
      "Bocadillos elegantes perfectos para recepciones ejecutivas, inauguraciones y cócteles de negocios.",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=800&auto=format&fit=crop",
    copy: [
      "Los canapés son el primer contacto del invitado con la experiencia gastronómica, y por eso los tratamos como mensajes en pequeño formato.",
      "Diseñamos selecciones de canapés que funcionan para networking, lanzamientos, cocteles ejecutivos y eventos de marca, cuidando sabor, presentación y facilidad de consumo.",
      "Cada pieza está pensada para acompañar la conversación, no interrumpirla, y reforzar la percepción de la marca anfitriona.",
    ],
    highlight: "Pequeños bocados, gran impacto.",
  },
  {
    title: "Buffet",
    description:
      "Servicio completo de buffet para conferencias, capacitaciones y eventos corporativos de gran escala.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    copy: [
      "Nuestros buffets están diseñados para eventos donde la variedad y la eficiencia son clave, sin comprometer imagen ni calidad.",
      "Planeamos cada buffet considerando: tipo de evento, tiempo disponible, perfil del invitado y flujo de servicio.",
      "Esto nos permite crear estaciones ordenadas, visualmente limpias y operativamente eficientes, que se integran de forma natural al evento y no lo interrumpen.",
    ],
    highlight: "Un buffet bien diseñado también comunica profesionalismo.",
  },
  {
    title: "Emplatado",
    description:
      "Servicio de alta cocina con presentación individual para cenas de gala y eventos ejecutivos de prestigio.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    copy: [
      "Cuando el evento requiere estructura, tiempos definidos y una experiencia más formal, el menú emplatado se convierte en un lenguaje de marca.",
      "En BanqueArt desarrollamos menús emplatados pensados para acompañar discursos, premiaciones, cierres de negocio o cenas institucionales, cuidando ritmo, estética y servicio.",
      "Cada plato está diseñado para ser funcional, elegante y coherente con el concepto del evento, garantizando una experiencia fluida tanto para los invitados como para la operación.",
    ],
    highlight: "Alta cocina aplicada al entorno corporativo.",
  },
  {
    title: "Box Lunch",
    description:
      "Solución práctica y elegante para juntas de trabajo, seminarios y eventos corporativos con tiempo limitado.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    copy: [
      "En eventos corporativos, el box lunch debe ser práctico, funcional y bien presentado.",
      "En BanqueArt desarrollamos box lunch pensados para juntas, capacitaciones, activaciones y eventos de larga duración, cuidando tanto el contenido como el empaque.",
      "Diseñamos opciones equilibradas, fáciles de consumir y alineadas a la imagen de tu empresa, con especial atención en logística, tiempos de entrega y presentación individual.",
    ],
    highlight: "Soluciones inteligentes para eventos que no se detienen.",
  },
  {
    title: "Coffee Break",
    description:
      "Pausas gourmet con café premium, té y snacks selectos para mantener la energía en reuniones y conferencias.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    copy: [
      "El coffee break no es una pausa cualquiera, es un momento estratégico de recarga y convivencia.",
      "Diseñamos coffee breaks que se integran al ritmo del evento, optimizando tiempos, flujo de personas y experiencia del usuario, sin generar saturación ni desorden.",
      "Desde reuniones ejecutivas hasta convenciones, cada coffee break está pensado para acompañar el objetivo del evento, no solo para servir café.",
    ],
    highlight: "Pausas bien pensadas también construyen marca.",
  },
  {
    title: "Barra de Dulces",
    description:
      "Mesa de postres sofisticada para celebraciones empresariales, aniversarios de empresa y reconocimientos.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
    copy: [
      "Las barras de dulces en entornos corporativos no son solo un complemento, son un momento de celebración que refuerza la cultura de la empresa.",
      "Diseñamos mesas de postres que equilibran elegancia, variedad y presentación, adaptándolas a aniversarios, reconocimientos, lanzamientos y eventos especiales.",
      "Cada barra se planea considerando el perfil del evento y la identidad visual de tu marca, creando un punto de atracción que invite a la interacción.",
    ],
    highlight: "Dulces momentos que fortalecen la cultura empresarial.",
  },
  {
    title: "Barra de Botanas",
    description:
      "Variedad de aperitivos gourmet para eventos de networking, happy hours corporativos y reuniones informales.",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop",
    copy: [
      "Las barras de botanas son ideales para eventos donde la conversación y el networking son protagonistas.",
      "Creamos estaciones de aperitivos que facilitan la interacción, con presentaciones tipo grazing table que invitan a acercarse y permanecer.",
      "Cuidamos la selección de productos, la disposición visual y el flujo de servicio para que cada barra sea un punto de encuentro natural y elegante.",
    ],
    highlight: "Aperitivos que facilitan conexiones profesionales.",
  },
  {
    title: "Barra de Bunbun Rolls",
    description:
      "Rollos artesanales con rellenos creativos, una opción original y memorable para eventos empresariales únicos.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop",
    copy: [
      "Los Bunbun Rolls son una propuesta diferenciadora que sorprende y genera conversación en cualquier evento corporativo.",
      "Su preparación en vivo añade un elemento de experiencia y espectáculo, mientras que su versatilidad permite adaptarlos a diferentes momentos del evento.",
      "Diseñamos la barra para que sea un punto de interés visual y gastronómico, reforzando el carácter innovador de tu marca.",
    ],
    highlight: "Innovación gastronómica que genera conversación.",
  },
];

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
                href={`#contacto?producto=${encodeURIComponent(selectedProduct.title)}`}
                onClick={() => {
                  setSelectedProduct(null);
                  window.dispatchEvent(
                    new CustomEvent("productoSeleccionado", {
                      detail: { producto: selectedProduct.title },
                    })
                  );
                }}
                className="inline-block w-full text-center bg-tan-600 text-cream-50 px-6 py-3 rounded-full text-sm tracking-wide uppercase hover:bg-tan-700 transition-colors"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
