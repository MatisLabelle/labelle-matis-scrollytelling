let body = document.querySelector("body");
clearTimeout(scroll);

window.addEventListener("scroll", () => {
  body.classList.add("is-scrolling");
  const scroll = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});
