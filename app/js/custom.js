$(document).ready(function() {

  //mobile menu button
  $('.nav-opener').on('click', function(e) {
    e.preventDefault();

    if ($(document).width() < 1200) {
      $(this).toggleClass('nav-active')
        .nextAll('.main-nav').find('.nav').slideToggle(300);
        $(this).nextAll('.main-nav').find('.member-login').slideToggle(300);
        $(this).nextAll('.search-form').slideToggle(300);
    }
  });

 
  $(window).resize(function() {
    if ( $(document).width() >= 1200 ) {
      $('.nav-opener').removeClass('nav-active');
      $('.main-nav').find('.nav').css('display', 'flex');
      $('.main-nav').find('.member-login').css('display', 'block');
      $('.search-form').css('display', 'none');
    } else {
      $('.nav-opener').removeClass('nav-active');
      $('.main-nav').find('.nav').css('display', 'none');
      $('.main-nav').find('.member-login').css('display', 'none');
      $('.search-form').css('display', 'none');
    }
  });

  // bxSlider slider
  $('.main-slider').bxSlider({
    mode: 'fade',
    // adaptiveHeight: true,
  });


});