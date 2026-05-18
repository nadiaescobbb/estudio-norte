document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = Math.min(index * 60, 420) + "ms";
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
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
    button.style.backgroundColor = isValid ? "oklch(34% 0.07 148)" : "oklch(42% 0.16 31)";

    if (status) {
      status.textContent = isValid
        ? "Consulta simulada correctamente. En produccion se enviaria al canal comercial definido."
        : "Faltan datos clave: nombre, WhatsApp y etapa actual.";
    }

    window.setTimeout(() => {
      button.textContent = original;
      button.style.backgroundColor = "";
      if (status) status.textContent = "Completa los campos clave para simular una consulta calificada.";
      if (isValid) form.reset();
    }, 2600);
  });
});
