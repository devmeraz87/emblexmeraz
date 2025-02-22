// Initialize Lenis
const lenis = new Lenis({
  lerp: 0.05,
  smooth: true,
  direction: "vertical",
  // gestureOrientation: "vertical",
  syncTouch: true,
  syncTouchLerp: 0.05,
});

//get scroll value
lenis.on("scroll", ({ scroll, limit }) => {
  // console.log({ scroll, limit });
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
