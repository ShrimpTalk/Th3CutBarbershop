// script.js for Th3 Cut Barbershop website

// Wait for DOM to load
// script.js for Th3 Cut Barbershop website

document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Toggle mobile navigation
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Smooth scroll without altering the URL or adding history entries
    document.querySelectorAll('a[data-scroll]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const id = href.slice(1);
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Keep the URL clean and avoid adding a new history entry
                    history.replaceState(null, '', window.location.pathname);
                    // Close mobile menu if open
                    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
                }
            }
        });
    });
});