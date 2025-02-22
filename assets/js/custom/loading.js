/**
 * Loading Animation ==============================================================>
 */

$(document).ready(() => {
  const preloader = document.querySelector(".loading-screen");

  // Preload Images
  const preloadImages = new Promise((resolve, reject) => {
    const loader = new imagesLoaded(
      document.querySelector("img"),
      { background: true },
      resolve
    );

    let count = 0;

    loader.on("progress", () => {
      count++;

      let percentage = Math.ceil((count * 100) / loader.images.length);
    });
  });

  let allAssetsLoaded = [preloadImages];

  /**
   * @MainLoader
   */
  Promise.all(allAssetsLoaded).then(() => {
    setTimeout(() => {
      onceAnimationX();
    }, 450);
  });

  function onceAnimationX() {
    const tl = gsap.timeline();

    // Set Page to animation stage
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

    // Animate after set
    tl.to(preloader, {
      opacity: 0,
      pointerEvents: "none",
      duration: 1,
      ease: "Power3.easeInOut",
    });

    tl.to(
      ".main-fade",
      {
        duration: 1,
        ease: "Power0.easeNone",
        opacity: 1,
        delay: 0.25,
      },
      "-=0.5"
    );

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
      "-=0.7"
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
      "-=0.6"
    );
  }
});
