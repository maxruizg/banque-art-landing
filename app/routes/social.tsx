import type { Route } from "./+types/social";
import { Navigation, CateringSocial, Contact, Footer } from "../components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Catering Social | BanqueArt" },
    {
      name: "description",
      content:
        "Hacemos de tus momentos especiales experiencias inolvidables. Bodas, quinceañeras, cumpleaños y toda celebración que merezca lo mejor.",
    },
    { property: "og:title", content: "Catering Social | BanqueArt" },
    {
      property: "og:description",
      content:
        "Catering para eventos sociales. Bodas, XV años, cumpleaños y celebraciones especiales con la mejor gastronomía.",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_MX" },
    { name: "theme-color", content: "#1F1D1A" },
  ];
}

export default function Social() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section for Social */}
        <section className="relative pt-32 pb-20 bg-tan-100 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-tan-100/50 to-tan-100" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-tan-600 uppercase tracking-[0.3em] text-sm mb-4">
              Para Celebraciones
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal-800 leading-tight mb-6">
              Catering <span className="text-gold-500">Social</span>
            </h1>
            <p className="text-charcoal-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Hacemos de tus momentos especiales experiencias inolvidables. Bodas,
              quinceañeras, cumpleaños y toda celebración que merezca lo mejor.
            </p>
          </div>
        </section>

        <CateringSocial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
