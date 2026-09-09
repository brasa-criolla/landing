# Brasa Criolla — Sistema de Diseño (DESIGN.md)

**Versión:** 2.0 (Chipotle-Inspired Fast-Casual Dining System)  
**Proyecto:** Brasa Criolla — Asadero & Restaurante  
**Ubicación:** La Plata, Huila — Colombia  
**Objetivo:** Guía de identidad visual, tokens UI y componentes para la Landing Page y el Sistema Interno (POS/ERP).

---

## 1. Esencia & Personalidad de Marca

| Atributo | Significado en UI |
|---|---|
| **Cálido & Tradicional** | Fondos crema suaves (`#FCF9EC`), madera tostada, tipografía con carácter, sin frialdad corporativa. |
| **Apetitoso & Gastronómico** | Fotografías reales de asados al carbón, cortes jugosos y texturas de brasa. |
| **Limpio & Moderno** | Inspiración en la disciplina de **Chipotle Mexican Grill**: tinta estructural consistente, 0 saturación innecesaria. |
| **Directo & Accesible** | Precios claros en COP ($), acompañamientos visibles, navegación ágil y botón directo a WhatsApp. |

---

## 2. Paleta de Colores & Tokens

### 2.1 Colores Principales (Chipotle + Brasa Criolla)

| Token | Hex | Rol / Uso |
|---|---|---|
| `color-ink` | `#451400` | **Carbón Tostado (Burnt Umber)**: La tinta estructural de carga. Encabezados, textos principales, bordes de 1px y CTAs oscuros. |
| `color-ink-soft` | `#6B321B` | Tono marrón tostado cálido para degradados de brasa. |
| `color-ash` | `#786259` | Ceniza / Texto secundario, subtítulos y metadatos. |
| `color-hairline` | `#D4CBC7` | Líneas divisorias de 1px entre tarjetas y filas. |
| `color-bg-cream` | `#FCF9EC` | **Crema Suave**: Fondo principal del sitio. Cálido y orgánico. |
| `color-cream-muted`| `#F4EFE0` | Fondo de tarjetas secundarias, banners y chips de ingredientes. |
| `color-brand-red` | `#C60101` | **Rojo Fuego**: Botón principal de conversión, precios destacados y badges de urgencia. |
| `color-brand-gold`| `#FDDC32` | **Amarillo Maíz**: Estrellas de especialidad, acentos de iluminación y franja de calidad. |
| `color-brand-green`| `#027D25`| **Verde Criollo**: Botón flotante de WhatsApp y estados de frescura. |

---

## 3. Geometría & Regla de 4px

Siguiendo la estética de Chipotle:
- **Botones y CTAs:** Radio de esquina exacto de **4px (`rounded-sm`)**. Nada de botones en píldora redondeada.
- **Tarjetas de platos:** Radio de **4px** con marco fino de 1px (`#D4CBC7`).
- **Paneles destacados (Catering / Calidad):** Radio de **12px (`rounded-md`)** reservado exclusivamente para paneles amplios.

---

## 4. Tipografía (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
```

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| **Headings / Títulos** | `Bebas Neue`, sans-serif | 400 (Uppercase) | H1 Hero, nombres de secciones, categorías del menú. Bloque tipográfico con impacto visual. |
| **Body / UI** | `Nunito`, sans-serif | 400, 600, 700, 800 | Párrafos, ingredientes, precios en COP, botones, horarios y enlaces del footer. |

---

## 5. Componentes Clave

1. **Navbar:** Fijo con logo oficial transparente `brasa-criolla-logo-artguru.png`, links en mayúsculas y botón directo a WhatsApp.
2. **Hero:** Gran impacto fotográfico con degradado multicapa de carbón tostado `#451400`, claim de asado al carbón y doble CTA.
3. **Hero Strip:** Franja dorada de promesa de calidad y elaboración al instante.
4. **DishCard:** Tarjeta de menú con imagen, nombre en bloque, chips de acompañamientos incluidos, precio en $COP y botón directo de pedido.
5. **MenuCategoryTabs:** Filtros instantáneos en cliente (Todos, Carnes, Pollo, Pescado, Arroz, Bebidas).
6. **QualityCard:** Panel de tradición de leña y carbón vegetal.
7. **ContactSection:** Horarios de atención completos, dirección Cra. 4 #6-64 y mapa satelital interactivo.
8. **WhatsApp Floating Button:** Botón persistente abajo a la derecha con micro-pulso sutil.
