import type { Route } from "./+types/corporativo";
import { Navigation, CateringCorporativo, Contact, Footer } from "../components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Catering Corporativo | BanqueArt" },
    {
      name: "description",
      content:
        "Soluciones gastronómicas profesionales para eventos empresariales. Desde juntas ejecutivas hasta grandes conferencias. Catering estratégico para marcas.",
    },
    { property: "og:title", content: "Catering Corporativo | BanqueArt" },
    {
      property: "og:description",
      content:
        "Catering estratégico para eventos corporativos. Comunicamos, conectamos y reforzamos la identidad de tu empresa.",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_MX" },
    { name: "theme-color", content: "#1F1D1A" },
  ];
}

export default function Corporativo() {
  return (
    <>
      <Navigation variant="dark" />
      <main>
        {/* Hero Section for Corporativo */}
        <section className="relative pt-32 pb-20 bg-charcoal-800 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/50 to-charcoal-800" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-4">
              Para Empresas
            </p>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-cream-50 leading-tight mb-6"
              style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.4)"
              }}
            >
              Catering <span className="text-gold-400">Corporativo</span>
            </h1>
            <p
              className="text-cream-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)"
              }}
            >
              Soluciones gastronómicas profesionales para elevar tus eventos
              empresariales. Desde juntas ejecutivas hasta grandes conferencias.
            </p>
          </div>
        </section>

        <CateringCorporativo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
