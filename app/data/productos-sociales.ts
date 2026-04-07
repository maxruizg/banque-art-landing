export interface MenuItem {
  nombre: string;
  items: string[];
}

export interface Variante {
  nombre: string;
  descripcion: string;
  minPax: number;
  menu: MenuItem[];
}

export interface ProductoSocial {
  title: string;
  description: string;
  variantes: Variante[];
  image: string;
}

export const productosSociales: ProductoSocial[] = [
  {
    title: "Barra de Mixología",
    description:
      "Cócteles artesanales y bebidas creativas para animar tu celebración. Bartenders profesionales que crean experiencias únicas.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Barra A",
        descripcion:
          "Incluye barra básica con cócteles clásicos, destilados seleccionados, bartender profesional, cristalería estándar, hielo y servicio completo.",
        minPax: 50,
        menu: [
          {
            nombre: "Cócteles Clásicos",
            items: ["Margarita", "Mojito", "Paloma", "Cuba Libre", "Piña Colada"],
          },
          {
            nombre: "Destilados",
            items: ["Tequila Blanco", "Ron Blanco", "Vodka", "Whisky Standard"],
          },
          {
            nombre: "Incluye",
            items: ["Bartender profesional", "Cristalería estándar", "Hielo", "Refrescos y jugos", "Montaje básico"],
          },
        ],
      },
      {
        nombre: "Barra AA",
        descripcion:
          "Incluye barra AA con destilados seleccionados, coctelería clásica y de autor, bartenders uniformados, montaje decorativo, cristalería premium y servicio completo.",
        minPax: 50,
        menu: [
          {
            nombre: "Cócteles Clásicos y de Autor",
            items: ["Margarita", "Mojito", "Paloma", "Old Fashioned", "Negroni", "Aperol Spritz", "2 cócteles de autor"],
          },
          {
            nombre: "Destilados Premium",
            items: ["Tequila Reposado", "Ron Añejo", "Vodka Premium", "Whisky 12 años", "Gin Premium"],
          },
          {
            nombre: "Incluye",
            items: ["2 Bartenders uniformados", "Cristalería premium", "Hielo y mixers", "Montaje decorativo", "Barra iluminada"],
          },
        ],
      },
      {
        nombre: "Barra AAA",
        descripcion:
          "Incluye barra de mixología AAA con destilados premium, coctelería molecular, bartenders profesionales con show en vivo, montaje completo y cristalería fina.",
        minPax: 50,
        menu: [
          {
            nombre: "Coctelería Molecular y Premium",
            items: ["Esferificaciones", "Cócteles ahumados", "Nitrógeno líquido", "Infusiones artesanales", "Menú personalizado de 6 cócteles"],
          },
          {
            nombre: "Destilados Ultra Premium",
            items: ["Tequila Extra Añejo", "Ron Premium 18 años", "Vodka Ultra Premium", "Whisky Single Malt", "Gin artesanal", "Mezcal artesanal"],
          },
          {
            nombre: "Experiencia Completa",
            items: ["Bartenders con show en vivo", "Flair bartending", "Cristalería fina", "Barra temática personalizada", "Iluminación LED", "Fotografía de cócteles"],
          },
        ],
      },
    ],
  },
  {
    title: "Taquizas",
    description:
      "Auténticos tacos mexicanos preparados al momento. El favorito de toda celebración familiar y reunión de amigos.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Taquiza A",
        descripcion:
          "Incluye taquiza con 5 guisos a elegir, tortillas hechas a mano, guarniciones completas, renta de equipo y loza, personal de cocina, logística y servicio.",
        minPax: 50,
        menu: [
          {
            nombre: "Guisos (Elige 5)",
            items: ["Pastor", "Bistec", "Chorizo", "Chicharrón", "Pollo", "Carnitas", "Barbacoa"],
          },
          {
            nombre: "Guarniciones",
            items: ["Cilantro y cebolla", "Salsas verde y roja", "Limones", "Rábanos", "Pepinos"],
          },
          {
            nombre: "Incluye",
            items: ["Tortillas hechas a mano", "Taquero en vivo", "Loza y equipo", "Personal de servicio"],
          },
        ],
      },
      {
        nombre: "Taquiza AA",
        descripcion:
          "Incluye taquiza con 7 guisos premium a elegir, guarniciones completas, tortillas de maíz y harina, renta de equipo y loza, personal de cocina, logística y servicio.",
        minPax: 50,
        menu: [
          {
            nombre: "Guisos Premium (Elige 7)",
            items: ["Pastor en trompo", "Arrachera", "Costilla", "Suadero", "Cachete", "Lengua", "Chorizo argentino", "Pollo al pastor"],
          },
          {
            nombre: "Guarniciones Premium",
            items: ["Cilantro y cebolla", "Guacamole", "Salsas artesanales (4)", "Limones", "Nopales", "Cebollitas cambray", "Queso fundido"],
          },
          {
            nombre: "Incluye",
            items: ["Tortillas maíz y harina", "2 Taqueros en vivo", "Trompo de pastor", "Loza premium", "Montaje decorativo", "Personal completo"],
          },
        ],
      },
    ],
  },
  {
    title: "Canapés",
    description:
      "Delicados bocadillos gourmet ideales para bodas, quinceañeras y eventos sociales de alta distinción.",
    image: "https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Canapés A",
        descripcion:
          "Incluye selección de canapés salados (5 piezas por persona), personal de cocina y servicio, meseros, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Canapés Fríos",
            items: ["Bruschetta de tomate", "Rollitos de jamón serrano", "Canapé de queso crema y salmón"],
          },
          {
            nombre: "Canapés Calientes",
            items: ["Vol-au-vent de champiñones", "Mini quiche lorraine"],
          },
          {
            nombre: "Servicio",
            items: ["5 piezas por persona", "Meseros de paseo", "Charolas decorativas", "Servilletas personalizadas"],
          },
        ],
      },
      {
        nombre: "Canapés AA",
        descripcion:
          "Incluye selección de canapés gourmet (6 piezas por persona), ingredientes premium, personal de cocina y servicio, meseros, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Canapés Fríos Premium",
            items: ["Tartar de atún en wonton", "Carpaccio de res con parmesano", "Canapé de foie gras", "Rollito de salmón ahumado"],
          },
          {
            nombre: "Canapés Calientes Premium",
            items: ["Brocheta de camarón", "Mini empanada de cochinita"],
          },
          {
            nombre: "Servicio Premium",
            items: ["6 piezas por persona", "Meseros uniformados", "Loza fina", "Montaje elegante"],
          },
        ],
      },
      {
        nombre: "Canapés AAA",
        descripcion:
          "Incluye selección de canapés de alta gastronomía (8 piezas por persona), ingredientes premium, técnicas moleculares, chef especializado, meseros premium, loza fina, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Alta Gastronomía Fría",
            items: ["Ostión con espuma de limón", "Tartar de wagyu", "Caviar en blini", "Ceviche en cuchara de nácar"],
          },
          {
            nombre: "Alta Gastronomía Caliente",
            items: ["Esfera de consomé", "Ravioli de langosta", "Brocheta de pulpo", "Mini risotto de trufa"],
          },
          {
            nombre: "Experiencia Exclusiva",
            items: ["8 piezas por persona", "Chef en sitio", "Técnicas moleculares", "Loza de autor", "Servicio guante blanco"],
          },
        ],
      },
    ],
  },
  {
    title: "Buffet",
    description:
      "Variedad de platillos para todos los gustos. Perfecto para fiestas grandes, bodas y celebraciones familiares.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Desayuno A",
        descripcion:
          "Incluye desayuno buffet con selección de frutas, platos calientes, complementos, postres y bebidas, personal de cocina y servicio, renta de equipo y loza, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Frutas y Entradas Frías",
            items: ["Ensalada de frutas de temporada con miel", "Fruta picada (melón, sandía, piña)", "Copa de yogur natural con granola", "Parfait de yogur con avena y miel", "Ensalada cítrica (naranja, toronja y menta)"],
          },
          {
            nombre: "Platos Calientes",
            items: ["Chilaquiles verdes con pollo y crema", "Enfrijoladas rellenas de pollo o queso", "Enchiladas rojas de pollo", "Molletes con pico de gallo", "Quesadillas de flor de calabaza o champiñones"],
          },
          {
            nombre: "Complementos",
            items: ["Frijoles refritos", "Pan dulce variado", "Bolillos y mantequilla", "Ensalada de nopales", "Salsa verde y roja", "Crema y queso rallado"],
          },
          {
            nombre: "Postres",
            items: ["Carlota de limón", "Flan napolitano", "Ensalada de manzana", "Mini hot cakes dulces con miel"],
          },
          {
            nombre: "Bebidas",
            items: ["Café de olla con canela", "Chocolate caliente sencillo", "Agua de naranja natural", "Agua de jamaica ligera", "Jugo verde (piña, nopal y apio)", "Té de manzanilla o menta"],
          },
        ],
      },
      {
        nombre: "Desayuno AA",
        descripcion:
          "Incluye desayuno buffet AA con amplia selección de 2 frutas, 3 platos calientes, 2 complementos, 2 postres y 3 bebidas, personal de cocina y servicio, renta de equipo y loza, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Frutas y Entradas Frías",
            items: ["Ensalada de frutas tropicales con miel y yogur griego", "Parfait de yogur con granola y frutos rojos", "Fruta picada con coco rallado y miel de agave", "Brochetas de fruta con dip de yogur", "Ensalada tropical (piña, mango y coco rallado)"],
          },
          {
            nombre: "Platos Calientes",
            items: ["Chilaquiles verdes con crema, queso y pollo deshebrado", "Enchiladas de pollo en salsa roja", "Molletes con frijoles y queso gratinado", "Omelette de jamón y queso", "Pan francés con miel de maple", "Huevos rancheros", "Enfrijoladas de pollo", "Enchiladas suizas de pollo"],
          },
          {
            nombre: "Complementos",
            items: ["Frijoles refritos", "Arroz a la mexicana", "Papas cambray al perejil", "Pan dulce variado", "Totopos caseros", "Queso fresco en cubos"],
          },
          {
            nombre: "Postres",
            items: ["Panqué de plátano casero", "Flan napolitano tradicional", "Arroz con leche con canela", "Carlota de limón con galleta María", "Pay de queso sencillo", "Brownie de chocolate", "Gelatina de yogur con frutas"],
          },
          {
            nombre: "Bebidas",
            items: ["Café americano", "Café de olla con canela y piloncillo", "Chocolate caliente", "Té negro o té de manzanilla", "Agua de jamaica natural", "Agua de naranja natural", "Agua de piña natural", "Limonada natural", "Jugo verde"],
          },
        ],
      },
      {
        nombre: "Desayuno AAA",
        descripcion:
          "Incluye desayuno buffet AAA con técnicas de alta gastronomía, estaciones frías y calientes, ingredientes premium, bebidas de especialidad, chef y personal especializado, renta de equipo y loza fina, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Estación de Frutas Premium",
            items: ["Carpaccio de piña con miel de lavanda y hojas de menta", "Brochetas de frutas exóticas con dip de yogur griego y miel de agave", "Ensalada de frutas tropicales con coco rallado y semillas de chía", "Parfait de yogur con granola artesanal y frutos del bosque", "Copa de mango con crema de maracuyá"],
          },
          {
            nombre: "Estación Caliente de Alta Cocina",
            items: ["Huevos benedictinos con salmón ahumado y salsa holandesa", "Omelette de champiñones silvestres y queso gruyère", "Chilaquiles verdes con pechuga al grill y crema de aguacate", "Hotcakes de buttermilk con frutos rojos y miel de maple", "Waffles belgas con Nutella y fresas", "Tostada de aguacate con huevo pochado y microgreens"],
          },
          {
            nombre: "Charcutería y Quesos",
            items: ["Selección de quesos europeos (brie, manchego, gouda)", "Jamón serrano y prosciutto", "Salmón ahumado con alcaparras y cebolla morada", "Pan artesanal variado", "Mermeladas artesanales"],
          },
          {
            nombre: "Panadería Artesanal",
            items: ["Croissants de mantequilla", "Pain au chocolat", "Danish de frutas", "Mini conchas artesanales", "Muffins gourmet variados"],
          },
          {
            nombre: "Postres de Autor",
            items: ["Mini tartaleta de frutas con crema pastelera", "Mousse de chocolate belga", "Panacota de vainilla con coulis de frutos rojos", "Macarons franceses", "Crème brûlée individual"],
          },
          {
            nombre: "Bebidas Premium",
            items: ["Café espresso artesanal", "Cappuccino y latte con arte", "Chocolate caliente belga", "Jugo de naranja recién exprimido", "Jugo verde detox", "Mimosa con espumoso brut", "Selección de tés premium"],
          },
        ],
      },
      {
        nombre: "Comida A",
        descripcion:
          "Incluye comida buffet con entradas, platos fuertes, complemento, postres y bebidas, personal de cocina y servicio, renta de equipo y loza, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entradas",
            items: ["Ensalada verde con jitomate y aderezo de vinagreta", "Ensalada de pasta con jamón y mayonesa", "Ensalada de nopales con cebolla, jitomate y queso fresco", "Ensalada de papa con zanahoria y huevo cocido", "Ensalada de col con zanahoria", "Ensalada de betabel con naranja y lechuga"],
          },
          {
            nombre: "Platos Fuertes",
            items: ["Pechuga de pollo en salsa poblana", "Pollo en salsa chipotle", "Pollo en adobo", "Filete de pescado al mojo de ajo", "Filete de pescado a la veracruzana", "Lomo de cerdo en salsa BBQ", "Albóndigas en salsa de jitomate", "Tinga de pollo"],
          },
          {
            nombre: "Complementos",
            items: ["Arroz rojo con jitomate", "Arroz blanco con elote", "Puré de papa", "Espagueti a la mantequilla", "Verduras al vapor", "Ensalada fría de coditos", "Verduras salteadas con mantequilla"],
          },
          {
            nombre: "Postres",
            items: ["Gelatina mosaico", "Panqué de plátano", "Brownie sencillo con azúcar glass", "Pay de manzana"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de horchata tradicional", "Agua de melón natural", "Agua de limón con chía", "Limonada mineral", "Café de olla o americano"],
          },
        ],
      },
      {
        nombre: "Comida AA",
        descripcion:
          "Incluye comida buffet AA con 2 entradas, 2 platos calientes, 1 complemento, 2 postres y 3 bebidas, personal de cocina y servicio, renta de equipo y loza, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entradas",
            items: ["Crema de elote con julianas de tortilla", "Crema de papa con perejil", "Sopa de fideo seco al chipotle", "Crema de zanahoria con jengibre", "Sopa de lentejas con plátano macho", "Ensalada de espinaca con manzana y nuez", "Ensalada verde con aderezo de miel y mostaza", "Ensalada de betabel con queso fresco y naranja"],
          },
          {
            nombre: "Platos Fuertes",
            items: ["Pollo en salsa de mostaza y miel", "Fajitas de res con pimientos", "Pechuga de pollo rellena de jamón serrano y queso manchego con puré de papa al perejil", "Filete de pescado en salsa de limón y alcaparras con arroz al perejil", "Lomo de cerdo en salsa de ciruela con papas cambray al romero"],
          },
          {
            nombre: "Complementos",
            items: ["Papas cambray al romero", "Arroz poblano", "Verduras salteadas con mantequilla y ajo", "Puré de papa", "Espagueti a la mantequilla"],
          },
          {
            nombre: "Postres",
            items: ["Flan napolitano con caramelo y ralladura de naranja", "Cheesecake de frutos rojos", "Brownie de chocolate con salsa de vainilla", "Pan de zanahoria con glaseado de queso crema", "Pay de manzana con canela y crema dulce", "Copa de tiramisú de café"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de pepino con limón y menta", "Agua de jamaica con canela", "Limonada con jengibre y miel", "Infusión fría de té verde con manzana", "Agua de melón con albahaca", "Té caliente (manzanilla o menta)"],
          },
        ],
      },
      {
        nombre: "Comida AAA",
        descripcion:
          "Incluye comida buffet AAA con ingredientes premium, técnicas de alta gastronomía, estaciones asistidas, bebidas con vino, chef y personal especializado, renta de loza fina, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entradas",
            items: ["Crema de poro y papa con chips de tocino y cebollín", "Tartar de atún con aguacate y ajonjolí tostado", "Ensalada de pera con nuez caramelizada, queso azul y vinagreta balsámica", "Sopa de hongos al ajillo con crutones de parmesano", "Bruschetta de jamón serrano, higo y reducción de balsámico", "Mini tostada de pulpo al ajillo con puré de papa ahumado", "Ensalada de betabel rostizado con queso de cabra y vinagreta de miel"],
          },
          {
            nombre: "Platos Fuertes",
            items: ["Medallón de res en salsa de vino tinto con papas al romero y vegetales glaseados", "Salmón al limón con espinacas salteadas y puré de camote", "Lomo de cerdo en salsa de frutos rojos con couscous de hierbas y espárragos", "Pollo relleno de ricotta y espinacas con salsa de jitomate rostizado", "Pasta al pesto con camarones salteados y tomate cherry asado", "Costilla de res en cocción lenta con puré rústico y calabacitas"],
          },
          {
            nombre: "Postres",
            items: ["Panacota de vainilla con coulis de frutos rojos", "Tiramisú individual en copa", "Cheesecake de frutos del bosque", "Mousse de maracuyá con crumble de coco", "Volcán de chocolate con centro líquido", "Tartaleta de manzana con crema pastelera"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de jamaica con lavanda y limón", "Limonada con pepino y menta fresca", "Clericot con vino tinto y frutas tropicales", "Agua de piña con jengibre", "Limonada mineral con romero y jarabe natural", "Sangría blanca con vino blanco y uvas verdes"],
          },
        ],
      },
      {
        nombre: "Cena A",
        descripcion:
          "Incluye cena buffet con entradas, platos fuertes, complemento, postres y bebidas, personal de cocina y servicio, renta de equipo y loza, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entradas",
            items: ["Crema de champiñones con crotones", "Sopa de verduras con fideos delgados", "Ensalada de nopales con queso fresco y jitomate", "Crema de zanahoria con jengibre y toque de crema", "Ensalada de espinacas con manzana y aderezo de miel y mostaza", "Ensalada de betabel y naranja"],
          },
          {
            nombre: "Platos Fuertes",
            items: ["Pechuga de pollo en salsa de chipotle cremosa", "Filete de pescado en salsa de mango", "Lomo de cerdo en salsa de mostaza y miel", "Pollo en salsa de tamarindo", "Bistec encebollado", "Pechuga en salsa de champiñones", "Filete de pescado empapelado con jitomate y cebolla"],
          },
          {
            nombre: "Postres",
            items: ["Flan de caramelo", "Gelatina de leche con frutas", "Panqué de zanahoria", "Carlota de piña", "Gelatina de tres leches", "Pay de limón", "Brownie con azúcar glass"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de jamaica con toque de limón", "Agua de tamarindo con chile en el borde", "Limonada natural o mineral", "Agua de piña con menta", "Agua de guayaba natural", "Café americano o de olla", "Té caliente (manzanilla, menta o negro)"],
          },
        ],
      },
      {
        nombre: "Cena AA",
        descripcion:
          "Incluye cena buffet AA con entradas, platos fuertes, complementos, postres y bebidas, personal de cocina y servicio, renta de equipo y loza, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entradas",
            items: ["Crema de elote con juliana de chile poblano y crotones", "Crema de papa con cebollín y tocino crujiente", "Ensalada de espinaca con pera, nuez y vinagreta de mostaza", "Ensalada caprese con pesto de albahaca", "Crema de jitomate rostizado con aceite de albahaca", "Ensalada de betabel con queso panela y naranja"],
          },
          {
            nombre: "Platos Fuertes",
            items: ["Pechuga de pollo rellena de jamón serrano y queso manchego", "Filete de pescado en salsa de limón y alcaparras", "Lomo de cerdo en salsa de ciruela con papas cambray", "Medallón de res con salsa de champiñones", "Costilla de cerdo en salsa BBQ con puré rústico", "Pechuga al vino blanco con papas gratinadas"],
          },
          {
            nombre: "Complementos",
            items: ["Papas cambray al romero", "Arroz con hierbas finas", "Verduras salteadas con mantequilla y ajo", "Puré de papa cremoso", "Pasta corta a la mantequilla con parmesano"],
          },
          {
            nombre: "Postres",
            items: ["Flan napolitano con caramelo y ralladura de naranja", "Cheesecake de frutos rojos", "Brownie de chocolate con salsa de vainilla", "Pay de manzana con canela y crema dulce", "Gelatina mosaico con base de leche condensada", "Crepa de plátano con caramelo y nuez"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de pepino con limón y menta", "Agua de jamaica con canela y clavo", "Limonada con jengibre y miel", "Agua de melón con albahaca", "Jugo de arándano con limón", "Café americano o cappuccino", "Té caliente (variedad)"],
          },
        ],
      },
      {
        nombre: "Cena AAA",
        descripcion:
          "Incluye cena buffet AAA con alta gastronomía, técnicas moleculares, estaciones asistidas, bebidas con vino y digestivo, chef y personal especializado, renta de loza fina, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entradas",
            items: ["Sopa de cebolla caramelizada gratinada con queso gruyère", "Crema de poro y papa con chips de tocino y cebollín", "Tartar de atún con aguacate y ajonjolí tostado", "Ensalada de pera con nuez caramelizada, queso azul y vinagreta balsámica", "Carpaccio de res con rúcula, parmesano y reducción balsámica", "Rollitos de salmón ahumado con queso crema y eneldo"],
          },
          {
            nombre: "Platos Fuertes",
            items: ["Medallón de res en salsa de vino tinto con papas al romero y vegetales glaseados", "Salmón al limón con espinacas salteadas y puré de camote", "Lomo de cerdo en salsa de frutos rojos con couscous de hierbas", "Rack de cordero con costra de hierbas y reducción de oporto", "Risotto de hongos silvestres con aceite de trufa", "Filete de robalo en salsa de mariscos con arroz jazmín"],
          },
          {
            nombre: "Estación de Quesos y Carnes",
            items: ["Tabla de quesos europeos (brie, manchego, gouda, roquefort)", "Jamón serrano y prosciutto", "Frutas secas y nueces", "Mermeladas artesanales", "Pan artesanal y crutones"],
          },
          {
            nombre: "Postres",
            items: ["Panacota de vainilla con coulis de frutos rojos", "Tiramisú individual en copa", "Mousse de maracuyá con crumble de coco", "Volcán de chocolate con centro líquido", "Mini tartaletas de frutas con crema pastelera", "Esfera de chocolate con sorpresa de frutos del bosque"],
          },
          {
            nombre: "Bebidas Premium",
            items: ["Vino tinto Cabernet Sauvignon o Malbec", "Vino blanco Chardonnay o Sauvignon Blanc", "Sangría de vino tinto con frutas", "Agua de jamaica con lavanda", "Limonada con pepino y menta fresca", "Café espresso o americano artesanal", "Selección de digestivos (licor de café, amaretto)"],
          },
        ],
      },
    ],
  },
  {
    title: "Emplatado",
    description:
      "Servicio de restaurante en tu evento. Cada platillo presentado con elegancia para ocasiones memorables.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Desayuno A",
        descripcion:
          "Incluye desayuno emplatado con entrada de frutas, plato fuerte, postre y bebidas, personal de cocina y servicio, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Frutas (Elige 1)",
            items: ["Ensalada de frutas de temporada con miel y granola", "Copa de yogur natural con papaya y avena tostada", "Fruta picada (melón, sandía, piña) con toque de limón", "Brocheta de frutas con dip de yogur de vainilla", "Ensalada de manzana con nuez y crema ligera"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Chilaquiles verdes con crema, queso y pollo deshebrado", "Enchiladas de pollo en salsa roja", "Molletes con frijoles y queso gratinado", "Omelette de jamón y queso", "Pan francés con miel de maple", "Huevos rancheros", "Huevos a la mexicana", "Enfrijoladas de pollo"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Panqué de plátano casero", "Flan napolitano tradicional", "Arroz con leche con canela", "Carlota de limón con galleta María", "Ensalada de manzana con crema", "Pay de queso sencillo", "Brownie de chocolate"],
          },
          {
            nombre: "Bebidas",
            items: ["Café americano", "Café de olla con canela y piloncillo", "Chocolate caliente sencillo", "Té negro o té de manzanilla", "Agua de jamaica natural", "Agua de naranja natural", "Limonada natural"],
          },
        ],
      },
      {
        nombre: "Desayuno AA",
        descripcion:
          "Incluye desayuno emplatado AA con entrada de frutas, plato fuerte con guarnición, postre y bebidas premium, personal de cocina y servicio, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Frutas (Elige 1)",
            items: ["Copa de yogur con frutas tropicales y granola artesanal", "Ensalada de frutas frescas con miel de agave y menta", "Brocheta de melón, piña y fresa con dip de yogur natural", "Parfait de mango con avena y coco rallado", "Fruta picada con crema de limón y amaranto tostado", "Copa de papaya con yogur natural y semillas de chía"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Omelette de jamón y queso con papas cambray al perejil", "Chilaquiles rojos con pechuga al grill y frijoles refritos", "Enchiladas verdes de pollo con crema y queso fresco", "Huevos al gusto con hash browns y tocino glaseado", "Molletes con pico de gallo y guacamole", "Pan francés con frutos rojos y miel de maple", "Crepa rellena de champiñones y queso manchego con salsa bechamel"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Panqué de plátano con crema dulce", "Mini pancakes con miel de maple", "Croissant relleno de crema pastelera", "Yogur con compota de frutos del bosque", "Muffin de zanahoria con glaseado de queso crema", "Pan de elote con crema batida", "Galleta tibia de chispas de chocolate"],
          },
          {
            nombre: "Bebidas",
            items: ["Cappuccino o latte espumoso", "Jugo verde (piña, nopal, apio y limón)", "Té de manzanilla, menta o jamaica fría", "Agua natural o mineral con rodajas de cítricos", "Mimosa con jugo natural y vino espumoso"],
          },
        ],
      },
      {
        nombre: "Desayuno AAA",
        descripcion:
          "Incluye desayuno emplatado AAA con múltiples tiempos, técnicas de alta gastronomía, bebidas premium (incluye mimosa), chef y personal especializado, renta de loza fina, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Frutas (Elige 1)",
            items: ["Carpaccio de piña con miel de lavanda y hojas de menta", "Mini tartaleta de frutas con crema pastelera", "Pan de elote con crema dulce"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Omelette de jamón y queso con papas cambray al perejil", "Chilaquiles rojos con pechuga al grill y frijoles refritos", "Enchiladas verdes de pollo con crema y queso fresco", "Huevos al gusto con hash browns y tocino glaseado", "Tostada de aguacate con huevo pochado y ensalada de hojas verdes", "Huevos rancheros con frijoles refritos y totopos de maíz"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Panqué de plátano con crema dulce", "Mini pancakes con miel de maple", "Croissant relleno de crema pastelera", "Mini waffle con miel y fresas", "Mini tarta de manzana con canela", "Mousse de café con crumble de avena"],
          },
          {
            nombre: "Bebidas Premium",
            items: ["Café americano o espresso artesanal", "Cappuccino o latte con canela", "Jugo natural de naranja o toronja rosa", "Jugo verde de piña, nopal y apio", "Chocolate caliente artesanal con espuma de leche", "Mimosa con jugo de naranja natural y espumoso brut"],
          },
        ],
      },
      {
        nombre: "Comida A",
        descripcion:
          "Incluye comida emplatada con entrada, plato fuerte, postre y bebidas, personal de cocina y servicio, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entrada (Elige 1)",
            items: ["Crema de elote con julianas de tortilla frita y toque de chipotle", "Ensalada caprese con pesto de albahaca", "Tostada de tinga de pollo con crema y aguacate", "Ceviche de soya con tostadas", "Ensalada verde con vinagreta de mostaza y miel", "Crema de calabaza con crotones de pan de ajo"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Pechuga de pollo rellena de espinaca y queso en salsa de poblano", "Filete de pescado en salsa de mango y chile guajillo", "Pollo a la mostaza con puré de papa y verduras al vapor", "Milanesa de res con papas cambray al romero", "Pasta Alfredo con pollo y brócoli", "Tinga de pollo con arroz y frijoles refritos"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Carlota de limón", "Mousse de chocolate", "Gelatina de agua", "Gelatina de mosaico", "Crumble de manzana", "Pan de elote"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de piña natural con hierbabuena", "Limonada natural con rodajas de limón", "Naranjada mineral con toque de miel", "Agua de melón con menta fresca", "Agua de pepino con limón", "Té helado de durazno o limón", "Agua de guayaba"],
          },
        ],
      },
      {
        nombre: "Comida AA",
        descripcion:
          "Incluye comida emplatada AA con entrada, plato fuerte con guarnición, postre y bebidas, personal de cocina y servicio, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entrada (Elige 1)",
            items: ["Ensalada de espinaca, pera y queso de cabra con nuez caramelizada", "Crema de elote con julianas de chile poblano y crotones de pan de ajo", "Ensalada caprese con pesto de albahaca y reducción de balsámico", "Crema de jitomate rostizado con aceite de albahaca", "Ensalada de betabel con queso panela, naranja y vinagreta de miel", "Sopa de lentejas con chorizo español y crutones"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Pechuga de pollo rellena de jamón serrano y queso manchego con puré de papa al perejil", "Filete de pescado en salsa de limón y alcaparras con arroz al perejil y verduras al vapor", "Lomo de cerdo en salsa de ciruela con papas cambray al romero", "Medallón de res con salsa de champiñones y espagueti a la mantequilla", "Pollo al chipotle con arroz blanco y ensalada fresca", "Enchiladas de pato en salsa de jamaica con arroz blanco"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Flan napolitano con caramelo y ralladura de naranja", "Cheesecake de frutos rojos", "Brownie de chocolate con salsa de vainilla", "Pan de zanahoria con glaseado de queso crema", "Pay de manzana con canela y crema dulce", "Crepa de plátano con caramelo y nuez", "Copa de tiramisú de café"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de pepino con limón y menta", "Agua de jamaica con canela", "Limonada con jengibre y miel", "Infusión fría de té verde con manzana", "Agua de melón con albahaca", "Mocktail de durazno con menta y soda"],
          },
        ],
      },
      {
        nombre: "Comida AAA",
        descripcion:
          "Incluye comida emplatada AAA con cuatro tiempos, técnicas de alta gastronomía, bebidas premium (vino y espumoso), chef y personal especializado, renta de loza fina, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entrada (Elige 1)",
            items: ["Crema de poro y papa con chips de tocino y cebollín", "Tartar de atún con aguacate y ajonjolí tostado", "Ensalada de pera con nuez caramelizada, queso azul y vinagreta balsámica", "Sopa de hongos al ajillo con crutones de parmesano", "Crema de zanahoria con jengibre y aceite de cilantro", "Mini tostada de pulpo al ajillo con puré de papa ahumado", "Crema de espárragos con topping de parmesano"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Medallón de res en salsa de vino tinto con papas al romero y vegetales glaseados", "Salmón al limón con espinacas salteadas y puré de camote", "Lomo de cerdo en salsa de frutos rojos con couscous de hierbas y espárragos a la plancha", "Pollo relleno de ricotta y espinacas con salsa de jitomate rostizado", "Costilla de res en cocción lenta con puré rústico y calabacitas salteadas", "Risotto de hongos con aceite de trufa y chips de parmesano"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Panacota de vainilla con coulis de frutos rojos", "Tiramisú individual en copa", "Cheesecake de frutos del bosque", "Mousse de maracuyá con crumble de coco", "Volcán de chocolate con centro líquido", "Crepas rellenas de frutos rojos con salsa de vainilla", "Brownie con helado y salsa de caramelo salado"],
          },
          {
            nombre: "Bebidas Premium",
            items: ["Agua de jamaica con lavanda y limón", "Limonada con pepino y menta fresca", "Clericot con vino tinto y frutas tropicales", "Agua de piña con jengibre", "Vino blanco Chardonnay o Sauvignon Blanc", "Vino tinto Cabernet Sauvignon o Malbec"],
          },
        ],
      },
      {
        nombre: "Cena A",
        descripcion:
          "Incluye cena emplatada con entrada, plato fuerte, postre y bebidas, personal de cocina y servicio, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entrada (Elige 1)",
            items: ["Crema de champiñones con crotones", "Sopa de verduras con fideos delgados", "Ensalada de nopales con queso fresco y jitomate", "Crema de zanahoria con jengibre y toque de crema", "Ensalada de espinacas con manzana y aderezo de miel y mostaza", "Ensalada de betabel y naranja", "Crema de calabaza con pepitas tostadas"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Pechuga de pollo en salsa de chipotle cremosa", "Filete de pescado en salsa de mango", "Lomo de cerdo en salsa de mostaza y miel", "Pollo en salsa de tamarindo", "Bistec encebollado", "Pechuga en salsa de champiñones", "Albóndigas de res en salsa BBQ", "Enchiladas de pollo en salsa de chile pasilla"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Flan de caramelo", "Gelatina de leche con frutas", "Panqué de zanahoria", "Carlota de piña", "Gelatina de tres leches", "Pay de limón", "Brownie con azúcar glass"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de jamaica con toque de limón", "Agua de tamarindo con chile en el borde", "Limonada natural o mineral", "Agua de piña con menta", "Café americano o de olla", "Té caliente (manzanilla, menta o negro)"],
          },
        ],
      },
      {
        nombre: "Cena AA",
        descripcion:
          "Incluye cena emplatada AA con entrada, plato fuerte con guarnición, postre y bebidas, personal de cocina y servicio, renta de loza y equipo, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entrada (Elige 1)",
            items: ["Ensalada de espinaca, pera y queso de cabra con nuez caramelizada", "Crema de elote con julianas de chile poblano y crotones de pan de ajo", "Ensalada caprese con pesto de albahaca y reducción de balsámico", "Crema de jitomate rostizado con aceite de albahaca", "Ensalada de betabel con queso panela, naranja y vinagreta de miel", "Crema de papa con cebollín y tocino crujiente"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Pechuga de pollo rellena de jamón serrano y queso manchego con puré de papa al perejil", "Filete de pescado en salsa de limón y alcaparras con arroz al perejil y verduras al vapor", "Lomo de cerdo en salsa de ciruela con papas cambray al romero", "Medallón de res con salsa de champiñones y espagueti a la mantequilla", "Costilla de cerdo en salsa BBQ con puré de papa rústico", "Pechuga al vino blanco con papas gratinadas y ejotes salteados"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Flan napolitano con caramelo y ralladura de naranja", "Cheesecake de frutos rojos", "Brownie de chocolate con salsa de vainilla", "Pan de zanahoria con glaseado de queso crema", "Pay de manzana con canela y crema dulce", "Gelatina mosaico con base de leche condensada", "Crepa de plátano con caramelo y nuez"],
          },
          {
            nombre: "Bebidas",
            items: ["Agua de pepino con limón y menta", "Agua de jamaica con canela", "Limonada con jengibre y miel", "Agua de melón con albahaca", "Jugo de arándano con limón y romero", "Mocktail de durazno con menta y soda"],
          },
        ],
      },
      {
        nombre: "Cena AAA",
        descripcion:
          "Incluye cena emplatada AAA con cuatro tiempos, técnicas de alta gastronomía, bebidas premium (vino y espumoso), chef y personal especializado, renta de loza fina, logística y montaje.",
        minPax: 50,
        menu: [
          {
            nombre: "Entrada (Elige 1)",
            items: ["Sopa de cebolla caramelizada gratinada", "Crema de poro y papa con chips de tocino y cebollín", "Tartar de atún con aguacate y ajonjolí tostado", "Ensalada de pera con nuez caramelizada, queso azul y vinagreta balsámica", "Crema de espárragos con topping de parmesano", "Rollitos de salmón con queso crema y eneldo fresco"],
          },
          {
            nombre: "Plato Fuerte (Elige 1)",
            items: ["Medallón de res en salsa de vino tinto con papas al romero y vegetales glaseados", "Salmón al limón con espinacas salteadas y puré de camote", "Lomo de cerdo en salsa de frutos rojos con couscous de hierbas y espárragos a la plancha", "Trucha con salsa de alcaparras y limón con arroz al perejil", "Pechuga al grill con salsa de mostaza antigua, papas confitadas y ejotes con mantequilla", "Risotto de hongos con aceite de trufa y chips de parmesano"],
          },
          {
            nombre: "Postre (Elige 1)",
            items: ["Esfera de chocolate rellena de mousse de frutos rojos", "Mini tarta de higos con crema de nuez", "Panqué tibio de plátano con helado de canela", "Coulant de frutos rojos con crumble de almendra", "Soufflé de vainilla con coulis de frambuesa", "Mousse de maracuyá con espejo de mango"],
          },
          {
            nombre: "Bebidas Premium",
            items: ["Espumoso brut o rosé", "Vino blanco Chardonnay o Sauvignon Blanc", "Vino tinto Cabernet Sauvignon o Malbec", "Limonada con flor de jamaica y lavanda", "Mocktail de frutos rojos con jengibre y soda", "Mojito de mango con hierbabuena fresca", "Café espresso o americano artesanal"],
          },
        ],
      },
    ],
  },
  {
    title: "Box Lunch",
    description:
      "Comidas individuales perfectamente empacadas para fiestas infantiles, picnics y eventos al aire libre.",
    image: "https://images.unsplash.com/photo-1681374241388-6d2150c14473?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Box Lunch AA",
        descripcion:
          "Incluye chapata o wrap, fruta fresca, jugo natural, papas, barrita, empaque individual, logística y coordinación.",
        minPax: 50,
        menu: [
          {
            nombre: "Contenido del Box",
            items: ["Chapata de jamón y queso o pollo", "Porción de fruta fresca", "Bolsa de papas", "Barrita de cereal", "Jugo natural 250ml", "Agua de sabor"],
          },
          {
            nombre: "Presentación",
            items: ["Caja individual decorativa", "Servilleta", "Cubiertos desechables premium"],
          },
        ],
      },
      {
        nombre: "Box Lunch AAA",
        descripcion:
          "Incluye wrap premium, pasta gourmet, fruta fresca, agua natural de sabor, mix de nueces, barrita, empaque individual, logística y coordinación.",
        minPax: 50,
        menu: [
          {
            nombre: "Contenido Gourmet",
            items: ["Wrap de salmón o pollo mediterráneo", "Ensalada de pasta gourmet", "Fruta de temporada", "Mix de nueces y arándanos", "Brownie artesanal", "Agua infusionada 500ml"],
          },
          {
            nombre: "Presentación Premium",
            items: ["Caja eco-friendly personalizada", "Servilleta de tela", "Cubiertos biodegradables", "Tarjeta personalizada"],
          },
        ],
      },
    ],
  },
  {
    title: "Coffee Break",
    description:
      "Estación de café, té y bocadillos dulces para baby showers, despedidas y reuniones íntimas.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Coffee Break AA",
        descripcion:
          "Incluye café con insumos completos (azúcar, splenda, crema, agitador), variedad de tés, mix de galletas, agua embotellada, palomitas, montaje y operación.",
        minPax: 50,
        menu: [
          {
            nombre: "Bebidas",
            items: ["Café (azúcar, splenda, crema, agitador)", "Té (variedad de Tés)", "Botellas de agua"],
          },
          {
            nombre: "Snacks",
            items: ["Galletas (mix de galletas)", "Palomitas", "Bolsa de palomitas"],
          },
          {
            nombre: "Servicio",
            items: ["Estación de café", "Montaje decorativo", "Personal de servicio"],
          },
        ],
      },
      {
        nombre: "Coffee Break AAA",
        descripcion:
          "Incluye café con insumos premium, variedad de tés, galletas MacMa, croissant de jamón y queso, agua embotellada, refrescos, palomitas, papas, fruta, montaje y personal.",
        minPax: 50,
        menu: [
          {
            nombre: "Bebidas Premium",
            items: ["Café (azúcar, splenda, crema, agitador)", "Té (variedad de Tés)", "Botellas de agua", "Refrescos"],
          },
          {
            nombre: "Snacks Gourmet",
            items: ["Croissant de jamón y queso", "Galletas (mix de galletas MacMa)", "Palomitas", "Papas", "Fruta"],
          },
          {
            nombre: "Experiencia Completa",
            items: ["Barista en sitio", "Estación decorada", "Loza premium", "Servilletas personalizadas"],
          },
        ],
      },
    ],
  },
  {
    title: "Barra de Dulces",
    description:
      "Mesa de postres soñada con dulces artesanales. El toque mágico para bodas, XV años y cumpleaños.",
    image: "https://images.unsplash.com/photo-1558234438-16548a1162c4?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Barra de Dulces",
        descripcion:
          "Incluye dulces mexicanos tradicionales, gomitas y chocolates, paletas y bombones, galletas decoradas temáticas, cupcakes personalizados y decoración completa de mesa.",
        minPax: 50,
        menu: [
          {
            nombre: "Dulces Tradicionales",
            items: ["Mazapanes", "Borrachitos", "Cocadas", "Alegrías", "Palanquetas", "Obleas con cajeta"],
          },
          {
            nombre: "Dulces Modernos",
            items: ["Cupcakes decorados", "Cake pops", "Macarons", "Galletas decoradas", "Brownies", "Mini pays"],
          },
          {
            nombre: "Presentación",
            items: ["Mesa decorada temática", "Contenedores de cristal", "Pinzas y cucharas", "Bolsitas para llevar", "Letrero personalizado"],
          },
        ],
      },
    ],
  },
  {
    title: "Barra de Botanas",
    description:
      "Snacks y aperitivos variados para mantener a tus invitados felices durante toda la celebración.",
    image: "https://images.unsplash.com/photo-1602097944182-c43423a8056d?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Barra de Botanas",
        descripcion:
          "Incluye papas y frituras variadas, cacahuates y semillas, palomitas gourmet, verduras con dip, quesos y jamones, frutos secos y aceitunas.",
        minPax: 50,
        menu: [
          {
            nombre: "Botanas Saladas",
            items: ["Papas surtidas", "Cacahuates", "Platanitos fritos", "Palomitas", "Crudités", "Mix de nueces"],
          },
          {
            nombre: "Tabla de Quesos y Carnes",
            items: ["Domo de charcutería", "Salsas y limones", "Aguas", "Refrescos"],
          },
        ],
      },
    ],
  },
  {
    title: "Barra de Bunbun Rolls",
    description:
      "Rollos dulces y salados únicos que sorprenderán a todos. Una experiencia diferente y deliciosa.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop",
    variantes: [
      {
        nombre: "Barra de Bunbun Rolls",
        descripcion:
          "Incluye rollos de canela clásicos, rellenos de Nutella y frutas, opciones saladas con queso, toppings personalizables, preparación frente a invitados y aroma irresistible garantizado.",
        minPax: 50,
        menu: [
          {
            nombre: "Rollos Dulces",
            items: ["Clásico de canela", "Nutella con fresas", "Cajeta con nuez", "Queso crema con zarzamora", "Chocolate blanco con frambuesa"],
          },
          {
            nombre: "Rollos Salados",
            items: ["Queso crema con jalapeño", "Tocino con maple", "Jamón con queso gouda"],
          },
          {
            nombre: "Toppings Extra",
            items: ["Crema batida", "Helado de vainilla", "Frutas frescas", "Salsas de chocolate", "Chispas de colores"],
          },
        ],
      },
    ],
  },
];
