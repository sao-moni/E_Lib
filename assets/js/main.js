document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');

  // Mobile menu toggle
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Hide/reveal navbar on scroll up/down (consistent across pages)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = navbar.offsetHeight;

      // Scrolling down past the navbar height => hide
      if (currentScrollY > lastScrollY && currentScrollY > navbarHeight) {
        navbar.classList.add('is-hidden');
      } else {
        navbar.classList.remove('is-hidden');
      }

      lastScrollY = currentScrollY;
    });
  }
});

