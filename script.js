// Animated NavBar on Scroll (jQuery)
// WordPress Compatible

// N.B If you're on WP remember to change 'slug' with your theme'slug

(function($){

  var slug_scroll_position = 0;
  var distance = 100;

  $(document).scroll(function(){
    slug_scroll_position = $(this).scrollTop();
    if (slug_scroll_position > distance) {
      $('body').addClass('is-scrolled');
    } else {
      $('body').removeClass('is-scrolled');
    }
  });

}(jQuery));
