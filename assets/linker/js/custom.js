jQuery(document).ready(function($) {

  /* --------------------------------------
      Page-specific functionality
      PAGE: Contact
     -------------------------------------- */

  // -----------------------------------------
      /* Misc non-cosmetic functionality */
  // -----------------------------------------

  // -----------------------------------------
        /* Misc cosmetic functionality */
  // -----------------------------------------

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
