document.addEventListener("DOMContentLoaded", () => {

    const showMobileMenuButton = document.querySelector("[data-collapse-show]");
    const mobileMenu = document.querySelector("#mobile-menu");
    const closeMobileMenuButton = document.querySelector("[data-collapse-close]");

    showMobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
    });

    closeMobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});
