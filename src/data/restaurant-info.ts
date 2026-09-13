// Dominio placeholder: este proyecto todavía no tiene dominio propio.
// Actualizar este único valor cuando se registre el dominio definitivo
// (hoy el sitio vive en un subdominio temporal de Vercel para pruebas en celular).
export const SITE_URL = "https://brasacriolla.com";

export interface ScheduleItem {
  days: string;
  hours: string;
}

/** days usa la numeración de Date#getDay (0 = domingo). Horas en formato 24h, zona America/Bogota. */
export interface OpeningHours {
  days: number[];
  opens: string;
  closes: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  neighborhood: string;
  city: string;
  department: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  phoneLandline: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  qualityPromiseTitle: string;
  qualityPromiseQuote: string;
  foundedYear: number;
  founders: string;
  motto: string;
  paymentMethods: string[];
  schedule: ScheduleItem[];
  openingHours: OpeningHours[];
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "La Brasa Criolla",
  tagline: "Asadero & Restaurante",
  description: "Asadero y restaurante en La Plata, Huila. Carnes al carbón, pollo dorado y comida criolla hecha al momento. Domicilios: (313) 359-3955 o pide online.",
  address: "Cra. 4 #6-64",
  neighborhood: "Barrio Páez",
  city: "La Plata",
  department: "Huila",
  country: "Colombia",
  phone: "+573133593955",
  phoneDisplay: "(313) 359-3955",
  phoneLandline: "(608) 837-1470",
  email: "brasacriolla@gmail.com",
  whatsapp: "573133593955",
  whatsappDisplay: "313 359 3955",
  whatsappDefaultMessage: "¡Hola La Brasa Criolla! Vengo de su página web y me gustaría consultar disponibilidad y hacer un pedido.",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=La+Brasa+Criolla,+Carrera+4+%23+6-64,+La+Plata,+Huila,+Colombia&t=&z=17&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=La+Brasa+Criolla,+Carrera+4+%23+6-64,+La+Plata,+Huila,+Colombia",
  qualityPromiseTitle: "ELABORADO AL INSTANTE CON VERDADERA LEÑA Y CARBÓN",
  qualityPromiseQuote: "Debido a que nuestros platos son elaborados en el momento en que usted los ordena, requerimos del tiempo necesario para garantizarle su frescura y auténtica calidad.",
  foundedYear: 1990,
  founders: "Familia Luengas Rueda (Elsa María Rueda Rueda & Rubén Luengas Rueda)",
  motto: "¡En La Plata no hay forasteros, todos somos plateños!",
  paymentMethods: [
    "Efectivo",
    "Tarjetas de Crédito y Débito",
    "Transferencias (Nequi / Daviplata / Bancolombia)"
  ],
  schedule: [
    { days: "Lunes", hours: "11:30 a.m. – 7:00 p.m." },
    { days: "Martes a Viernes", hours: "9:00 a.m. – 7:00 p.m." },
    { days: "Sábados y Domingos", hours: "8:30 a.m. – 9:00 p.m." },
    { days: "Festivos", hours: "10:00 a.m. – 2:30 p.m." }
  ],
  openingHours: [
    { days: [1], opens: "11:30", closes: "19:00" },
    { days: [2, 3, 4, 5], opens: "09:00", closes: "19:00" },
    { days: [6, 0], opens: "08:30", closes: "21:00" }
  ],
  socialLinks: [
    { name: "WhatsApp", url: "https://wa.me/573133593955", icon: "whatsapp" },
    { name: "Instagram", url: "https://www.instagram.com/restaurantelabrasacri0lla/", icon: "instagram" },
    { name: "Facebook", url: "https://www.facebook.com/Restaurantelabrasacriollalaplata/", icon: "facebook" }
  ]
};
