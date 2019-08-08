$(document).ready(function() {

  //mobile menu button
  $('.nav-opener').on('click', function(e) {
    e.preventDefault();

    if ($(document).width() < 1200) {
      $(this).toggleClass('nav-active')
        .nextAll('.main-nav-wrapper').find('.nav').slideToggle(300);
        $(this).nextAll('.main-nav-wrapper').find('.member-login').slideToggle(300);
        $(this).nextAll('.search-form').slideToggle(300);
    }
  });

 
  $(window).resize(function() {
    if ( $(document).width() >= 1200 ) {
      $('.main-nav-wrapper').find('.nav').css('display', 'flex');
      $('.main-nav-wrapper').find('.member-login').css('display', 'block');
      $('.search-form').css('display', 'none');
    } else {
      $('.nav-opener').removeClass('nav-active');
      $('.main-nav-wrapper').find('.nav').css('display', 'none');
      $('.main-nav-wrapper').find('.member-login').css('display', 'none');
      $('.search-form').css('display', 'none');
    }
  });

  // slick slider
  $('.main-slider').slick({
    centerMode: true
  });


});