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
          field.closest("label")?.classList.add("ring-1", "ring-red-700");
        } else {
          field.closest("label")?.classList.remove("ring-1", "ring-red-700");
        }
      });

      const button = form.querySelector("button[type='submit']");
      const original = button.textContent;
      button.textContent = isValid ? "Consulta registrada" : "Revisá los datos";
      button.style.backgroundColor = isValid ? "#2f4f3f" : "#8f2b22";

      window.setTimeout(() => {
        button.textContent = original;
        button.style.backgroundColor = "";
        if (isValid) form.reset();
      }, 2600);
    });
  }
});