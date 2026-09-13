import type { ImageMetadata } from 'astro';

export type MenuCategory = 'carnes' | 'pollo' | 'pescado' | 'arroz' | 'bebidas';

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  shortName: string;
  shortDescription: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'carnes', name: 'Carnes a la Brasa', shortName: 'Carnes', shortDescription: 'Cortes seleccionados al carbón con sazón criolla', icon: 'lucide:beef' },
  { id: 'pollo', name: 'Pollo Asado & Broaster', shortName: 'Pollo', shortDescription: 'Dorado crujiente y jugoso por dentro', icon: 'lucide:drumstick' },
  { id: 'pescado', name: 'Pescados del Río & Mar', shortName: 'Pescados', shortDescription: 'Mojarra fresca, bagre y truchas preparadas al gusto', icon: 'lucide:fish' },
  { id: 'arroz', name: 'Arroces Especiales', shortName: 'Arroces', shortDescription: 'Porciones generosas con el toque tradicional', icon: 'lucide:soup' },
  { id: 'bebidas', name: 'Bebidas & Refrescos', shortName: 'Bebidas', shortDescription: 'Limonadas naturales, jugos y gaseosas heladas', icon: 'lucide:cup-soda' }
];

export interface Dish {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  accompaniments: string[];
  description?: string;
  featured?: boolean;
  badge?: string;
  image?: ImageMetadata;
}

const MENU_ITEMS_RAW: Omit<Dish, 'image'>[] = [
  // --- CARNES ---
  {
    id: "picada-mixta",
    name: "Picada Mixta Especial",
    category: "carnes",
    price: 58000,
    accompaniments: ["Res", "Cerdo", "Pollo", "Chorizo", "Salchicha", "Patacón", "Papa a la francesa"],
    description: "Nuestra picada reina de la casa para compartir: abundante combinación de carnes al carbón y crocantes patacones.",
    featured: true,
    badge: "Para Compartir",
  },
  {
    id: "churrasco",
    name: "Churrasco a la Brasa",
    category: "carnes",
    price: 38000,
    accompaniments: ["Ensalada fresca", "Papa a la francesa", "Arroz blanco"],
    description: "Corte grueso y jugoso asado a fuego vivo de carbón vegetal, sellado a la perfección con sal parrillera.",
    featured: true,
    badge: "Corte Estrella",
  },
  {
    id: "carne-res-asada",
    name: "Carne de Res Asada",
    category: "carnes",
    price: 33000,
    accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"],
    description: "Filete de res tierno sazonado con adobo criollo tradicional y asado a la parrilla."
  },
  {
    id: "carne-bistek",
    name: "Carne en Bistek",
    category: "carnes",
    price: 33000,
    accompaniments: ["Yuca cocida", "Papa", "Arroz blanco"],
    description: "Carne en reducción criolla de tomate maduro, cebolla y especias del campo."
  },
  {
    id: "bistek-a-caballo",
    name: "Bistek a Caballo",
    category: "carnes",
    price: 34000,
    accompaniments: ["Huevo frito montado", "Yuca", "Papa", "Arroz"],
    description: "El clásico bistek criollo coronado con huevo frito de yema tierna."
  },
  {
    id: "chuleta-cerdo",
    name: "Chuleta de Cerdo Dorada",
    category: "carnes",
    price: 36000,
    accompaniments: ["Ensalada de la casa", "Papa a la francesa", "Arroz"],
    description: "Corte de cerdo generoso con dorado crocante en bordes y carne tierna."
  },
  {
    id: "carne-cerdo-asada",
    name: "Carne de Cerdo Asada",
    category: "carnes",
    price: 36000,
    accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"],
    description: "Filete de cerdo marinado con cítricos y hierbas criollas asado a la brasa."
  },
  {
    id: "chatoriana",
    name: "Chatoriana de Cerdo",
    category: "carnes",
    price: 37000,
    accompaniments: ["Salsa especial de la casa", "Papa a la francesa", "Arroz"],
    description: "Receta exclusiva con adobo especiado y salsa cremosa criolla."
  },
  {
    id: "lomo-pina",
    name: "Lomo de Cerdo a la Piña",
    category: "carnes",
    price: 37000,
    accompaniments: ["Glaseado de piña agridulce", "Papa a la francesa", "Arroz"],
    description: "Contraste perfecto entre el ahumado de la carne y el dulce tropical de la piña."
  },
  {
    id: "lomo-naranja",
    name: "Lomo a la Naranja",
    category: "carnes",
    price: 37000,
    accompaniments: ["Reducción cítrica de naranja", "Papa a la francesa", "Arroz"],
    description: "Lomo suave bañado en salsa artesanal de naranja recién exprimida."
  },
  {
    id: "costilla-bbq",
    name: "Costilla de Cerdo BBQ",
    category: "carnes",
    price: 37000,
    accompaniments: ["Salsa BBQ ahumada", "Papa a la francesa", "Arroz"],
    description: "Costillar suave y jugoso caramelizado a fuego lento con salsa barbacoa artesanal.",
    featured: true,
    badge: "Recomendado",
  },
  {
    id: "costilla-ahumada",
    name: "Costilla de Cerdo Ahumada",
    category: "carnes",
    price: 36000,
    accompaniments: ["Ensalada fresca", "Papa a la francesa", "Arroz"],
    description: "Sabor profundo a humo de leña natural con carne que se desprende del hueso."
  },
  {
    id: "higado-asado",
    name: "Hígado Asado al Carbón",
    category: "carnes",
    price: 25000,
    accompaniments: ["Ensalada", "Papa salada", "Arroz"],
    description: "Filete de hígado tierno sellado a alta temperatura en parrilla."
  },
  {
    id: "higado-bistek",
    name: "Hígado en Bistek",
    category: "carnes",
    price: 25000,
    accompaniments: ["Yuca", "Papa", "Arroz blanco"],
    description: "Hígado preparado en guiso tradicional de cebolla y tomate campesino."
  },

  // --- POLLO ---
  {
    id: "pollo-entero-asado",
    name: "Pollo Entero Asado al Carbón",
    category: "pollo",
    price: 32000,
    accompaniments: ["Papa salada criolla", "Arepa caliente"],
    description: "Nuestra insignia desde el primer día: pollo marinado en receta secreta de 24 horas y dorado lentamente sobre carbón encendido.",
    featured: true,
    badge: "Insignia de la Casa",
  },
  {
    id: "medio-pollo-asado",
    name: "Medio Pollo Asado al Carbón",
    category: "pollo",
    price: 18000,
    accompaniments: ["Papa salada criolla", "Arepa caliente"],
    description: "Media porción de nuestro tradicional pollo dorado y jugoso."
  },
  {
    id: "cuarto-pollo-asado",
    name: "Cuarto de Pollo Asado",
    category: "pollo",
    price: 10000,
    accompaniments: ["Papa salada", "Arepa caliente"],
    description: "Pierna pernil o pechuga con ala, acompañado de papa salada."
  },
  {
    id: "bandeja-pollo-asado",
    name: "Bandeja Completa Pollo Asado",
    category: "pollo",
    price: 17000,
    accompaniments: ["Arroz", "Ensalada", "Papa salada", "Arepa"],
    description: "Porción de pollo asado con almuerzo completo criollo."
  },
  {
    id: "pollo-entero-broaster",
    name: "Pollo Entero Broaster",
    category: "pollo",
    price: 37000,
    accompaniments: ["Papa a la francesa crujiente"],
    description: "Apanado crujiente estilo broaster americano con textura ultra crocante."
  },
  {
    id: "medio-pollo-broaster",
    name: "Medio Pollo Broaster",
    category: "pollo",
    price: 20000,
    accompaniments: ["Papa a la francesa crujiente"],
    description: "Medio pollo apanado a presión con crocancia insuperable."
  },
  {
    id: "cuarto-pollo-broaster",
    name: "Cuarto de Pollo Broaster",
    category: "pollo",
    price: 12000,
    accompaniments: ["Papa a la francesa crujiente"],
    description: "Cuarto de pollo crocante ideal para una comida rápida e irresistible."
  },
  {
    id: "bandeja-pollo-broaster",
    name: "Bandeja con Pollo Broaster",
    category: "pollo",
    price: 19000,
    accompaniments: ["Arroz", "Ensalada", "Papa a la francesa"],
    description: "Bandeja balanceada con presa broaster crocante y acompañamientos."
  },
  {
    id: "chuleta-pollo",
    name: "Chuleta de Pollo Apanada",
    category: "pollo",
    price: 36000,
    accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"],
    description: "Milanesa de pechuga apanada en miga sazonada, dorada y crujiente."
  },
  {
    id: "pechuga-marinera",
    name: "Pechuga a la Marinera",
    category: "pollo",
    price: 44000,
    accompaniments: ["Mariscos salteados en salsa", "Papa a la francesa", "Arroz"],
    description: "Pechuga a la plancha cubierta por generosa salsa de mariscos."
  },
  {
    id: "pechuga-champinones",
    name: "Pechuga con Champiñones",
    category: "pollo",
    price: 37000,
    accompaniments: ["Salsa blanca de champiñones", "Papa a la francesa", "Arroz"],
    description: "Filete de pechuga tierna bañado en suave y cremosa salsa de champiñones."
  },
  {
    id: "pechuga-plancha",
    name: "Pechuga a la Plancha",
    category: "pollo",
    price: 36000,
    accompaniments: ["Ensalada fresca", "Papa a la francesa", "Arroz"],
    description: "Pechuga marinada a las finas hierbas y dorada a la plancha caliente."
  },
  {
    id: "pechuga-ranchera",
    name: "Pechuga Ranchera Gratinada",
    category: "pollo",
    price: 38000,
    accompaniments: ["Jamón", "Queso fundido", "Papa a la francesa", "Arroz", "Ensalada"],
    description: "Pechuga cubierta con jamón ahumado y abundante queso gratinado al horno."
  },
  {
    id: "pechuga-naranja",
    name: "Pechuga a la Naranja",
    category: "pollo",
    price: 37000,
    accompaniments: ["Salsa cítrica de naranja", "Papa a la francesa", "Arroz"],
    description: "Sabor fresco y aromático con reducción natural de zumo de naranja."
  },
  {
    id: "pechuga-pina",
    name: "Pechuga a la Piña",
    category: "pollo",
    price: 37000,
    accompaniments: ["Salsa de piña", "Papa a la francesa", "Arroz"],
    description: "Pechuga tierna combinada con notas dulces de piña caramelizada."
  },
  {
    id: "pollo-bechamel",
    name: "Pollo en Salsa Bechamel",
    category: "pollo",
    price: 37000,
    accompaniments: ["Salsa bechamel sedosa", "Papa a la francesa", "Arroz"],
    description: "Trozos de pechuga cocidos en salsa blanca cremosa tradicional."
  },
  {
    id: "sopa-menudencia",
    name: "Sopa de Menudencia Criolla",
    category: "pollo",
    price: 7000,
    accompaniments: ["Arepa caliente"],
    description: "Reconfortante caldo con papa criolla, cilantro fresco y menudencia de campo."
  },

  // --- PESCADO ---
  {
    id: "mojarra-frita",
    name: "Mojarra Frita Tradicional",
    category: "pescado",
    price: 35000,
    accompaniments: ["Ensalada fresca", "Patacón crocante / Papa", "Arroz con coco o blanco"],
    description: "Mojarra entera seleccionada, frita al punto exacto con piel crujiente y carne blanca suave.",
    featured: true,
    badge: "Típico del Huila",
  },
  {
    id: "bagre-salsa",
    name: "Bagre en Salsa Criolla",
    category: "pescado",
    price: 41000,
    accompaniments: ["Yuca tierna", "Papa al vapor", "Arroz blanco"],
    description: "Posta de bagre de río sudada en hogao criollo con leche de coco y cilantro.",
    badge: "Especial de Río"
  },
  {
    id: "bagre-frito",
    name: "Bagre Frito Crocante",
    category: "pescado",
    price: 41000,
    accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"],
    description: "Generosa posta de bagre sazonada y dorada al aceite bien caliente."
  },
  {
    id: "trucha-frita",
    name: "Trucha Frita Campesina",
    category: "pescado",
    price: 41000,
    accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"],
    description: "Trucha arcoíris abierta, frita a la plancha con ajo y especias naturales."
  },
  {
    id: "trucha-marinera",
    name: "Trucha a la Marinera",
    category: "pescado",
    price: 48000,
    accompaniments: ["Mariscos en salsa suave", "Papa a la francesa", "Arroz"],
    description: "Trucha gratinada cubierta con mixtura de mariscos en salsa criolla."
  },

  // --- ARROZ ---
  {
    id: "arroz-pollo",
    name: "Arroz con Pollo Criollo",
    category: "arroz",
    price: 28000,
    accompaniments: ["Papa a la francesa crocante"],
    description: "Arroz desgranado con verduras frescas campesinas y abundante pollo desmechado."
  },
  {
    id: "arroz-camarones",
    name: "Arroz con Camarones",
    category: "arroz",
    price: 31000,
    accompaniments: ["Papa a la francesa crocante"],
    description: "Arroz salteado al wok con camarones frescos, pimentón y aroma costeño."
  },
  {
    id: "arroz-chino",
    name: "Arroz Especial Estilo Chino",
    category: "arroz",
    price: 40000,
    accompaniments: ["Papa a la francesa crocante"],
    description: "Plato generoso salteado con carnes mixtas, raíces chinas, cebollín y salsa de soya."
  },

  // --- BEBIDAS ---
  {
    id: "limonada-panela",
    name: "Limonada de Panela Campesina",
    category: "bebidas",
    price: 4000,
    accompaniments: ["Limón fresco y panela"],
    description: "Tradicional aguapanela helada con zumo de limón recién exprimido (Fines de semana)."
  },
  {
    id: "limonada-natural",
    name: "Limonada Natural Helada",
    category: "bebidas",
    price: 4000,
    accompaniments: ["Hielo frappe"],
    description: "Refrescante limonada cítrica batida al momento."
  },
  {
    id: "jugo-naranja",
    name: "Jugo de Naranja 100% Natural",
    category: "bebidas",
    price: 4000,
    accompaniments: ["Sin azúcar añadida opcional"],
    description: "Naranjas dulces exprimidas al instante."
  },
  {
    id: "gaseosa-personal",
    name: "Gaseosa Personal",
    category: "bebidas",
    price: 5000,
    accompaniments: ["Coca-Cola, Postobón, Colombiana"],
    description: "Botella personal helada a elección."
  },
  {
    id: "gaseosa-15l",
    name: "Gaseosa Familiar 1.5 Litros",
    category: "bebidas",
    price: 8000,
    accompaniments: ["Ideal para compartir en mesa"],
    description: "Variedad de sabores familiares para acompañar el asado."
  },
  {
    id: "jugo-hit-1l",
    name: "Jugo Hit 1 Litro",
    category: "bebidas",
    price: 6000,
    accompaniments: ["Mora, Mango, Lulo, Frutas Tropicales"],
    description: "Envase familiar refrescante."
  }
];

const dishImageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/dishes/*.jpg',
  { eager: true }
);

function resolveDishImage(id: string): ImageMetadata | undefined {
  return dishImageModules[`../assets/dishes/${id}.jpg`]?.default;
}

export const MENU_ITEMS: Dish[] = MENU_ITEMS_RAW.map((item) => ({
  ...item,
  image: resolveDishImage(item.id)
}));
