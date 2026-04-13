# Estudio Norte — Gabinete Técnico de Arquitectura

> **Landing page institucional de alta conversión para un estudio de arquitectura orientado a dueños de pymes y comitentes privados en Argentina.**

![Design System](https://img.shields.io/badge/Design-Editorial%20/%20Brutalist-black?style=flat-square) ![Stack](https://img.shields.io/badge/Stack-Tailwind_CDN_%2B_Vanilla_JS-0ea5e9?style=flat-square) ![Status](https://img.shields.io/badge/Status-Producción-success?style=flat-square)

---

## Objetivos del proyecto

Estudio Norte no es un portfolio genérico de arquitecto. Es un **activo de captación B2B** diseñado para resolver las tres objeciones principales del mercado de la construcción argentino:

1. **"¿Se va a ir el presupuesto?"** → Garantía auditable de < 5% de desvío en cómputo de materiales.
2. **"¿Se va a demorar?"** → 100% de obras entregadas en término con cronograma público.
3. **"¿Y si el arquitecto desaparece?"** → Red de nodos técnicos locales con presencia física certificada.

Caso de estudio desarrollado por **Nadia Web**.

---

## Design System

El sitio utiliza un sistema editorial de precisión, construido con Tailwind CSS (CDN) y tipografías de alto contraste:

| Token | Valor | Uso |
|---|---|---|
| **Headline** | `Michroma` | Títulos arquitectónicos uppercase |
| **Body** | `IBM Plex Sans 300–600` | Copy editorial, párrafos |
| **Data / Labels** | `IBM Plex Mono 400–500` | KPIs, etiquetas, metadata técnica |
| **Primary** | `#a12001` | CTAs, acentos, badges |
| **Primary Container** | `#c4391a` | Headline accent, hover states |
| **Surface** | `#f9f9f9` | Fondo principal |
| **On-Surface** | `#1a1c1c` | Texto principal |
| **Hairlines** | `rgba(226,191,183,0.4)` | Separadores de sección |
| **Corners** | `0px` | Brutalismo: sin border-radius |

### Patrones visuales

- **Grid 12 columnas** — Layout `3 | 9` para label + contenido (patrón editorial)
- **Grayscale → Color** — Imágenes en escala de grises que revelan color en hover
- **Hairline borders** — Líneas de 0.5px como separadores de sección
- **Mono labels** — Etiquetas técnicas en `IBM Plex Mono` a 10px con tracking extendido

---

## Estructura de la página

| Sección | Propósito CRO |
|---|---|
| **Hero** | Headline de impacto + credencial profesional + CTA directo a WhatsApp |
| **Garantías** | Strip de KPIs duros (< 5%, 100%, USD 2.800) con copy auditable |
| **Sobre mí** | Posicionamiento como gabinete técnico, no freelancer |
| **Proyectos** | Portfolio en formato tabla — sin renders, datos reales |
| **Proceso** | 3 etapas con copy específico que elimina incertidumbre |
| **Clientes** | 2 testimonios B2B verificables con nombre y rol |
| **Contacto** | Formulario + datos de matrícula + línea directa WhatsApp |

---

## Stack técnico

```
HTML5 Semántico
├── Tailwind CSS v3 (CDN + config inline)
├── Google Fonts (Michroma, IBM Plex Sans, IBM Plex Mono)
├── Material Symbols Outlined
├── JSON-LD LocalBusiness Schema
└── Vanilla JS (form validation, scroll observers)
```

### SEO y datos estructurados

- `<meta description>` optimizada para búsqueda local
- JSON-LD `@type: LocalBusiness` con `areaServed`, `founder`, `geo`, contacto
- Heading hierarchy: single `<h1>`, `<h2>` por sección, `<h3>` para subsecciones
- Imágenes AVIF con `alt` descriptivo y `loading="lazy"`

---

## Estructura del repositorio

```
📦 estudio-norte
 ┣ 📂 assets/
 ┃ ┣ 🖼️ arqhero.avif         # Hero — retrato profesional
 ┃ ┣ 🖼️ arqfran.avif          # About — foto en obra
 ┃ ┣ 🖼️ casaresidencial.avif  # Portfolio asset
 ┃ ┣ 🖼️ IMG_4491.jpeg         # Recurso fotográfico
 ┃ ┗ 🖼️ favicon.png           # Favicon arquitectónico
 ┣ 📄 index.html              # Página completa (markup + Tailwind inline)
 ┣ 📄 style.css               # Legacy — design system anterior (CSS vanilla)
 ┣ 📄 script.js               # Form validation + Intersection Observers
 ┗ 📄 README.md
```

---

## Instalación local

Sin dependencias. Sin build. Abrir y servir.

```bash
git clone git@github.com:nadiaescobbb/estudio-norte.git
cd estudio-norte
npx -y serve .
```

O usar Live Server en VS Code.

---

## Decisiones técnicas relevantes

| Decisión | Fundamento |
|---|---|
| **Tailwind CDN en vez de build** | Proyecto single-page sin routing. El CDN elimina fricción de deploy y permite config inline. |
| **Todo en un solo HTML** | Zero latencia de carga. El CSS crítico viaja en el mismo documento. |
| **WhatsApp como canal principal** | En Argentina el 93% de la comunicación comercial pasa por WhatsApp. El CTA no pierde tiempo con emails. |
| **Imágenes AVIF** | 70-80% menos peso que JPEG con la misma calidad percibida. |
| **Sin framework JS** | No hay estado reactivo que manejar. Vanilla JS para observers y validación es suficiente. |

---

## Licencia y autoría

Diseñado y desarrollado por **Nadia Web**.

Este proyecto forma parte del portfolio de la agencia, enfocado en resolución de problemas de negocio mediante UI/UX editorial y arquitecturas frontend de carga instantánea.
