/**
 * Transition Delay ==============================================================>
 */
function delay(n) {
  n = n || 2000;
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
}

/**
 * Once Animation  ==============================================================>
 */

function OnceAnimation() {
  const tl = gsap.timeline();

  tl.set(".main-fade", {
    opacity: 0,
  });

  tl.set(".animate-fade-in", {
    y: 100,
    opacity: 0,
  });

  tl.set(".tricks-wrap", {
    yPercent: 150,
    opacity: 1,
  });

  tl.to(".main-fade", {
    duration: 1,
    ease: "Power0.easeNone",
    opacity: 1,
    delay: 0.25,
  });

  tl.from(
    ".slow-load",
    {
      duration: 1,
      ease: "Power3.easeIn",
      opacity: "0",
      clearProps: "all",
    },
    "-=1"
  );

  tl.to(
    ".tricks-wrap",
    {
      ease: "Expo.easeOut",
      duration: 1,
      yPercent: 0,
      opacity: 1,
      stagger: 0.05,
      clearProps: "all",
    },
    "-=1"
  );

  tl.to(
    ".animate-fade-in",
    {
      ease: "Expo.easeOut",
      duration: 1.25,
      y: 0,
      opacity: 1,
      stagger: 0.075,
      delay: 0,
    },
    "-=1.15"
  );
}

/**
 * Enter Animation ==============================================================>
 */
function enterAnimation() {
  const tl = gsap.timeline();

  tl.set(".main-fade", {
    opacity: 0,
  });

  /**
   * Set Loading Screen to opacity 0 because page transiton will conflict if opacity not set to 0;
   */
  tl.set(".loading-screen", {
    opacity: 0,
    pointerEvents: "none",
  });

  tl.set(".animate-fade-in", {
    y: 100,
    opacity: 0,
  });

  tl.set(".tricks-wrap", {
    yPercent: 150,
    opacity: 1,
  });

  tl.to(".main-fade", {
    duration: 1,
    ease: "Power0.easeNone",
    opacity: 1,
    delay: 0.25,
  });

  tl.from(
    ".slow-load",
    {
      duration: 1,
      ease: "Power3.easeIn",
      opacity: "0",
      clearProps: "all",
    },
    "-=1"
  );

  tl.to(
    ".tricks-wrap",
    {
      ease: "Expo.easeOut",
      duration: 1,
      yPercent: 0,
      opacity: 1,
      stagger: 0.05,
      clearProps: "all",
    },
    "-=1"
  );

  tl.to(
    ".animate-fade-in",
    {
      ease: "Expo.easeOut",
      duration: 1.25,
      y: 0,
      opacity: 1,
      stagger: 0.075,
      delay: 0,
    },
    "-=1.15"
  );
}

/**
 * Leave Animation ==============================================================>
 */
function pageTransition() {
  const tl = gsap.timeline();

  tl.to(".main-fade", {
    opacity: 0,
  });

  tl.to(
    ".slow-load",
    {
      duration: 0.75,
      ease: "Power3.easeOut",
      opacity: 0,
      clearProps: "all",
    },
    "-=.5"
  );
}

/**
 * Scroll Restoreation ==============================================================>
 */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

/**
 * Barba Init ==============================================================>
 */
$(function () {
  barba.init({
    sync: true,
    transitions: [
      {
        async once(data) {
          // console.log("once");
          // Once do nothing Becaues of having custom loader
        },
        async enter(data) {
          enterAnimation();
        },
        async leave(data) {
          const done = this.async();
          pageTransition();
          await delay(450);
          if (lenis) {
            // scroll to the top using Lenis immediately (no smooth scrolling).
            lenis.scrollTo(0, { immediate: true });
          } else {
            // If 'lenis' is not defined, fall back to the default browser scroll behavior.
            window.scrollTo(0, 0);
          }
          done();
        },
      },
    ],
  });
});
