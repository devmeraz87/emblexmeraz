barba.hooks.beforeEnter(() => {
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // Tricks.
  const tricks = document.querySelectorAll(".tricks");
  tricks.forEach((trick) => {
    trick.innerHTML = trick.innerHTML.replace(
      /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
      `$1<span class="tricks-wrap"><span class="tricksword">$2</span></span>`
    );
  });

  // Subs
  const subsword = document.querySelectorAll(".subs");
  subsword.forEach((subs) => {
    subs.innerHTML = subs.innerHTML.replace(
      /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
      `$1<span class="subsword-wrap"><span class="subsword">$2</span></span>`
    );
  });

  $(document).ready(() => {
    // Mobile Nav
    const hamburger = document.querySelector(".hamburger");
    const mainNav = document.querySelector(".js-navbar");
    hamburger.addEventListener("click", () => {
      mainNav.classList.toggle("mobile-active");
    });
  });
});
