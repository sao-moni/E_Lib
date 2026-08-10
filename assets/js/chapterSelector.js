const chapterTitle = document.getElementById('chapterTitle')
let activeChapter = 'Chapter1';
function getChapter(){
    return chapterContent.filter(chapter => {
        const matchChapter = activeChapter === 'Chapter1' || chapterContent.chapter === activeChapter;
        return matchChapter
    })
}
function loadChapter(){
    const chapter = getChapter()
    
}