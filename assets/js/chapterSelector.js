const chapterTitle = document.getElementById('chapterTitle')
let activeChapter = 'Chapter1';
const sidebarLinks = document.querySelectorAll('.sidebar a');
const content = document.getElementById('chapterContent')
const defualtChapter = 'Chapter 1'
const getDefualtContent = chapterContent.filter((contentDefualt)=> contentDefualt.chapter === defualtChapter)
const activeCri = document.querySelectorAll('#checkDot')
if (sidebarLinks) {
    chapterTitle.innerHTML=defualtChapter
    content.innerHTML = getDefualtContent.map((defualtcontent)=>defualtcontent.content)
    sidebarLinks[0].style.fontWeight='bold'
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            sidebarLinks.forEach(l => l.style.fontWeight = 'normal');
            link.style.fontWeight = 'bold';
            const modifedHref = href.replace('#', '')
            const getChapter = chapterContent.filter((chapter) => chapter.chapter === modifedHref)
            chapterTitle.innerHTML = getChapter.map((title) => title.chapter)
            content.innerHTML = getChapter.map((content) => content.content)
            activeCri.forEach()
        });
    });
}
/* Still in Devlopment */

/*New code under contruction */
