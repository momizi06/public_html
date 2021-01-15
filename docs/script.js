(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
      $("#top_btn").fadeOut();
    } else {
      $nav.removeClass( open );
      $("#top_btn").fadeIn();
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


/*==========
作成中
$(function () {
    $btn.on('click', () => {
        $("#top_btn").hide('slow');
    });
});
==========*/
