$(document).ready(function () {

  $("#fullpage").fullpage({
      autoScrolling: true,
      touchSensitivity: 0,
      anchors: ['1Page', '2Page', '3Page', '4Page', '5Page', '6Page', '7Page'],
      menu: '#myMenu',
      onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
          let amout;
          let count;
          count = $('.number');
          let indSlid = nextSlideIndex;
          amount = $('.slide').length;
           count.text((indSlid+1) + '/' + amount);

      }
  });


/*Humburger*/
 $( ".cross, .menu" ).hide();
  $(".hamburger, .language, .copyright").show();
  let ctx = $('.number');
  let amount = $('.slide').length;
  ctx.text('1/' + amount);
  $( ".hamburger" ).click(function() {

    $( ".menu" ).slideToggle( "slow", function() {
      $(".number, .fp-controlArrow, .info-album").fadeOut(500);
      $(".header-name, .hamburger").hide();
      $( ".cross" ).show();
      $(".copyright").toggleClass( "copyright-effect");


      // $(".copyright").show();
    });
  });

  $( ".cross" ).click(function() {

    $( ".menu" ).slideToggle( "slow", function() {
      $(".header-name, .hamburger").show();
      $( ".cross" ).hide();
      $(".number, .fp-controlArrow, .info-album").fadeIn(500);
      $(".copyright").toggleClass( "copyright-effect");
      // $(".copyright").hide();
    });
  });
  $(".info-album").click(function(){
     $(".slid").toggleClass("showSlid");
     $(".number").fadeOut(500);
     setTimeout(function() {
       $(".copyright").toggleClass( "copyright-effect");
     },2000);
  });
  $(".header-name").fadeIn(500);
  $(document).on('click', '.slid', function(){
    $(".slid").toggleClass("showSlid");
    $(".number").fadeIn(700);
    setTimeout(function() {
      $(".copyright").toggleClass( "copyright-effect");
    },500);
  });
});

// $(document).ready(function () {
//   $( ".cross" ).click(function() {
//     $( ".menu" ).slideToggle( "slow", function() {
//       $( ".cross" ).hide();
//       $( ".hamburger" ).show();
//       // if(check){
//       //   $(".copyright").hide();
//       // }
//     });
//   });


  /**/
  // $( ".hamburger, .cross" ).click(function() {
  //   setTimeout(function(){
  //     $(".copyright").show(600);
  //   },500);
  // });
  /**/
  //
  // $(".hamburger, .language, .copyright").show();

// });
