document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square4, .square5");
  const icons = document.querySelectorAll(".social-links a[data-speed]");

  let scrollY = 0;

  function animateIcons(time) {
    icons.forEach((el, index) => {
      const speed = parseFloat(el.dataset.speed) || 0.3;
      const floatY = Math.sin(time / 500 + index) * 10;
      const scrollOffset = -scrollY * speed * 0.15;

      el.style.transform = `translateY(${scrollOffset + floatY}px)`;
    });

    requestAnimationFrame(animateIcons);
  }

  function checkFadeIn() {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const windowHeight = window.innerHeight;

    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.85) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;

    squares.forEach((el) => {
      const speed = parseFloat(el.dataset.speed) || 1;
      const translateY = scrollY * speed * 0.3;
      const rotation = 30 + scrollY * speed * 0.01;

      el.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
    });

    checkFadeIn();
  });

  checkFadeIn(); // Checa ao carregar a página

  requestAnimationFrame(animateIcons);
});