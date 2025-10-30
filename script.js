// script.js

// ----- Hamburger Menu -----
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// ----- Dark Mode Toggle -----
const themeBtn = document.getElementById('themeToggle');

// Load previous theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  if (themeBtn) themeBtn.textContent = 'light mode';
}

themeBtn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    const isDark = document.documentElement.classList.contains('dark');


  // Update button text
  themeBtn.textContent = isDark ? 'light mode' : 'dark mode';

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


  