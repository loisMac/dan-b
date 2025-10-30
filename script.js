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

const form = document.querySelector(".contact-form");
const statusMsg = document.getElementById("form-status");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      statusMsg.textContent = "Thanks for reaching out — your message has been sent!";
      statusMsg.classList.add("success");
      form.reset();
    } else {
      statusMsg.textContent = "Oops — something went wrong. Please try again.";
      statusMsg.classList.add("error");
    }
  } catch (error) {
    statusMsg.textContent = "There was a problem sending your message.";
    statusMsg.classList.add("error");
  }
});
