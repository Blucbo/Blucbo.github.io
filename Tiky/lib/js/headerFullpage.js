$(document).ready(function () {

var check = true;
setTimeout(function(){
  $("#fullpage").fullpage({

      autoScrolling: true,
      touchSensitivity: 0,
      anchors: ['1Page', '2Page', '3Page', '4Page', '5Page', '6Page', '7Page', '8Page'],
      menu: '#myMenu',
      onLeave: function (i, ni, d) {
          if (ni == 1) {
              check = true;
              $("#myMenu").fadeOut(500);
              $(".header-name").fadeOut(500);
              $(".copyright").fadeOut(500);
          } else {
              check = false;
              $(".header-name").fadeIn(500);
              $("#myMenu").fadeIn(500);
              $(".copyright").fadeIn(500);
          }
      },
      // onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
      //     let amout;
      //     let count;
      //     //var leavingSlide = $(this);
      //     count = $('.number');
      //     let indSlid = nextSlideIndex;
      //     amount = $('.slide').length;
      //
      //     //count.text('indSlid + 1='+ (indSlid+1) + 'slideIndex =' + slideIndex+ ' / nextSlideIndex ='+nextSlideIndex + '/index = ' + index);
      //     // updating counter
      //      count.text((indSlid+1) + '/' + amount);
      //
      // }
  });
},50);

/*Humburger*/
$( ".cross, .menu" ).hide();

$( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $(".left-mid-button, .bottom-mid-button, .btn-right").fadeOut(200);
    $("#myMenu, .header-name, .allbum-name, h2.allbum-name + p").hide();
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    $(".copyright").show();
  });
});

$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $(".left-mid-button, .bottom-mid-button, .btn-right").fadeIn(200);
    $( ".hamburger, .allbum-name, h2.allbum-name + p" ).show();
    if(check){
      $(".copyright").hide();
    } else {
      $("#myMenu, .header-name").show();
    }
  });
});
});
