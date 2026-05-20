document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll("[data-reveal]");
  revealItems.forEach((item, index) => {
    item.style.animationDelay = Math.min(index * 70, 420) + "ms";
  });

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
        ? "Consulta simulada correctamente. En produccion se enviaria al canal comercial definido."
        : "Faltan datos clave: nombre, WhatsApp y etapa actual.";
    }

    window.setTimeout(() => {
      button.textContent = original;
      if (status) status.textContent = "Completa los campos clave para simular una consulta calificada.";
      if (isValid) form.reset();
    }, 2600);
  });
});
