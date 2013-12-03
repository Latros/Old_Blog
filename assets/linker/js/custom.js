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

if ( window.location.href.indexOf('/read') > -1 ) {
  console.log('Current page is: read');

  /* Cosmetic */
  // Display the comment form
  $('.post h3').on('click', function(){
    $('.form-create-comment').slideToggle();
  });
  /* /End cosmetic */

  /* Non-cosmetic */
  /* /End Non-cosmetic*/

}

/*
-----------------------------------------------------------------
|
| Page specific functionality
| Page: /about
|
-----------------------------------------------------------------
*/

$('.yearofcode i, .hosting i, .advocate i').hide();

if ( window.location.href.indexOf('/about') > -1 ) {
  console.log('Current page is: about');

  /* Cosmetic */
  /* /End cosmetic */

  /* Non-cosmetic */

  // If the URL dictates they were linked to view the 365 section,
  // scroll to that section
  if ( window.location.href.indexOf('?section=365') > -1 ) {
    console.log('Scrolling to section: 365');
    $('.yearofcode i').show().fadeOut(3000);
    $('html, body').animate({
      scrollTop: $('.yearofcode').offset().top
    }, 300);
  }

  // If the URL dictates they were linked to view the advocate
  // section, scroll to that section
  if ( window.location.href.indexOf('?section=advocate') > -1 ) {
    console.log('Scrolling to section: advocate');
    $('.advocate i').show().fadeOut(3000);
    $('html, body').animate({
      scrollTop: $('.advocate').offset().top
    }, 300);
  }

  // If the URL dictates they were linked to view the hosting
  // section, scroll to that section
  if ( window.location.href.indexOf('?section=hosting') > -1 ) {
    console.log('Scrolling to section: hosting');
    $('.hosting i').show().fadeOut(3000);
    $('html, body').animate({
      scrollTop: $('.hosting').offset().top
    }, 300);
  }

  /* /End Non-cosmetic*/

}

/*
-----------------------------------------------------------------
|
| Non-page-specific non-cosmetic functionality
|
-----------------------------------------------------------------
*/



/*
-----------------------------------------------------------------
|
| Non-page-specific cosmetic functionality
|
-----------------------------------------------------------------
*/

// Fancy hover toggle on the header image to show the credits
$('.top-image').on('mouseenter', function(){
  $('.top-image-credits').fadeIn(150);
});
$('.top-image').on('mouseleave', function(){
  $('.top-image-credits').fadeOut(150);
});

});
// End document ready