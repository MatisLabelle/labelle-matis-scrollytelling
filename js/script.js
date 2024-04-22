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

gsap
  .timeline()
  .fromTo(".whale-container", { x: "25vw" }, { x: "50vw", duration: 15 })
  .to(".whale-container", { scale: 0, duration: 5 }, "-=10")
  .to(".whale-container", { x: "80vw", duration: 5 }, "<");

gsap
  .timeline({
    duration: 2,
    scrollTrigger: {
      trigger: "#chapitre6",
    },
  })
  .fromTo(".bulle", { opacity: 0 }, { opacity: 1 })
  .fromTo(".message-output", { opacity: 0 }, { opacity: 1 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre5",
    },
  })
  .fromTo(".no1", { y: "100vh" }, { y: 0, duration: 3 })
  .fromTo(".no2", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no3", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no5", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no4", { y: "100vh" }, { y: 0, duration: 3 }, "-=2");
