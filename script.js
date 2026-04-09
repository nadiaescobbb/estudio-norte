/*
    ESTUDIO NORTE - INTERACTION LOGIC
*/

document.addEventListener('DOMContentLoaded', () => {

    // ─── Elements ──────────────────────────────────────────────
    const navbar      = document.getElementById('navbar');
    const reveals     = document.querySelectorAll('.reveal');
    const contactForm = document.getElementById('main-contact-form');
    const navLinks    = document.querySelectorAll('.nav-links a');
    const sections    = document.querySelectorAll('section[id], header[id]');

    // ─── Sticky Navbar ─────────────────────────────────────────
    function handleNavbar() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }

    // ─── Scroll Reveal ─────────────────────────────────────────
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target); // fire once
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    reveals.forEach(el => revealObserver.observe(el));

    // ─── Active Nav Link on Scroll ─────────────────────────────
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle(
                            'active',
                            link.getAttribute('href') === `#${id}`
                        );
                    });
                }
            });
        },
        { threshold: 0.4 }
    );

    sections.forEach(sec => sectionObserver.observe(sec));

    // ─── Smooth Scroll ─────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();

            const headerOffset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // ─── Scroll handler ────────────────────────────────────────
    window.addEventListener('scroll', handleNavbar, { passive: true });
    handleNavbar(); // run on init

    // ─── Form Validation & Submission ──────────────────────────
    if (!contactForm) return;

    const fields = {
        name:    { el: document.getElementById('name'),    errorEl: document.getElementById('name-error'),    validate: v => v.trim().length >= 2 ? '' : 'Por favor ingresé su nombre completo.' },
        email:   { el: document.getElementById('email'),   errorEl: document.getElementById('email-error'),   validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Ingresé un email válido.' },
        message: { el: document.getElementById('message'), errorEl: document.getElementById('message-error'), validate: v => v.trim().length >= 20 ? '' : 'La descripción debe tener al menos 20 caracteres.' },
    };

    const submitBtn    = document.getElementById('submit-btn');
    const formFeedback = document.getElementById('form-feedback');

    function showFieldError(key, message) {
        const { el, errorEl } = fields[key];
        if (message) {
            el.classList.add('has-error');
            errorEl.textContent = message;
            errorEl.classList.add('visible');
        } else {
            el.classList.remove('has-error');
            errorEl.textContent = '';
            errorEl.classList.remove('visible');
        }
    }

    // Validate on blur — real-time feel without being intrusive
    Object.entries(fields).forEach(([key, field]) => {
        field.el.addEventListener('blur', () => {
            const error = field.validate(field.el.value);
            showFieldError(key, error);
        });

        // Clear error as user types after first blur
        field.el.addEventListener('input', () => {
            if (field.el.classList.contains('has-error')) {
                const error = field.validate(field.el.value);
                showFieldError(key, error);
            }
        });
    });

    function validateAll() {
        let isValid = true;
        Object.entries(fields).forEach(([key, field]) => {
            const error = field.validate(field.el.value);
            showFieldError(key, error);
            if (error) isValid = false;
        });
        return isValid;
    }

    function setFeedback(message, type) {
        formFeedback.textContent = message;
        formFeedback.className = `form-feedback ${type}`;
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear any previous feedback
        setFeedback('', '');

        if (!validateAll()) {
            // Focus first invalid field
            const firstInvalid = Object.values(fields).find(f => f.el.classList.contains('has-error'));
            if (firstInvalid) firstInvalid.el.focus();
            return;
        }

        // Disable & show loading
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando…';

        try {
            // Simulate async API call (replace with real endpoint)
            await new Promise(resolve => setTimeout(resolve, 1600));

            // Success state
            contactForm.reset();
            Object.keys(fields).forEach(key => showFieldError(key, ''));
            setFeedback('Consulta enviada. Le responderemos dentro de las próximas 24 horas hábiles.', 'success');

        } catch (err) {
            setFeedback('Hubo un error al enviar. Por favor intente nuevamente o contáctenos por WhatsApp.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

});