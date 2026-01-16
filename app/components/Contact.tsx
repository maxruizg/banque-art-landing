import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mensaje, setMensaje] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState<string | null>(null);

  useEffect(() => {
    const handleProductoSeleccionado = (event: CustomEvent<{ producto: string }>) => {
      const producto = event.detail.producto;
      setProductoSeleccionado(producto);
      setMensaje(`Hola, me interesa cotizar el servicio de ${producto}. `);
    };

    window.addEventListener(
      "productoSeleccionado",
      handleProductoSeleccionado as EventListener
    );

    return () => {
      window.removeEventListener(
        "productoSeleccionado",
        handleProductoSeleccionado as EventListener
      );
    };
  }, []);

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop"
                alt="Elegante montaje de catering"
                className="w-full h-48 object-cover"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-tan-600 uppercase tracking-[0.2em] text-sm mb-4"
            >
              Contáctanos
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-medium text-charcoal-800 mb-6"
            >
              Creemos Algo
              <br />
              <span className="text-gold-500">Extraordinario Juntos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-charcoal-600 text-lg leading-relaxed mb-10"
            >
              ¿Listo para transformar tu próximo evento? Nos encantaría conocer
              tu visión y discutir cómo podemos hacerla realidad con una cocina
              excepcional y un servicio impecable.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-tan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal-800 mb-1">Visítanos</h4>
                  <p className="text-charcoal-600">
                    Av. Paseo de la Reforma 250
                    <br />
                    Col. Juárez, CDMX 06600
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-tan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal-800 mb-1">Escríbenos</h4>
                  <p className="text-charcoal-600">hola@banque-art.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-tan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal-800 mb-1">Llámanos</h4>
                  <p className="text-charcoal-600">+52 (55) 1234-5678</p>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 flex gap-4"
            >
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-tan-100 rounded-xl flex items-center justify-center text-tan-600 hover:bg-tan-600 hover:text-cream-50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social === "Instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social === "Facebook" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social === "Pinterest" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream-100 rounded-3xl p-8 lg:p-12"
          >
            <h3 className="font-serif text-2xl text-charcoal-800 mb-2">
              Solicita una Consulta
            </h3>

            {productoSeleccionado && (
              <div className="mb-6 flex items-center gap-2">
                <span className="text-sm text-charcoal-600">Servicio seleccionado:</span>
                <span className="bg-gold-500 text-cream-50 text-sm px-3 py-1 rounded-full">
                  {productoSeleccionado}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setProductoSeleccionado(null);
                    setMensaje("");
                  }}
                  className="text-charcoal-400 hover:text-charcoal-600 ml-1"
                  aria-label="Quitar selección"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal-700 text-sm mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-cream-50 border border-tan-200 rounded-xl focus:outline-none focus:border-tan-400 transition-colors"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-charcoal-700 text-sm mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-cream-50 border border-tan-200 rounded-xl focus:outline-none focus:border-tan-400 transition-colors"
                    placeholder="Pérez"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal-700 text-sm mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-cream-50 border border-tan-200 rounded-xl focus:outline-none focus:border-tan-400 transition-colors"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-charcoal-700 text-sm mb-2">
                  Tipo de Evento
                </label>
                <select className="w-full px-4 py-3 bg-cream-50 border border-tan-200 rounded-xl focus:outline-none focus:border-tan-400 transition-colors text-charcoal-600">
                  <option value="">Selecciona el tipo de evento</option>
                  <option value="wedding">Boda</option>
                  <option value="corporate">Evento Corporativo</option>
                  <option value="private">Cena Privada</option>
                  <option value="celebration">Celebración Especial</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal-700 text-sm mb-2">
                    Número de Invitados
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-tan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      min="10"
                      max="2000"
                      step="10"
                      className="w-full pl-12 pr-4 py-3 bg-cream-50 border border-tan-200 rounded-xl focus:outline-none focus:border-tan-400 transition-colors"
                      placeholder="Ej: 100"
                    />
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">Mínimo 50 personas</p>
                </div>

                <div>
                  <label className="block text-charcoal-700 text-sm mb-2">
                    Fecha del Evento
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-tan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-12 pr-4 py-3 bg-cream-50 border border-tan-200 rounded-xl focus:outline-none focus:border-tan-400 transition-colors text-charcoal-600"
                    />
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">Fecha tentativa</p>
                </div>
              </div>

              <div>
                <label className="block text-charcoal-700 text-sm mb-2">
                  Cuéntanos Sobre Tu Evento
                </label>
                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="w-full px-4 py-3 bg-cream-50 border border-tan-200 rounded-xl focus:outline-none focus:border-tan-400 transition-colors resize-none"
                  placeholder="Comparte tu visión, número estimado de invitados, fecha preferida..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-tan-600 text-cream-50 py-4 rounded-xl text-sm tracking-wide uppercase hover:bg-tan-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Solicitud
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
