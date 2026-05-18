document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("technical-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        const empty = field.type === "radio"
          ? !form.querySelector(`input[name="${field.name}"]:checked`)
          : !field.value.trim();

        if (empty) {
          isValid = false;
          field.setAttribute("aria-invalid", "true");
          field.closest("label")?.classList.add("ring-1", "ring-red-700");
        } else {
          field.removeAttribute("aria-invalid");
          field.closest("label")?.classList.remove("ring-1", "ring-red-700");
        }
      });

      const button = form.querySelector("button[type='submit']");
      const status = form.querySelector("#form-status");
      const original = button.textContent;
      button.textContent = isValid ? "Consulta registrada" : "Revisá los datos";
      if (status) status.textContent = isValid ? "Consulta simulada correctamente. En producción se enviaría al canal comercial definido." : "Faltan datos clave: nombre, WhatsApp y etapa actual.";
      button.style.backgroundColor = isValid ? "oklch(38% .055 155)" : "oklch(42% .11 34)";

      window.setTimeout(() => {
        button.textContent = original;
        button.style.backgroundColor = "";
        if (status) status.textContent = "Completá los campos clave para simular una consulta calificada.";
        if (isValid) form.reset();
      }, 2600);
    });
  }
});