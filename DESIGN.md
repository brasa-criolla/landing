# Brasa Criolla — Sistema de Diseño (DESIGN.md)

**Versión:** 3.0 (Mobile-first · Carta de mesa)  
**Proyecto:** Brasa Criolla — Asadero & Restaurante  
**Ubicación:** La Plata, Huila — Colombia  
**Objetivo:** Guía de identidad visual, tokens UI y componentes para la Landing Page y la carta digital de mesa (NFC/QR).

---

## 1. Esencia & Personalidad de Marca

| Atributo | Significado en UI |
|---|---|
| **Cálido & Tradicional** | Fondos crema suaves (`#FCF9EC`), madera tostada, tipografía con carácter, sin frialdad corporativa. |
| **Apetitoso & Gastronómico** | Fotografías reales de asados al carbón, cortes jugosos y texturas de brasa. |
| **Limpio & Moderno** | Disciplina fast-casual: tinta estructural consistente, 0 saturación innecesaria. |
| **Directo & Accesible** | Precios claros en COP ($), acompañamientos visibles, navegación ágil y botón directo a WhatsApp. |

---

## 2. Paleta de Colores & Tokens

Definidos en `src/styles/global.css` (`@theme`), usar como clases de Tailwind (`text-ink`, `bg-cream`, `border-hairline`…).

| Token | Hex | Rol / Uso |
|---|---|---|
| `ink` | `#451400` | **Carbón Tostado**: encabezados, textos principales, precios, bordes de 1px y CTAs oscuros. |
| `ink-soft` | `#6B321B` | Texto largo sobre crema (descripción del plato). |
| `ash` | `#786259` | Texto secundario: acompañamientos, subtítulos y metadatos. |
| `hairline` | `#D4CBC7` | Líneas divisorias de 1px entre filas y tarjetas. |
| `cream` | `#FCF9EC` | Fondo principal del sitio. |
| `cream-muted` | `#F4EFE0` | Fondo de bloques secundarios y placeholders de imagen. |
| `brand-red` | `#C60101` | **Rojo Fuego**: CTA principal, eyebrows y estado "Cerrado". No se usa en precios. |
| `brand-gold` | `#FDDC32` | **Amarillo Maíz**: badges de plato, estado de apertura en el hero, acentos sobre fondo oscuro. |
| `brand-green` | `#027D25` | **Verde Criollo**: WhatsApp (botón flotante y "Pedir a domicilio"). |
| `open` | `#1A8A45` | Punto del estado "Abierto ahora". |

---

## 3. Geometría & Regla de 4px

- **Botones, chips y tarjetas:** radio de **4px** (`rounded-sm`). Nada de botones en píldora.
- **Paneles destacados (Tradición) y panel de detalle en escritorio:** radio de **12px** (`rounded-md`).
- **Áreas táctiles:** mínimo **44px** de alto en todo elemento tocable.

---

## 4. Tipografía

Las fuentes se alojan en el propio sitio con la API de fuentes de Astro (`fonts` en `astro.config.mjs`, componente `<Font>` en el layout). No hay peticiones a Google Fonts.

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| **Títulos** | Bebas Neue (`font-display`) | 400, mayúsculas | h1, h2, categorías, nombres de platos, botones grandes. |
| **Texto / UI** | Nunito (`font-body`) | 400, 600, 700, 800 | Párrafos, precios, acompañamientos, chips, enlaces. |

**Escala en móvil (no agregar tamaños nuevos):**

- Bebas Neue: **44** h1 · **36** h2 · **28** h3 / categorías / título del detalle · **22** nombre de plato · **20** botones y títulos del footer.
- Nunito: **16** párrafos y precios · **14** acompañamientos, chips y notas · **12** etiquetas en mayúscula (mínimo absoluto).
- Bebas Neue nunca por debajo de 20px ni para números de teléfono.

---

## 5. Componentes Clave

1. **Navbar** (home) / **CartaHeader** (`/carta`): header fijo; el de la carta muestra la mesa (`?mesa=7`) y el estado de apertura.
2. **Hero:** foto de fondo a baja resolución en móvil (va al 40% de opacidad), estado de apertura en vivo y doble CTA.
3. **OpenStatus:** "Abierto ahora · hasta las 7:00 p.m." calculado con la hora de Colombia a partir de `openingHours`. No detecta festivos.
4. **HeroStrip:** franja dorada de promesa de calidad.
5. **FeaturedGrid + DishTile:** platos destacados; carrusel horizontal en móvil, grilla en escritorio.
6. **MenuList + DishRow:** barra de categorías fija con resaltado de la sección actual y filas compactas (foto 88px, nombre, precio, acompañamientos).
7. **DishSheet:** detalle del plato en panel inferior (`<dialog>`); se cierra con ✕, tocando fuera o con el botón "atrás" del celular. En la home incluye "Pedir a domicilio por WhatsApp"; en `/carta` no.
8. **QualityCard:** panel de tradición de leña y carbón vegetal.
9. **ContactSection:** horarios, dirección y mapa de Google que se carga solo al tocarlo en móvil.
10. **WhatsApp flotante:** solo en la home.

## 6. Páginas

- **`/`**: landing para quien llega desde Google, Instagram o busca domicilio.
- **`/carta`**: carta de mesa. Destino de la tarjeta NFC/QR (`/carta?mesa=N`). Sin marketing, sin mapa y sin WhatsApp por plato.
