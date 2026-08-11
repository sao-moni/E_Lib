const menuBtn = document.getElementById('menu-Btn');
const menuPanel = document.getElementById('menu-panel');
/*check is both btn exist or not */
if (menuBtn && menuPanel) {
  menuBtn.addEventListener('click', function () {
    const isOpen = menuPanel.style.left === '0' || menuPanel.classList.contains('is-open');
    if (isOpen) {
      menuPanel.classList.remove('is-open');
      menuPanel.style.left = '-250px';
      return;
    }
    menuPanel.classList.add('is-open');
    menuPanel.style.display = 'flex';
    menuPanel.style.left = '0';
  });
  /*listen for the click outside menu panel */
  document.addEventListener('click', function (event) {
    const isClickInside = menuPanel.contains(event.target) || menuBtn.contains(event.target);
    if (!isClickInside && (menuPanel.style.left === '0' || menuPanel.classList.contains('is-open'))) {
      menuPanel.classList.remove('is-open');
      menuPanel.style.left = '-250px';
    }
  });
}

/* All work */