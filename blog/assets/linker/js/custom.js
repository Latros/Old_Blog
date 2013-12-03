jQuery(document).ready(function($) {

  // Fancy hover toggle on the header image to show the credits
  $('.top-image').on('mouseenter', function(){
    $('.top-image-credits').fadeIn(500);
  });

  $('.top-image').on('mouseleave', function(){
    $('.top-image-credits').fadeOut(500);
  });

});
