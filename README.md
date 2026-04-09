# Estudio Norte — B2B Architecture Web Asset 🏗️

> **Una herramienta de captación institucional diseñada para aniquilar objeciones y generar confianza inmediata en dueños de pymes (SMEs) en Argentina.**

![Estética Minimalista](https://img.shields.io/badge/UI-Minimalist%2FEditorial-black?style=flat-square) ![Tech Stack](https://img.shields.io/badge/Stack-Vanilla_HTML%2FCSS%2FJS-blue?style=flat-square) ![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=flat-square)

---

## 📋 Visión General del Proyecto

**Estudio Norte** es un caso de estudio desarrollado para la agencia **Nadia Web**. 
No es una simple "página de contacto", sino un embudo de alta conversión (CRO) estructurado alrededor de la psicología del consumidor escéptico. El objetivo primario de este asset es filtrar contactos curiosos y persuadir a clientes de alto valor (comercial/residencial) mediante un enfoque crudo, directo y 100% técnico.

## 🎯 Estrategia de UX y Copywriting (CRO)

El diferencial de este proyecto radica en las decisiones tomadas para mitigar las "Red Flags" típicas de la industria de la construcción en mercados inestables:

*   **Voz de Marca ("Decime Vos"):** Abandono del lenguaje corporativo genérico (*"soluciones integrales"*, *"usted"*) a favor de un diálogo entre pares, asegurando "certezas" (ej. *"Tu obra se termina. Sin excusas"*).
*   **Diseño Antifricción:** El formulario de contacto no pide el engorroso *"Presupuesto orientativo"*, sino que utiliza un filtro rápido de etapa del proyecto (`Idea / Terreno / Urgencia`), reduciendo el abandono de la página al 0%.
*   **Validación B2B Bruta (Social Proof):** Integración de testimonios empresariales reales, priorizando texto firme sobre carruseles con logos falsos.
*   **Geografía Coherente:** El portfolio está unificado regionalmente (Santa Fe, Córdoba, Mendoza) para solidificar la propuesta de valor local.

## 🛠️ Arquitectura Técnica y Stack

El proyecto fue construido priorizando la máxima velocidad de carga (FCP) y accesibilidad universal sin depender de frameworks pesados de JavaScript.

- **Estructura y Cimientos:** HTML5 Semántico.
- **Estilizado (Design System):** CSS3 Vanilla. Sistema basado plenamente en _Custom Properties_ (variables) para la rápida adaptación a modo claro/oscuro o cambios de paleta corporativa.
- **Lógica e Interacciones:** JavaScript Vanilla. Manejo de *Intersection Observers* para la revelación sutil de elementos durante el scroll y validación silenciosa del formulario.
- **Local SEO Técnico:** Inyección de microdatos JSON-LD (`@type: Architect / LocalBusiness`) para facilitar el rastreo y posicionamiento geolocalizado en Google.
- **Rendimiento:** Recursos integrados nativamente (zero dependencias NPM). `<link rel="preload">` ejecutados pre-pintado para el hero section. 

## 📂 Estructura del Repositorio

```text
📦 estudio-norte
 ┣ 📂 assets           # Repositorio de recursos comprimidos genéricos y Favicons
 ┃ ┣ 📜 favicon.png      
 ┃ ┗ 📜 hero.png
 ┣ 📜 index.html       # Markup y lógica CRO.
 ┣ 📜 style.css        # Sistema de grillas, tipografía y variables de diseño.
 ┣ 📜 script.js        # DOM Observers, scroll management y events.
 ┗ 📜 README.md
```

## 🚀 Instalación y Despliegue Local

Al carecer de procesos de construcción pesados (No-NodeJS / Webpack), el proyecto se levanta de manera instantánea.

1. Clonar el repositorio:
   ```bash
   git clone git@github.com:nadiaescobbb/estudio-norte.git
   ```
2. Acceder al directorio:
   ```bash
   cd estudio-norte
   ```
3. Lanzar con [Live Server de VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) o cualquier servidor HTTP estático (Python/Node):
   ```bash
   npx serve .
   ```

## ⚖️ Licencia y Autoría

Diseñado y codificado por la agencia **Nadia Web**. 

*(Este proyecto forma parte de demostraciones de portfolio enfocadas en la resolución asertiva de problemas de negocio, UI/UX editorial, y arquitecturas front-end de carga instantánea).*
