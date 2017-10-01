$(document).ready(function() {
  resizeBackground();
  parallax();

  // below function added to prevent background image in header from bumping on mobile
  // more details at:
  // http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
  function resizeBackground() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $(".background-box").height($(window).height() + 60); // 60 is the height of URL bar in mobile browsers
    }
  }

  function parallax() {
    $(window).on("scroll", function () {
      var windowScroll = $(this).scrollTop();

      // parallax on header
      $(".logo").css({
        "transform": "translate(0px, "+ windowScroll / 3 + "%)"
      });

      // parallax on team section
      if (windowScroll > $(".team").offset().top - $(window).height() / 2) {

        $(".photo-placeholder").each(function (i) {
          var self = $(this);

          if (!self.hasClass("is-visible")) {
            setTimeout(function () {
              self.addClass("is-visible");
            }, 250 * (i + 1));
          }
        }); // each
      }
    }); // if (windowScroll...)
  } // parallax
}); // $(document).ready(function()
