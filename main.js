$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

anime({
  targets: 'div.box.grey',
  opacity: .5,
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: ['0em', '2em'],
  easing: 'easeInOutQuad',
  loop: true,
});
