$(function(){

  //humburger menu//
  $(".p-navBtn").on("click", function(){
       if($(this).hasClass("js-open")) {
           $(".c-navBtn").removeClass("js-open");
           $(".p-navBtn").removeClass("js-open");
           $(".p-nav--slide").removeClass("js-open");
       } else {
           // メニューを開いたら次回クリック時は閉じた状態になるよう設定
           $(".c-navBtn").addClass("js-open");
           $(".p-navBtn").addClass("js-open");
           $(".p-nav--slide").addClass("js-open");

       }
   });

//menu bgcolor control//
   $(window).scroll(function(){
     var about =$('.js-section--about').offset().top;
  if($(this).scrollTop()<about){
    $(".p-headerWrapper").removeClass("js-bgBlack");
  }else {
    $(".p-headerWrapper").addClass("js-bgBlack");
  }
});

//menu scroll//
  $('.js-siteLogo').click(function(){
  var about =$('.js-section--top').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  return false;
  });
  $('.js-menu--about').click(function(){
  var about =$('.js-section--about').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  return false;
  });
  $('.js-menu--services').click(function(){
  var about =$('.js-section--services').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  return false;
  });
  $('.js-menu--works').click(function(){
  var about =$('.js-section--works').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  return false;
  });
  $('.js-menu--contact').click(function(){
  var about =$('.js-section--contact').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-nav--slide").removeClass("js-open");
  return false;
  });


});
