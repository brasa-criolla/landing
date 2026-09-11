# 🔥 La Brasa Criolla — Landing Page Oficial

> **Asadero & Restaurante** — Sabor auténtico al carbón, pollo dorado en su punto y cocina criolla tradicional elaborada al instante en **La Plata, Huila, Colombia**.

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.12.0-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)

---

## 📌 Tabla de Contenidos

1. [Visión General](#-visión-general)
2. [Stack Tecnológico](#-stack-tecnológico)
3. [Requisitos Previos](#-requisitos-previos)
4. [Guía de Instalación Rápida](#-guía-de-instalación-rápida)
5. [Modos de Ejecución](#-modos-de-ejecución)
6. [Scripts Disponibles](#-scripts-disponibles)
7. [Estructura del Proyecto](#-estructura-del-proyecto)
8. [Personalización y Contenido](#-personalización-y-contenido)
9. [Sistema de Diseño](#-sistema-de-diseño)
10. [Compilación y Despliegue](#-compilación-y-despliegue)

---

## 🍗 Visión General

Este repositorio contiene la **Landing Page oficial de alta conversión** para el restaurante **La Brasa Criolla**. Diseñada para ofrecer una experiencia rápida, moderna y apetitosa inspirada en sistemas visuales *fast-casual* de clase mundial (disciplina cromática de Chipotle + calidez del asado colombiano).

### ✨ Funcionalidades Destacadas
- **🚀 Rendimiento y Cero Bloqueo:** Construido sobre Astro 7 con arquitectura de islas y carga estática ultrarrápida.
- **📱 Menú Gastronómico Interactivo:** Filtrado instantáneo por categorías (*Todos, Carnes, Pollo, Pescado, Arroces, Bebidas*) con visualización de precios en COP, ingredientes y acompañamientos.
- **💬 Conversión Directa a WhatsApp:** Botones dinámicos de pedido en cada plato y botón flotante con mensajes precargados para agilizar la atención.
- **📍 Información de Ubicación y Horarios:** Sección completa con dirección exacta (Cra. 4 #6-64), horarios semanales y mapa interactivo integrado de Google Maps.
- **🎯 SEO & OpenGraph:** Metadatos estructurados, tarjetas de Twitter y OpenGraph optimizados para compartir por WhatsApp y redes sociales.
- **🎨 Tokens de Diseño Precisos:** Paleta de carbón tostado (`#451400`), crema suave (`#FCF9EC`), rojos de fuego, regla geométrica de 4px y tipografía editorial (`Bebas Neue` + `Nunito`).

---

## 🛠 Stack Tecnológico

| Componente | Tecnología | Propósito |
|---|---|---|
| **Framework Web** | [Astro v7](https://astro.build/) | Generador de sitios estáticos de alto rendimiento y arquitectura modular |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/vite` | Utility-first CSS moderno configurado mediante `@theme` |
| **Tipografía** | [Google Fonts](https://fonts.google.com/) | `Bebas Neue` (titulares gastronómicos) y `Nunito` (cuerpo y UI) |
| **Optimización de Imágenes** | [Sharp](https://sharp.pixelplumbing.com/) | Compresión y renderizado de imágenes de alta fidelidad |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) | Tipado estricto para datos del menú e información de contacto |
| **Gestor de Paquetes** | [pnpm](https://pnpm.io/) (o `npm`) | Gestión rápida y eficiente de dependencias |

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

1. **Node.js**: Versión **`>= 22.12.0`** (Requerida según `package.json`).
   ```bash
   node -v
   ```
2. **Gestor de paquetes**: Se recomienda **`pnpm`** (versión 9 o superior) o en su defecto **`npm`**:
   ```bash
   # Para instalar pnpm globalmente si no lo tienes:
   npm install -g pnpm
   ```
3. **Git**: Para clonar y versionar el repositorio.

---

## 🚀 Guía de Instalación Rápida

Sigue estos pasos para poner el proyecto en marcha en tu máquina local:

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/brasa-criolla-project.git
cd brasa-criolla-project/landing
```

### 2. Instalar Dependencias
Ejecuta con **pnpm** (recomendado):
```bash
pnpm install
```
*(O si prefieres usar **npm**)*:
```bash
npm install
```

### 3. Iniciar el Servidor de Desarrollo
```bash
pnpm dev
```
*(Con npm: `npm run dev`)*

### 4. Abrir en el Navegador
Abre tu navegador en la siguiente dirección:
👉 **[http://localhost:4321](http://localhost:4321)**

---

## ⚙️ Modos de Ejecución

El proyecto soporta dos formas de ejecución local:

### Opción A: Modo Estándar (Interactiva en consola)
Muestra los logs en vivo y se detiene pulsando `Ctrl + C`:
```bash
pnpm dev
# o
npm run dev
```

### Opción B: Modo Segundo Plano (Background Mode con Astro CLI)
Ideal para trabajar en la terminal sin bloquear el proceso:
```bash
# Iniciar en segundo plano
npx astro dev --background

# Consultar el estado del servidor
npx astro dev status

# Ver los logs en tiempo real
npx astro dev logs

# Detener el servidor
npx astro dev stop
```

---

## 📜 Scripts Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto (`/landing`):

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el entorno local de desarrollo en `http://localhost:4321` con Hot Reload. |
| `pnpm build` | Compila el sitio estático optimizado para producción en el directorio `/dist`. |
| `pnpm preview` | Levanta un servidor local para previsualizar los archivos compilados en `/dist`. |
| `pnpm astro [cmd]` | Ejecuta comandos nativos de la CLI de Astro (ej. `pnpm astro check`, `pnpm astro add`). |
| `npx astro dev --background` | Lanza el servidor de desarrollo en un proceso en segundo plano. |
| `npx astro dev stop` | Apaga el proceso de desarrollo en segundo plano. |

---

## 📂 Estructura del Proyecto

```text
landing/
├── public/                     # Archivos estáticos servidos directamente
│   ├── favicon.ico             # Ícono del sitio
│   └── favicon.svg             # Favicon vectorial
├── src/
│   ├── assets/                 # Logotipos y recursos gráficos vectoriales/raster
│   │   ├── brasa-criolla-logo-artguru.png  # Logo principal transparente
│   │   └── ...
│   ├── components/             # Componentes modulares Astro
│   │   ├── Navbar.astro        # Barra de navegación fija con horario y CTA
│   │   ├── Hero.astro          # Sección principal con impacto visual y claim
│   │   ├── HeroStrip.astro     # Franja de promesa de calidad y urgencia
│   │   ├── FeaturedGrid.astro  # Platos estrella recomendados
│   │   ├── MenuSection.astro   # Menú completo con pestañas de categoría
│   │   ├── DishCard.astro      # Tarjeta individual de plato (precio, chips, CTA)
│   │   ├── QualityCard.astro   # Bloque de tradición a la leña y carbón
│   │   ├── ContactSection.astro# Horarios, dirección, mapa embebido
│   │   ├── WhatsAppButton.astro# Botón flotante animado de WhatsApp
│   │   └── Footer.astro        # Pie de página, créditos y enlaces sociales
│   ├── data/                   # Fuentes de datos centralizadas (TypeScript)
│   │   ├── menu.ts             # Listado de platos, categorías, fotos y precios
│   │   └── restaurant-info.ts  # Teléfonos, WhatsApp, dirección, horarios y redes
│   ├── layouts/
│   │   └── Layout.astro        # Layout base: SEO, OpenGraph, fuentes y estilos
│   ├── styles/
│   │   └── global.css          # Tokens Tailwind CSS v4, fuentes y animaciones
│   └── pages/
│       └── index.astro         # Página principal que ensambla la landing
├── astro.config.mjs            # Configuración de Astro e integración con Vite/Tailwind
├── package.json                # Dependencias, scripts y versión de Node
├── pnpm-lock.yaml              # Bloqueo de versiones de pnpm
├── DESIGN.md                   # Documentación exhaustiva del Sistema de Diseño
└── README.md                   # Esta guía
```

---

## ✏️ Personalización y Contenido

Toda la información del negocio y del menú está desacoplada de la interfaz, facilitando cambios rápidos sin tocar código HTML:

### 1. Actualizar Datos del Restaurante
Edita el archivo [`src/data/restaurant-info.ts`](file:///c:/brasa-criolla-project/landing/src/data/restaurant-info.ts):
- Número de WhatsApp y mensaje automático predeterminado.
- Dirección física y enlace a Google Maps.
- Horarios de atención para cada día de la semana.
- Enlaces a redes sociales (Instagram, Facebook).

### 2. Modificar el Menú y Precios
Edita el archivo [`src/data/menu.ts`](file:///c:/brasa-criolla-project/landing/src/data/menu.ts):
- Agregar o retirar platos.
- Actualizar precios en pesos colombianos (`COP`).
- Modificar ingredientes, guarniciones incluidas o badges (`RECOMENDADO`, `ESPECIALIDAD`).
- Cambiar la URL de imagen de cada plato.

---

## 🎨 Sistema de Diseño

El proyecto implementa un sistema visual documentado en [`DESIGN.md`](file:///c:/brasa-criolla-project/landing/DESIGN.md):

- **Paleta Cromática:**
  - `Carbón Tostado` (`#451400`): Tinta estructural, textos principales y encabezados.
  - `Crema Suave` (`#FCF9EC`): Fondo orgánico y cálido.
  - `Rojo Fuego` (`#C60101`): Botones de acción principales y precios destacados.
  - `Dorado Maíz` (`#FDDC32`): Acentos de calidad y especialidades.
  - `Verde Criollo` (`#027D25`): Acciones directas hacia WhatsApp.
- **Geometría de 4px:** Todos los botones y tarjetas respetan esquinas con radio de `4px` (`rounded-sm`), evitando formas de píldora para preservar una estética moderna y contundente.
- **Tipografía:**
  - `Bebas Neue`: Titulares e identificadores en bloque mayúsculo.
  - `Nunito`: Lectura fluida para precios, descripciones y componentes de contacto.

---

## 🚢 Compilación y Despliegue

### Construir para Producción
Para generar el paquete final estático optimizado:
```bash
pnpm build
```
Los archivos finales se ubicarán en el directorio `/dist`.

### Probar el Build Localmente
Antes de desplegar, puedes verificar que todo funcione exactamente como en producción:
```bash
pnpm preview
```

### Opciones de Alojamiento Recomendadas
Al ser un sitio estático generado por Astro, puede desplegarse en cualquier proveedor con soporte estático:
- **Cloudflare Pages:** Conectar el repositorio, seleccionar framework *Astro* y comando `pnpm build`.
- **Vercel:** Despliegue automático detectando Astro.
- **Netlify:** Build command `pnpm build`, publish directory `dist`.
- **Servidor Nginx / Apache:** Copiar el contenido de `/dist` a la raíz pública del servidor web.

---

## 📄 Licencia

Desarrollado para **La Brasa Criolla — Asadero & Restaurante** (La Plata, Huila, Colombia).  
Todos los derechos reservados.
