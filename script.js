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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 150);
                
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeItems.forEach(item => fadeObserver.observe(item));

    // 3. UI Polish: Sticky Nav & Timeline Progress
    const nav = document.querySelector('.editorial-nav');
    const timeline = document.querySelector('.timeline');

    const handleScroll = () => {
        // Sticky Nav
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Timeline Progress
        if (timeline) {
            const rect = timeline.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            if (rect.top < viewHeight && rect.bottom > 0) {
                const progress = Math.min(1, Math.max(0, (viewHeight - rect.top) / (rect.height + viewHeight * 0.5)));
                timeline.style.setProperty('--timeline-progress', progress);
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init state
});