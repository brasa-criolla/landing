export interface ScheduleItem {
  days: string;
  hours: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  department: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  qualityPromiseTitle: string;
  qualityPromiseQuote: string;
  schedule: ScheduleItem[];
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "La Brasa Criolla",
  tagline: "Asadero & Restaurante",
  description: "El auténtico sabor del asado al carbón, pollo dorado en su punto y recetas tradicionales de la cocina criolla preparadas al momento.",
  address: "Cra. 4 #6-64",
  city: "La Plata",
  department: "Huila",
  country: "Colombia",
  phone: "+573133593955",
  phoneDisplay: "(313) 359-3955",
  whatsapp: "573133593955",
  whatsappDisplay: "313 359 3955",
  whatsappDefaultMessage: "¡Hola La Brasa Criolla! Vengo de su página web y me gustaría consultar disponibilidad y hacer un pedido.",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=La+Brasa+Criolla,+Carrera+4+%23+6-64,+La+Plata,+Huila,+Colombia&t=&z=17&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=La+Brasa+Criolla,+Carrera+4+%23+6-64,+La+Plata,+Huila,+Colombia",
  qualityPromiseTitle: "ELABORADO AL INSTANTE CON VERDADERA LEÑA Y CARBÓN",
  qualityPromiseQuote: "Debido a que nuestros platos son elaborados en el momento en que usted los ordena, requerimos del tiempo necesario para garantizarle su frescura y auténtica calidad.",
  schedule: [
    { days: "Lunes", hours: "11:30 a.m. – 7:00 p.m." },
    { days: "Martes a Viernes", hours: "9:00 a.m. – 7:00 p.m." },
    { days: "Sábados y Domingos", hours: "8:30 a.m. – 9:00 p.m." },
    { days: "Festivos", hours: "10:00 a.m. – 2:30 p.m." }
  ],
  socialLinks: [
    { name: "WhatsApp", url: "https://wa.me/573133593955", icon: "whatsapp" },
    { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" }
  ]
};
