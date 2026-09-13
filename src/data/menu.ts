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
  { id: 'carnes', name: 'Carnes', shortName: 'Carnes', shortDescription: 'Res, cerdo e hígado con sus acompañamientos', icon: 'lucide:beef' },
  { id: 'pollo', name: 'Pollo', shortName: 'Pollo', shortDescription: 'Pollo asado, broaster, pechugas y sopa de menudencia', icon: 'lucide:drumstick' },
  { id: 'pescado', name: 'Pescados', shortName: 'Pescados', shortDescription: 'Bagre, mojarra y trucha', icon: 'lucide:fish' },
  { id: 'arroz', name: 'Arroces', shortName: 'Arroces', shortDescription: 'Arroz con pollo, arroz chino y arroz con camarones', icon: 'lucide:soup' },
  { id: 'bebidas', name: 'Bebidas', shortName: 'Bebidas', shortDescription: 'Jugos naturales, limonadas, gaseosas y agua', icon: 'lucide:cup-soda' }
];

export interface Dish {
  id: string;
  name: string;
  category: MenuCategory;
  /** Sin precio confirmado por el restaurante se muestra "Consultar". */
  price?: number;
  accompaniments: string[];
  /** Días en que se vende, cuando no es todos los días. */
  availability?: string;
  featured?: boolean;
  image?: ImageMetadata;
}

// Carta vigente entregada por el dueño (septiembre de 2026).
const MENU_ITEMS_RAW: Omit<Dish, 'image'>[] = [
  // --- CARNES ---
  { id: "picada-mixta", name: "Picada Mixta", category: "carnes", price: 61000, accompaniments: ["Carne de res", "Cerdo", "Pollo", "Chorizo", "Salchicha", "Patacón", "Papa a la francesa"], featured: true },
  { id: "carne-res-asada", name: "Carne de Res Asada", category: "carnes", price: 36000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "carne-bistek", name: "Carne en Bistek", category: "carnes", price: 36000, accompaniments: ["Yuca", "Papa", "Arroz"] },
  { id: "bistek-a-caballo", name: "Bistek a Caballo", category: "carnes", price: 37000, accompaniments: ["Yuca", "Papa", "Arroz", "Huevo"] },
  { id: "churrasco", name: "Churrasco", category: "carnes", price: 41000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "chuleta-cerdo", name: "Chuleta de Cerdo", category: "carnes", price: 39000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"], featured: true },
  { id: "carne-cerdo-asada", name: "Carne de Cerdo Asada", category: "carnes", price: 39000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "chatoriana", name: "Chatoriana", category: "carnes", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "lomo-pina", name: "Lomo a la Piña", category: "carnes", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "lomo-naranja", name: "Lomo a la Naranja", category: "carnes", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "costilla-bbq", name: "Costilla de Cerdo BBQ", category: "carnes", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "costilla-ahumada", name: "Costilla de Cerdo Ahumada", category: "carnes", price: 39000, accompaniments: ["Papa a la francesa", "Arroz", "Ensalada"] },
  { id: "higado-asado", name: "Hígado Asado", category: "carnes", price: 28000, accompaniments: ["Ensalada", "Papa salada", "Arroz"] },
  { id: "higado-bistek", name: "Hígado en Bistek", category: "carnes", price: 28000, accompaniments: ["Yuca", "Papa", "Arroz"] },

  // --- POLLO ---
  { id: "chuleta-pollo", name: "Chuleta de Pollo", category: "pollo", price: 39000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "pechuga-marinera", name: "Pechuga a la Marinera", category: "pollo", price: 47000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "pechuga-champinones", name: "Pechuga con Champiñones", category: "pollo", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "pechuga-plancha", name: "Pechuga a la Plancha", category: "pollo", price: 39000, accompaniments: ["Papa a la francesa", "Arroz", "Ensalada"] },
  { id: "pechuga-ranchera", name: "Pechuga Ranchera", category: "pollo", price: 41000, accompaniments: ["Jamón", "Queso", "Papa a la francesa", "Arroz", "Ensalada"] },
  { id: "pechuga-naranja", name: "Pechuga a la Naranja", category: "pollo", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "pechuga-pina", name: "Pechuga a la Piña", category: "pollo", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "pollo-entero-asado", name: "Pollo Entero Asado", category: "pollo", price: 34000, accompaniments: ["Papa salada", "Arepa"], featured: true },
  { id: "medio-pollo-asado", name: "Medio Pollo Asado", category: "pollo", price: 20000, accompaniments: ["Papa salada", "Arepa"] },
  { id: "cuarto-pollo-asado", name: "Cuarto de Pollo Asado", category: "pollo", price: 12000, accompaniments: ["Papa salada", "Arepa"] },
  { id: "bandeja-pollo-asado", name: "Bandeja con Pollo Asado", category: "pollo", price: 19000, accompaniments: ["Ensalada", "Papa salada", "Arroz"] },
  { id: "pollo-entero-broaster", name: "Pollo Entero Broaster", category: "pollo", price: 39000, accompaniments: ["Papa a la francesa"] },
  { id: "medio-pollo-broaster", name: "Medio Pollo Broaster", category: "pollo", price: 22000, accompaniments: ["Papa a la francesa"] },
  { id: "cuarto-pollo-broaster", name: "Cuarto de Pollo Broaster", category: "pollo", price: 14000, accompaniments: ["Papa a la francesa"] },
  { id: "bandeja-pollo-broaster", name: "Bandeja con Pollo Broaster", category: "pollo", price: 21000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "pollo-bechamel", name: "Pollo en Salsa Bechamel", category: "pollo", price: 40000, accompaniments: ["Papa a la francesa", "Arroz"] },
  { id: "sopa-menudencia", name: "Sopa de Menudencia", category: "pollo", price: 10000, accompaniments: [] },

  // --- PESCADO ---
  { id: "bagre-salsa", name: "Bagre en Salsa", category: "pescado", price: 44000, accompaniments: ["Papa", "Yuca", "Arroz"] },
  { id: "bagre-frito", name: "Bagre Frito", category: "pescado", price: 44000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "mojarra-frita", name: "Mojarra Frita", category: "pescado", price: 38000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "trucha-frita", name: "Trucha Frita", category: "pescado", price: 44000, accompaniments: ["Ensalada", "Papa a la francesa", "Arroz"] },
  { id: "trucha-marinera", name: "Trucha a la Marinera", category: "pescado", price: 51000, accompaniments: ["Papa a la francesa", "Arroz"] },

  // --- ARROZ ---
  { id: "arroz-pollo", name: "Arroz con Pollo", category: "arroz", price: 31000, accompaniments: ["Papa a la francesa"], featured: true },
  { id: "arroz-chino", name: "Arroz Chino", category: "arroz", price: 43000, accompaniments: ["Papa a la francesa"] },
  { id: "arroz-camarones", name: "Arroz con Camarones", category: "arroz", price: 34000, accompaniments: ["Papa a la francesa"] },

  // --- BEBIDAS (precios pendientes de confirmar con el restaurante) ---
  { id: "limonada-natural", name: "Limonada Natural", category: "bebidas", accompaniments: [], availability: "Martes a viernes" },
  { id: "jugo-naranja", name: "Jugo de Naranja Natural", category: "bebidas", accompaniments: [], availability: "Martes a viernes" },
  { id: "limonada-panela", name: "Limonada de Panela", category: "bebidas", accompaniments: [], availability: "Sábados y domingos" },
  { id: "gaseosa-personal", name: "Gaseosa Personal", category: "bebidas", accompaniments: [] },
  { id: "gaseosa-15l", name: "Gaseosa 1,5 Litros", category: "bebidas", accompaniments: [] },
  { id: "jugo-hit-1l", name: "Jugo Hit", category: "bebidas", accompaniments: [] },
  { id: "agua", name: "Agua", category: "bebidas", accompaniments: [] }
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
