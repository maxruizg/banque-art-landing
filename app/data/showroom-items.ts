export type Category = "all" | "plates" | "decorations" | "table-settings";

export interface ShowroomItem {
  id: number;
  category: Exclude<Category, "all">;
  title: string;
  description: string;
  space: string;
  image: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "plates", label: "Platillos Exclusivos" },
  { id: "decorations", label: "Decoraciones" },
  { id: "table-settings", label: "Montaje de Mesas" },
];

export const showroomItems: ShowroomItem[] = [
  {
    id: 1,
    category: "plates",
    title: "Entrada Artesanal",
    description: "Ingredientes de temporada artísticamente presentados",
    space: "Comedor íntimo",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "decorations",
    title: "Centro de Mesa Floral",
    description: "Flores frescas en tonos tierra cálidos",
    space: "Salón de eventos",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "table-settings",
    title: "Elegancia Clásica",
    description: "Porcelana fina con acentos dorados",
    space: "Salón de recepciones",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "plates",
    title: "Plato Principal Gourmet",
    description: "Cortes premium con vegetales del huerto",
    space: "Loft moderno",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "decorations",
    title: "Ambiente con Velas",
    description: "Iluminación cálida con latón vintage",
    space: "Granero rústico",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "table-settings",
    title: "Minimalismo Moderno",
    description: "Líneas limpias con texturas naturales",
    space: "Galería contemporánea",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "plates",
    title: "Obra Maestra de Postre",
    description: "Arte en chocolate con frutos rojos frescos",
    space: "Terraza elegante",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "decorations",
    title: "Cosecha de Temporada",
    description: "Decoración de mesa inspirada en otoño",
    space: "Hacienda campestre",
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800&auto=format&fit=crop",
  },
];
