// Document ready
jQuery(document).ready(function($) {

/*
-----------------------------------------------------------------
|
| Page specific functionality
| Page: /read
|
-----------------------------------------------------------------
*/

/* Cosmetic */
// Display the comment form
$('.post h3').on('click', function(){
  $('.form-create-comment').slideToggle();
});
/* /End cosmetic */

/* Non-cosmetic */
/* /End Non-cosmetic*/

/* ---- /Page-specific functionality for page: /read ---- */

/*
-----------------------------------------------------------------
|
| Non-page-specific non-cosmetic functionality
|
-----------------------------------------------------------------
*/



/* ---- /End non-page-specific non-cosmetic functionality ---- */

/*
-----------------------------------------------------------------
|
| Non-page-specific cosmetic functionality
|
-----------------------------------------------------------------
*/

// Fancy hover toggle on the header image to show the credits
$('.top-image').on('mouseenter', function(){
  $('.top-image-credits').fadeIn(500);
});
$('.top-image').on('mouseleave', function(){
  $('.top-image-credits').fadeOut(500);
});

/* ---- /End non-page-specific non-cosmetic functionality ---- */

});
// End document ready