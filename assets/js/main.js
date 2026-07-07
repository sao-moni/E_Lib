var preScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset
  if (preScrollpos>currentScrollPos){
    document.getElementById("navbar").style.top="0px";
  }
  else{
    document.getElementById("navbar").style.top="-90px"
  }
  preScrollpos=currentScrollPos;
}