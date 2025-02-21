barba.hooks.afterEnter(() => {
  // Hide Header on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $(".js-navbar").outerHeight();

  $(window).scroll((event) => {
    didScroll = true;
  });

  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 0);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $(".js-navbar").removeClass("scroll-down").addClass("scroll-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $(".js-navbar").removeClass("scroll-up").addClass("scroll-down");
      }
    }

    lastScrollTop = st;
  }
});
