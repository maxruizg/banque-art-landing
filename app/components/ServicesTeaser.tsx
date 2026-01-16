import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Catering Corporativo",
    subtitle: "Para Empresas",
    description:
      "Soluciones gastronómicas profesionales para eventos empresariales. Juntas ejecutivas, conferencias, lanzamientos y networking.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    href: "/corporativo",
    features: ["Barra de Mixología", "Coffee Break", "Buffet", "Emplatado", "Box Lunch"],
    accent: "gold",
  },
  {
    title: "Catering Social",
    subtitle: "Para Celebraciones",
    description:
      "Hacemos de tus momentos especiales experiencias inolvidables. Bodas, quinceañeras, cumpleaños y toda celebración.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    href: "/social",
    features: ["Taquizas", "Barra de Dulces", "Canapés", "Buffet", "Emplatado"],
    accent: "tan",
  },
];

export function ServicesTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-tan-600 uppercase tracking-[0.2em] text-sm mb-4"
          >
            Nuestros Servicios
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-medium text-charcoal-800 mb-6"
          >
            Experiencias <span className="text-gold-500">Gastronómicas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-600 text-lg"
          >
            Dos enfoques, un mismo compromiso con la excelencia. Elige el tipo de
            evento y descubre cómo podemos hacer realidad tu visión.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-charcoal-800 cursor-pointer block"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                <p className={`text-${service.accent === 'gold' ? 'gold-400' : 'tan-300'} uppercase tracking-[0.2em] text-xs mb-2`}>
                  {service.subtitle}
                </p>

                <h3 className="font-serif text-3xl md:text-4xl font-medium text-cream-50 mb-4">
                  {service.title}
                </h3>

                <p className="text-cream-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-cream-50/10 text-cream-200 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className={`inline-flex items-center gap-2 text-${service.accent === 'gold' ? 'gold-400' : 'tan-300'} group-hover:gap-4 transition-all`}>
                  <span className="text-sm uppercase tracking-wider font-medium">
                    Ver servicios
                  </span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
