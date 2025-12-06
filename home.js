const parallax = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const velocidade = scrollTop * 0.3;

  parallax.style.setProperty(
    "--parallax-offset",
    `${velocidade}px`
  );
});
