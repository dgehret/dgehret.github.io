const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', function() {
  const yOffset = window.pageYOffset;
  const parallaxOffset = yOffset * -0.5;

  parallax.style.backgroundPosition = `center ${parallaxOffset}px`;
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const sidePanel = document.querySelector(".side-panel");

    hamburgerMenu.addEventListener("click", function () {
        sidePanel.classList.toggle("visible");
    });
});

window.addEventListener('click', function (event) {
    const sidePanel = document.querySelector('.side-panel');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    if (event.target !== sidePanel && event.target !== hamburgerMenu && !sidePanel.contains(event.target)) {
        sidePanel.classList.remove('visible');
    }
});