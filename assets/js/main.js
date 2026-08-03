const menuBtn = document.getElementById('menu-Btn');
const menuPanel = document.getElementById('menu-panel');

if (menuBtn && menuPanel) {
  menuBtn.addEventListener('click', () => {
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

  document.addEventListener('click', (e) => {
    const isClickInside = menuPanel.contains(e.target) || menuBtn.contains(e.target);
    if (!isClickInside && (menuPanel.style.left === '0' || menuPanel.classList.contains('is-open'))) {
      menuPanel.classList.remove('is-open');
      menuPanel.style.left = '-250px';
    }
  });
}

const PER_PAGE = 30;

const categoryColors = {
  Technology: '#1a73e8',
  Philosophy: '#8e24aa',
  Science: '#00acc1',
  Leadership: '#e53935',
  Language: '#43a047',
  History: '#fb8c00',
  Other: '#6d4c41'
};

const cardGroup = document.getElementById('card-group');
const resultCount = document.getElementById('result-count');
const searchInput = document.querySelector('.search input');
const sidebarLinks = document.querySelectorAll('.sidebar a');
const paginationContainer = document.getElementById('pagination');

let activeCategory = 'All';
let searchQuery = '';
let currentPage = 1;

function getFilteredBooks() {
  return BOOKS.filter(book => {
    const matchCategory = activeCategory === 'All' || book.category === activeCategory;
    const matchSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
}

function renderBooks() {
  const filtered = getFilteredBooks();
  const totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;

  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const pageBooks = filtered.slice(start, end);

  resultCount.textContent = `Showing ${filtered.length} of ${BOOKS.length} books`;

  if (filtered.length === 0) {
    cardGroup.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:#888;">No books found.</div>';
    paginationContainer.innerHTML = '';
    return;
  }

  cardGroup.innerHTML = pageBooks.map(book => {
    const color = categoryColors[book.category] || '#6d4c41';
    const encodedTitle = encodeURIComponent(book.title);
    return `
      <div class="card">
        <img src="https://placehold.co/400x600/${color.replace('#', '')}/ffffff?text=${encodedTitle}" alt="${book.title}">
        <div class="card-content">
          <a href="#" class="read-now">Read now</a>
          <h2 class="card-title">${book.title}</h2>
        </div>
      </div>
    `;
  }).join('');

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let html = '';

  html += `<button class="page-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>
    <i class="fa-solid fa-chevron-left"></i> Prev
  </button>`;

  html += `<div class="page-indicator">Page ${currentPage} of ${totalPages}</div>`;

  html += `<button class="page-btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>
    Next <i class="fa-solid fa-chevron-right"></i>
  </button>`;

  paginationContainer.innerHTML = html;

  paginationContainer.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page);
      renderBooks();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    currentPage = 1;
    renderBooks();
  });
}

if (sidebarLinks) {
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      activeCategory = href ? href.replace('#', '') : 'All';
      if (activeCategory) {
        activeCategory = activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
      }
      sidebarLinks.forEach(l => l.style.fontWeight = 'normal');
      link.style.fontWeight = 'bold';
      currentPage = 1;
      renderBooks();
    });
  });
}

renderBooks();
