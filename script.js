// -----------------------------
//  Hamburger Menu
// -----------------------------
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// -----------------------------
//  Dark Mode Toggle
// -----------------------------
const themeBtn = document.getElementById('themeToggle');

// Apply saved theme instantly before paint
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

// Once DOM is ready, set correct button text
window.addEventListener('DOMContentLoaded', () => {
  if (savedTheme === 'dark') {
    themeBtn.textContent = 'light mode';
  } else {
    themeBtn.textContent = 'dark mode';
  }

  // Add class to allow CSS transitions after initial load
  document.documentElement.classList.add('theme-ready');
});

// Toggle dark/light mode
themeBtn?.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark');

  // Update button text
  themeBtn.textContent = isDark ? 'light mode' : 'dark mode';

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Trigger a repaint to ensure all sections update instantly
  requestAnimationFrame(() => {
    document.querySelectorAll('body, .hero, .page, .footer').forEach(el => {
      el.style.transform = 'translateZ(0)'; // triggers GPU repaint
      setTimeout(() => (el.style.transform = ''), 50);
    });
  });
});
