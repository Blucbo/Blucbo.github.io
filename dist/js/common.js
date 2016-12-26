
$(document).ready(function() {
  if($(window).width()<=920 || $(window).width() >=1200 ){
  } else {
    let cout = 0;
    let legs= $(".leg");
    let intervalTimer = setInterval( ()=> {
     (cout == 6)? clearInterval(intervalTimer):$(legs[cout++]).show();
    }, 1000)
  }
});
