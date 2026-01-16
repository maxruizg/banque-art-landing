import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Filosofía", href: "/#filosofia" },
  { name: "Corporativo", href: "/corporativo" },
  { name: "Social", href: "/social" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Galería", href: "/#galeria" },
];

interface NavigationProps {
  variant?: "light" | "dark";
}

export function Navigation({ variant = "light" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = variant === "dark" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-50/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className={`font-serif text-2xl font-semibold tracking-wide transition-colors ${
              isDark ? "text-cream-50" : "text-charcoal-800"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Banque<span className="text-gold-500">-</span>Art
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`hover:text-gold-500 transition-colors text-sm tracking-wide uppercase ${
                  isDark ? "text-cream-200" : "text-charcoal-700"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/#contacto"
              className={`px-6 py-2.5 rounded-full text-sm tracking-wide uppercase transition-colors ${
                isDark
                  ? "bg-gold-500 text-charcoal-900 hover:bg-gold-400"
                  : "bg-tan-600 text-cream-50 hover:bg-tan-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cotizar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                className={`w-full h-0.5 block origin-left ${isDark ? "bg-cream-50" : "bg-charcoal-800"}`}
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className={`w-full h-0.5 block ${isDark ? "bg-cream-50" : "bg-charcoal-800"}`}
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className={`w-full h-0.5 block origin-left ${isDark ? "bg-cream-50" : "bg-charcoal-800"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50/98 backdrop-blur-sm border-t border-cream-200"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-charcoal-700 hover:text-gold-600 transition-colors text-sm tracking-wide uppercase py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                className="block bg-tan-600 text-cream-50 px-6 py-3 rounded-full text-sm tracking-wide uppercase text-center hover:bg-tan-700 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cotizar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
