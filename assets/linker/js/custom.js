jQuery(document).ready(function($) {

  var commentFormHeight = $('.form-create-comment').hide().height();

  // Fancy hover toggle on the header image to show the credits
  $('.top-image').on('mouseenter', function(){
    $('.top-image-credits').fadeIn(500);
  });

  $('.top-image').on('mouseleave', function(){
    $('.top-image-credits').fadeOut(500);
  });

  // Fancy click toggle of comment form
  $('.post h3').on('click', function(){
    $('.form-create-comment').slideToggle();
  });

});
