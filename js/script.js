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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

send.addEventListener("click", function () {
  let input = document.querySelector(".message-input").value;

  // anim chapitre 1

  gsap.to(".cls-1-paper", {
    morphSVG: {
      shape: ".cls-1-plane",
    },
  });

  gsap.to(".message-input", {
    scale: 0,
  });

  gsap.fromTo(".cls-2-plane", { scale: 0 }, { scale: 1, opacity: 1 });
  gsap.to(".cls-1-plane", {
    opacity: 1,
  });

  gsap.to(".c2", {
    opacity: 1,
  });

  gsap.to(".papier", {
    scrollTrigger: {
      scrub: true,
      pin: true,
      pinSpacing: false,
      trigger: "#chapitre1",
    },
    motionPath: {
      path: [
        { x: "20%", y: "-20vh" },
        { x: "100%", y: "-75vh" },
      ],
    },
  });

  output.textContent = input;
});

/// anim chapitre 2
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre2",
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
  })
  .to(".plane", {
    duration: 40,
    motionPath: {
      path: [
        { x: "60vw", y: "10vh" },
        { x: "120vw", y: "-10vh" },
      ],
    },
  })
  .fromTo(".bird-container", { x: "-20vw" }, { x: "100vw", duration: 40 }, "<")
  .fromTo(".whale-container", { x: "25vw" }, { x: "50vw", duration: 35 }, "<")
  .to(".whale-container", { scale: 0, duration: 5 }, "-=5")
  .to(".whale-container", { x: "80vw", duration: 5 }, "<");

// anim vent chapitre 2

gsap.set("#path", { drawSVG: "0% 5%" });
gsap.to("#path", {
  scrollTrigger: "chapitre2",
  drawSVG: "95% 100%",
  duration: 3,
  ease: "none",
  repeat: -1,
});

//anim plane chapitre 3
gsap.to(".p3", {
  scrollTrigger: {
    trigger: "#chapitre3",
    scrub: true,
    pin: true,
  },
  motionPath: {
    path: [
      { x: "60vw", y: "-10%" },
      { x: "120%", y: "10%" },
    ],
  },
});

// anim parrallax chapitre 3
gsap.to(".vege", {
  backgroundPosition: "50% -30vh",
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
gsap.to(".roche", {
  backgroundPosition: "50% -15vh",
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

//anim avion chapitre 4
gsap.to(".p4", {
  scrollTrigger: {
    trigger: "#chapitre4",
    scrub: true,
    pin: true,
  },
  motionPath: {
    path: [
      { x: "100%", y: "10%" },
      { x: "500%", y: "-10%" },
    ],
  },
});

//anim lune chapitre 4
gsap.to(".gauche", {
  x: "-10vw",
  scrollTrigger: {
    trigger: "#chapitre4",
    scrub: true,
  },
});
gsap.to(".droite", {
  x: "20vw",
  scrollTrigger: {
    trigger: "#chapitre4",
    scrub: true,
  },
});

// anim planète chapitre 5
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre5",
      scrub: true,
    },
  })
  .fromTo(".no1", { y: "100vh" }, { y: 0, duration: 3 })
  .fromTo(".no2", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no3", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no5", { y: "100vh" }, { y: 0, duration: 3 }, "-=2")
  .fromTo(".no4", { y: "100vh" }, { y: 0, duration: 3 }, "-=2");

// anim plane chapitre 5
gsap.to(".p5", {
  scrollTrigger: {
    trigger: "#chapitre5",
    scrub: true,
    pin: true,
  },
  motionPath: {
    path: [
      { x: "150%", y: "-10%" },
      { x: "275%", y: "-18%" },
    ],
  },
  scale: 0,
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

// anim plane chapitre 6
gsap.fromTo(
  ".p6",
  { x: "125vw", scale: -1 },
  {
    x: "80vw",
    scaleX: -1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#chapitre6",
      scrub: true,
      pin: true,
    },
  }
);
