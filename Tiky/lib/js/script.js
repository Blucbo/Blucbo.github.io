$(document).ready(function () {
    $(".slid2").hide();
    /*loading*/
    $("#load").animate({
      width: 270
    }, {progress: function(a,n,r){
      $("#per").text(Math.round(n*100)+'%');
    }, duration: 2500, easing: 'easeInCubic', complete: function(){
      setTimeout(function(){
        $(".wrapper-loader").toggleClass('anim');
        $(".hamburger").show();
        $(".language").show();
        $(".wrapper-loader").css("zIndex", 0);
        $(".wrapper-loader").hide();
      },500);
    }});

/*about contact*/
  let bool = true;
  $(".left-mid-button, .btn-v").click(function(){
      if(bool){
         $(".left-text").text("close");
         bool = false;
      } else {
        $(".left-text").text("About");
        bool = true;
      }
     $(".slid").toggleClass("showSlid");
     $( ".info-page" ).toggleClass("hideTitle");
  });

  let bool1 = true;
  $(".btn-right, .btn-v2").click(function(){
      if(bool1){
         $(".slid2").animate({width: 'show'}, 1000);
         $(".right_text").text("close");
         bool1 = false;
      } else {
        $(".right_text").text("contact");
        $(".slid2").animate({width: 'hide'}, 1000)
        bool1 = true;
      }
     $(".slid2").toggleClass("showSlid2");
     $( ".info-page" ).toggleClass("hideTitle");
  });
});

function scrDownClicked() {
    $.fn.fullpage.moveSectionDown();
}
