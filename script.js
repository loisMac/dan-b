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

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  if (themeBtn) themeBtn.textContent = 'light mode';
} else {
  if (themeBtn) themeBtn.textContent = 'dark mode';
}

// Toggle dark/light mode
themeBtn?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');

  // Update button text
  themeBtn.textContent = isDark ? 'light mode' : 'dark mode';

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Force repaint of key sections (prevents "stuck dark middle" glitch)
  const repaintEls = document.querySelectorAll('body, .hero, .page, .footer');
  repaintEls.forEach(el => {
    el.style.display = 'none';
    el.offsetHeight; // trigger reflow
    el.style.display = '';
  });
});
