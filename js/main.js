// changes navbar background, text, and hamburger color when scrolled
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.navbar-expand-lg.navbar-dark.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
