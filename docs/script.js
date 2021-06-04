(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open';
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);


$(function(){
  $("#top_btn").on("click", function(){
    $("html, body").animate({scrollTop: 0 }, 1000, "swing");
  });
});
