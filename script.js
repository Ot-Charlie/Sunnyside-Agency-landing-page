const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
  const isOpen = nav.classList.contains('menu-open');
  menuIcon.setAttribute('aria-expanded', isOpen);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  // Check if click is outside both menu icon and nav
  if (!menuIcon.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('menu-open');
    menuIcon.setAttribute('aria-expanded', false);
  }
});