import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "500+", label: "Eventos Realizados" },
  { number: "50+", label: "Miembros del Equipo" },
  { number: "98%", label: "Clientes Satisfechos" },
  { number: "15+", label: "Años de Experiencia" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-cream-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                  alt="Chef preparando platillos"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden mt-12 shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop"
                  alt="Montaje de evento elegante"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 right-8 bg-gold-500 text-cream-50 p-6 rounded-xl shadow-lg"
            >
              <p className="font-serif text-3xl font-medium">Desde</p>
              <p className="text-2xl font-light">2009</p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-tan-600 uppercase tracking-[0.2em] text-sm mb-4"
            >
              Nuestra Historia
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium text-charcoal-800 mb-6"
            >
              Experiencia y Pasión
              <br />
              <span className="text-gold-500">en Cada Evento</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal-600 text-lg leading-relaxed mb-6"
            >
              En BanqueArt, creemos que el catering excepcional es más que solo
              comida—es una forma de comunicación. Nuestro apasionado equipo de
              profesionales culinarios combina técnicas tradicionales con presentaciones
              innovadoras para crear experiencias gastronómicas que cautivan
              todos los sentidos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-charcoal-600 leading-relaxed mb-10"
            >
              Desde eventos corporativos de alto nivel hasta celebraciones
              sociales íntimas, abordamos cada proyecto con meticulosa
              atención al detalle, asegurando que cada platillo cuente
              una historia y cada momento se convierta en un recuerdo preciado.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl font-medium text-gold-500 mb-1">
                    {stat.number}
                  </p>
                  <p className="text-charcoal-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
