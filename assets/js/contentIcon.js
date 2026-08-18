/*create vari */
const contentBtn = document.getElementById('contentBtn');
let getScrollPosition = window.pageYOffset
const contentBar= document.getElementById('contentBar')
window.addEventListener('scroll', (e)=>{
    e.preventDefault
    let getCurrentScrollPosition = window.pageYOffset
    if ( getCurrentScrollPosition<getScrollPosition){
        contentBar.style.bottom='1%'
        getScrollPosition=getCurrentScrollPosition
    }
    else{
        contentBar.style.bottom=''
    }
})
/*Still in devlopment */