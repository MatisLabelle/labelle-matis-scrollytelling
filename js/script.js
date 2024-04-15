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

/*
gsap
  .timeline()
  .fromTo(".whale-container", { x: "0vw" }, { x: "20vw", duration: 20 });
*/
gsap
  .timeline({
    duration: 2,
    scrollTrigger: {
      markers: true,
      trigger: "#chapitre6",
    },
  })
  .fromTo(".bulle", { opacity: 0 }, { opacity: 1 })
  .fromTo(".message-output", { opacity: 0 }, { opacity: 1 });
