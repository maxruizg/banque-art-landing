import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content - Takes 8 columns on large screens */}
          <div className="lg:col-span-8">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-6"
            >
              Catering Estratégico para Marcas
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-cream-50 leading-tight mb-8"
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.4)"
              }}
            >
              La experiencia gastronómica
              <br />
              como <span className="text-gold-400 drop-shadow-lg">herramienta</span>
              <br />
              de comunicación
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-cream-100 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)"
              }}
            >
              En BanqueArt no solo damos servicio de catering. Nos involucramos en la
              intención del evento, entendiendo que cada formato gastronómico es una
              oportunidad para comunicar, conectar y reforzar tu identidad.
            </motion.p>

            {/* Dual CTAs - Corporate vs Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#corporativo"
                className="group bg-gold-500 text-charcoal-900 px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-gold-400 transition-all inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Eventos Corporativos
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#social"
                className="group border-2 border-cream-300 text-cream-100 px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-cream-50/10 transition-all inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Eventos Sociales
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Stats Panel - Takes 4 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:flex lg:col-span-4 justify-end"
          >
            <div className="bg-cream-50/10 backdrop-blur-md border border-cream-50/20 rounded-2xl p-6 space-y-6">
              <div className="text-center">
                <p className="font-serif text-3xl font-medium text-gold-400">500+</p>
                <p className="text-cream-200 text-xs uppercase tracking-wider">Eventos</p>
              </div>
              <div className="w-12 h-px bg-cream-50/20 mx-auto" />
              <div className="text-center">
                <p className="font-serif text-3xl font-medium text-gold-400">15+</p>
                <p className="text-cream-200 text-xs uppercase tracking-wider">Años</p>
              </div>
              <div className="w-12 h-px bg-cream-50/20 mx-auto" />
              <div className="text-center">
                <p className="font-serif text-3xl font-medium text-gold-400">98%</p>
                <p className="text-cream-200 text-xs uppercase tracking-wider">Satisfacción</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream-300/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cream-300 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
