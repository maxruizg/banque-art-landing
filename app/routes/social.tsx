import type { Route } from "./+types/social";
import { Navigation, CateringSocial, Contact, Footer, PageHero } from "../components";

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
        <PageHero
          eyebrow="Para Celebraciones"
          title="Catering"
          accentText="Social"
          subtitle="Hacemos de tus momentos especiales experiencias inolvidables. Bodas, quinceañeras, cumpleaños y toda celebración que merezca lo mejor."
          backgroundImage="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          variant="light"
        />
        <CateringSocial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
