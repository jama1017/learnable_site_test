$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.navbar-expand-lg.navbar-dark.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
