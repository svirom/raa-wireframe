$(document).ready(function() {

  //mobile menu button
  $('.nav-opener').on('click', function(e) {
    e.preventDefault();

    if ($(document).width() < 768) {
      $(this).toggleClass('nav-active')
        .next('.main-nav').find('.nav').slideToggle(300)
        $(this).next('.main-nav').find('.search-form').slideToggle(300);
        $(this).next('.main-nav').find('.member-login').slideToggle(300);
    }
  });


});