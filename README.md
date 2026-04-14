# Estudio Norte — Gabinete Técnico de Arquitectura

> **Landing page institucional de alta conversión para un estudio de arquitectura orientado a dueños de pymes y comitentes industriales en Argentina.**

![Design System](https://img.shields.io/badge/Design-Editorial%20/%20Brutalist-black?style=flat-square) ![Stack](https://img.shields.io/badge/Stack-Tailwind_CDN_%2B_Vanilla_JS-c4391a?style=flat-square) ![Status](https://img.shields.io/badge/Status-Producción-success?style=flat-square)

---

## Objetivos del proyecto

Estudio Norte no es un portfolio genérico de arquitecto. Es un **Gabinete Técnico** (Activo de captación B2B) diseñado para resolver las objeciones críticas del mercado de la construcción e industrial argentino:

1. **Gestión de Riesgo Financiero** → Evaluación de viabilidad antes de la inversión inicial.
2. **Control Operativo** → Presencia técnica real en terreno y reportes de auditoría semanales.
3. **Escalabilidad Geográfica** → Sistema de nodos locales en Santa Fe, Córdoba y Mendoza.

Caso de estudio desarrollado por **Nadia Web**.

---

## Design System

El sitio utiliza un sistema editorial de precisión, construido con Tailwind CSS (CDN) y tipografías que proyectan autoridad técnica:

| Token | Valor | Uso |
|---|---|---|
| **Headline** | `Michroma` | Títulos arquitectónicos uppercase (Autoridad) |
| **Body** | `IBM Plex Sans 300–600` | Copy editorial, párrafos (Legibilidad) |
| **Data / Labels** | `IBM Plex Mono 400–500` | KPIs, etiquetas, metadata técnica (Precisión) |
| **Primary** | `#c4391a` | CTAs, acentos, badges (Alerta/Acción) |
| **Surface** | `#f9f9f9` | Fondo principal (Limpio/Editorial) |
| **On-Surface** | `#141414` | Texto principal (Contraste alto) |
| **Hairlines** | `rgba(20,20,20,0.1)` | Separadores de sección de 0.5px |

### Patrones de Conversión (CRO)

- **Sinceridad de Bolsillo** — Copy técnico que prioriza la rentabilidad sobre la estética.
- **Autoridad Protectora** — Tono de voz firme que posiciona al arquitecto como un auditor del capital del cliente.
- **Escasez Real** — Implementación de "Cupo Operativo" (1 obra por zona) para asegurar exclusividad.

---

## Estructura de la página

| Sección | Propósito B2B |
|---|---|
| **Hero** | Propuesta de valor directa: "Tu obra se termina. Sin excusas." |
| **Criterio Técnico** | Strip de KPIs operativos (Supervisión, Reportes, Logística). |
| **Sobre mí** | Pivot institucional como Gabinete Técnico y Director de Obra. |
| **Ejecuciones** | Portfolio priorizando naves industriales y casos de alta complejidad técnica. |
| **Metodología** | 3 etapas claras: Auditoría de Inversión, Ingeniería de Acopio y Dirección Rigurosa. |
| **Clientes** | Testimonios de autoridad (Ingenieros, Gerentes de Planta). |
| **Contacto** | Formulario de "Solicitud de Auditoría" con filtro de requerimiento técnico. |

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
