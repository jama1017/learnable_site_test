$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.navbar-expand-lg.navbar-dark.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// anime({
//   targets: 'div.box.grey',
//   opacity: .5,
//   left: '40%',
//   translateY: '100%',
//   backgroundColor: '#FFF',
//   borderRadius: ['3em', '6em'],
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true,
// });
