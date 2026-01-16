import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CorporateManifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="filosofia" className="relative py-24 lg:py-32 bg-charcoal-800 overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
          alt="Corporate event"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/50 via-charcoal-800/80 to-charcoal-800" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-4">
            Nuestra Filosofía
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-cream-50 leading-tight">
            BanqueArt
            <span className="block text-gold-400 mt-2">Catering Estratégico para Marcas</span>
          </h2>
        </motion.div>

        {/* Main Manifesto Content */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-200 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto"
          >
            En BanqueArt no solo damos servicio de catering. Nos involucramos en la
            intención del evento, entendiendo que cada formato gastronómico es una
            oportunidad para comunicar, conectar y reforzar la identidad de tu empresa.
          </motion.p>

          {/* Key Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Comunicar",
                description: "Cada platillo y presentación transmite el mensaje de tu marca de forma coherente y memorable.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Conectar",
                description: "Creamos experiencias que facilitan el networking y fortalecen las relaciones profesionales.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Reforzar",
                description: "La experiencia gastronómica suma al mensaje de tu evento, no es un elemento aislado.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/20 rounded-2xl flex items-center justify-center text-gold-400">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-cream-50 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-cream-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-12 border-t border-cream-50/10"
          >
            <blockquote className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-cream-100 leading-relaxed italic max-w-3xl mx-auto">
                "Trabajamos contigo para que la experiencia gastronómica sume al mensaje,
                no sea un elemento aislado."
              </p>
            </blockquote>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-12"
          >
            <a
              href="#corporativo"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm uppercase tracking-wider"
            >
              Descubre nuestros servicios corporativos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
