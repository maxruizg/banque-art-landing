import type { Route } from "./+types/corporativo";
import { Navigation, CateringCorporativo, Contact, Footer, PageHero } from "../components";

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
        <PageHero
          eyebrow="Para Empresas"
          title="Catering"
          accentText="Corporativo"
          subtitle="Soluciones gastronómicas profesionales para elevar tus eventos empresariales. Desde juntas ejecutivas hasta grandes conferencias."
          backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
          variant="dark"
        />
        <CateringCorporativo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
