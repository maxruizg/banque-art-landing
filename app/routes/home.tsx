import type { Route } from "./+types/home";
import {
  Navigation,
  Hero,
  About,
  CorporateManifesto,
  ServicesTeaser,
  Showroom,
  Contact,
  Footer,
} from "../components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BanqueArt | Catering Estratégico para Empresas y Eventos" },
    {
      name: "description",
      content:
        "BanqueArt: Catering estratégico para marcas. Creamos experiencias gastronómicas que comunican, conectan y refuerzan la identidad de tu empresa. Eventos corporativos y sociales.",
    },
    { property: "og:title", content: "BanqueArt | Catering Estratégico para Marcas" },
    {
      property: "og:description",
      content:
        "No solo damos servicio de catering. Nos involucramos en la intención del evento para que la experiencia gastronómica sume al mensaje.",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_MX" },
    { name: "theme-color", content: "#1F1D1A" },
  ];
}

export default function Home() {
  return (
    <>
      <Navigation variant="dark" />
      <main>
        <Hero />
        <CorporateManifesto />
        <ServicesTeaser />
        <About />
        <Showroom />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
