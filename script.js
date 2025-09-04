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

  // Smooth scroll without altering the URL
  document.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', window.location.pathname);
          // Close the mobile menu if open
          if (nav && nav.classList.contains('open')) nav.classList.remove('open');
        }
      }
    });
  });
});
