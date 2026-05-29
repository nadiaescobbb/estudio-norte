document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll("[data-reveal]");
  revealItems.forEach((item, index) => {
    item.style.animationDelay = Math.min(index * 70, 420) + "ms";
  });

  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("primary-menu");

  if (nav && navToggle && navMenu) {
    const closeMenu = () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const form = document.getElementById("technical-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;

    requiredFields.forEach((field) => {
      const empty = field.type === "radio"
        ? !form.querySelector('input[name="' + field.name + '"]:checked')
        : !field.value.trim();

      if (empty) {
        isValid = false;
        field.setAttribute("aria-invalid", "true");
        field.closest("label")?.classList.add("field-error");
      } else {
        field.removeAttribute("aria-invalid");
        field.closest("label")?.classList.remove("field-error");
      }
    });

    const button = form.querySelector("button[type='submit']");
    const status = form.querySelector("#form-status");
    const original = button.textContent;

    button.textContent = isValid ? "Consulta registrada" : "Revisar datos";
    if (status) {
      status.textContent = isValid
        ? "Recibimos la etapa, tipo de obra y datos principales. El siguiente paso seria revisar documentacion disponible y coordinar una primera lectura."
        : "Faltan datos clave: nombre, WhatsApp y etapa actual.";
    }

    window.setTimeout(() => {
      button.textContent = original;
      if (status) status.textContent = "Completa etapa, ubicacion, urgencia y documentacion disponible para orientar mejor la primera respuesta.";
      if (isValid) form.reset();
    }, 2600);
  });
});
