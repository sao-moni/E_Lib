var preScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset
  if (preScrollpos>currentScrollPos){
    document.getElementById("navbar").style.top="8px";
  }
  else{
    document.getElementById("navbar").style.top="-70px"
  }
  preScrollpos=currentScrollPos;
}