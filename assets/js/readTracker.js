const beforePosition = window.pageYOffset
const topScroll = window.pageYOffset
window.addEventListener('scroll',function(){
    const currentPosition = window.pageYOffset
    const totalHeight = document.documentElement.scrollHeight
    const viewPortHeight = document.documentElement.clientHeight
    const scrollable = totalHeight - viewPortHeight

    let getPercentage = scrollable > 0 ? Math.round((topScroll/scrollable)*100):0;

    if(currentPosition > beforePosition){
        document.getElementById('processBar').style.width=getPercentage;
    }
    console.log(getPercentage)
})