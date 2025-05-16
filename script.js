const squares = document.querySelectorAll(".square4, .square5");
const icons = document.querySelectorAll(".social-links a[data-speed]");

let scrollY = 0;

// Animação contínua com flutuação suave dos ícones
function animateIcons(time) {
  icons.forEach((el, index) => {
    const speed = parseFloat(el.dataset.speed) || 0.3;
    const floatY = Math.sin(time / 500 + index) * 10; // Varia de -10 a +10px
    const scrollOffset = -scrollY * speed * 0.15;

    el.style.transform = `translateY(${scrollOffset + floatY}px)`;
  });

  requestAnimationFrame(animateIcons);
}

// Parallax dos quadrados com rotação dinâmica
window.addEventListener("scroll", () => {
  scrollY = window.scrollY;

  squares.forEach((el) => {
    const speed = parseFloat(el.dataset.speed) || 1;
    const translateY = scrollY * speed * 0.3;
    const rotation = 35 + scrollY * speed * 0.01;
    el.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
  });
});

// Inicia animação contínua dos ícones
requestAnimationFrame(animateIcons);