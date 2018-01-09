$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

var cssSelector = anime({
  targets: '#cssSelector .el',
  translateX: 250
});
