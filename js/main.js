(function($) {
  "use strict"; // Start of use strict

  // changes navbar background, text, and hamburger color when scrolled
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.navbar-expand-lg.navbar-dark.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

})(jQuery); // End of use strict
