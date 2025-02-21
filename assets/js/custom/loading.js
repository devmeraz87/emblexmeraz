/**
 * Loading Animation ==============================================================>
 */
const preloader = document.querySelector(".loading-screen");

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

Promise.all(allAssetsLoaded).then(() => {
  setTimeout(() => {
    const tl = gsap.timeline();
    tl.to(preloader, {
      opacity: 0,
      pointerEvents: "none",
      duration: 1,
    });
  }, 1500);
});
