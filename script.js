document.addEventListener("DOMContentLoaded", () => {

    // 1. Form Validation
    const form = document.getElementById('technical-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const fields = [
                document.getElementById('name'),
                document.getElementById('email'),
                document.getElementById('message')
            ];

            const stageChecked = document.querySelector('input[name="stage"]:checked');
            const stageContainer = document.querySelector('.radio-pills');

            if (!stageChecked) {
                if (stageContainer) stageContainer.classList.add('has-error');
                isValid = false;
            } else {
                if (stageContainer) stageContainer.classList.remove('has-error');
            }

            fields.forEach(field => {
                if (!field) return;
                const group = field.closest('.f-group');
                const isEmpty = !field.value.trim();
                const isInvalidEmail = field.type === 'email' && !isEmpty && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);

                // message is optional — only validate if field has `required`
                if (field.required && (isEmpty || isInvalidEmail)) {
                    group.classList.add('has-error');
                    isValid = false;
                } else {
                    group.classList.remove('has-error');
                }
            });

            if (isValid) {
                const btn = form.querySelector('button[type="submit"]');
                const prev = btn.innerHTML;
                btn.innerHTML = "EXPEDIENTE CONFIRMADO";
                btn.style.backgroundColor = "#1C1C1C";

                setTimeout(() => {
                    btn.innerHTML = prev;
                    btn.style.backgroundColor = "";
                    form.reset();
                }, 3000);
            }
        });

        // Strip error state on remediation
        form.querySelectorAll('input, select, textarea').forEach(el => {
            el.addEventListener('input',  () => el.closest('.f-group').classList.remove('has-error'));
            el.addEventListener('change', () => el.closest('.f-group').classList.remove('has-error'));
        });
    }

    // 2. Intersection Observer — fade items in with stagger
    const fadeItems = document.querySelectorAll('.fade-item');

    const observerOptions = {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    };

    let delayCounter = 0;
    let resetTimer   = null;

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delayCounter * 90);

                delayCounter++;
                fadeObserver.unobserve(entry.target);

                clearTimeout(resetTimer);
                resetTimer = setTimeout(() => { delayCounter = 0; }, 150);
            }
        });
    }, observerOptions);

    fadeItems.forEach(item => fadeObserver.observe(item));

});