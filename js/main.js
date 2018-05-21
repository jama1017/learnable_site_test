(function($) {
  "use strict"; // Start of use strict

  //changes navbar background, text, and hamburger color when scrolled
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.navbar-expand-lg.navbar-dark.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  // Closes responsive menu when a scroll trigger link is clicked
 $('.nav-link').click(function() {
   $('.navbar-collapse').collapse('hide');
 });

})(jQuery); // End of use strict

//script to load navbar.html
$(function(){
  $("#nav-placeholder").load("navbar.html");
});
