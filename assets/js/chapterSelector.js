const chapterTitle = document.getElementById('chapterTitle')
let activeChapter = 'Chapter1';
const sidebarLinks = document.querySelectorAll('.sidebar a');


if (sidebarLinks) {
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      activeChapter = href ? href.replace('#', '') : 'Chapter1';
      sidebarLinks.forEach(l => l.style.fontWeight = 'normal');
      link.style.fontWeight = 'bold';
      alert(sidebarLinks)
    });
  });
}

/* Still in Devlopment */