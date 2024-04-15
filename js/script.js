let body = document.querySelector("body");
clearTimeout(scroll);

window.addEventListener("scroll", () => {
  body.classList.add("is-scrolling");
  const scroll = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    duration: 2,
    scrollTrigger: {
      markers: true,
      trigger: "#chapitre2",
    },
  })
  .to(".whale-container", { x: "20vw" });
