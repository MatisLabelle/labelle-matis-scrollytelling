let body = document.querySelector("body");
clearTimeout(scroll);

window.addEventListener("scroll", () => {
  body.classList.add("is-scrolling");
  const scroll = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});

let send = document.querySelector(".message-send");
let output = document.querySelector(".message-output");

send.addEventListener("click", function () {
  let input = document.querySelector(".message-input").value;

  output.textContent = input;
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

/// anim chapitre 2
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre2",
      scrub: true,
      pin: true,
    },
  })
  .fromTo(".bird-container", { x: "-20vw" }, { x: "100vw", duration: 40 })
  .fromTo(".whale-container", { x: "25vw" }, { x: "50vw", duration: 35 }, "<")
  .to(".whale-container", { scale: 0, duration: 5 }, "-=5")
  .to(".whale-container", { x: "80vw", duration: 5 }, "<");

gsap.set("#path", { drawSVG: "0% 5%" });
gsap.to("#path", {
  scrollTrigger: "chapitre2",
  drawSVG: "95% 100%",
  duration: 3,
  ease: "none",
  repeat: -1,
});

// anim texte chapitre 6
gsap
  .timeline({
    duration: 2,
    scrollTrigger: {
      trigger: "#chapitre6",
      toggleActions: "restart play reverse reset",
    },
  })
  .fromTo(".bulle", { opacity: 0 }, { opacity: 1 })
  .fromTo(".message-output", { opacity: 0 }, { opacity: 1 });

// anim planète chapitre 5
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre5",
      scrub: true,
      pin: true,
    },
  })
  .fromTo(".no1", { y: "100vh" }, { y: 0, duration: 3 })
  .fromTo(".no2", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no3", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no5", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no4", { y: "100vh" }, { y: 0, duration: 3 }, "-=2");

// anim parrallax chapitre 3
gsap.to(".vege", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});
gsap.to(".roche", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});
