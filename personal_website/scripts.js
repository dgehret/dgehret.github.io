document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const sidePanel = document.querySelector(".side-panel");

    hamburgerMenu.addEventListener("click", function() {
        sidePanel.classList.toggle("visible");
    });
}); // added closing bracket for function
