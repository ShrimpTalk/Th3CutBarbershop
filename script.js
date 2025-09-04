// script.js for Th3 Cut Barbershop website

// Wait for DOM to load
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
});
