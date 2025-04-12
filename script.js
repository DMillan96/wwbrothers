const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobileMenuButton = document.querySelector(
  ".mobile-menu .close-button"
);
const searchButton = document.querySelector(".search-button");
const searchOverlay = document.querySelector(".search-overlay");
const closeSearchButton = document.querySelector(
  ".search-overlay .close-button"
);

menuButton.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
});

searchButton.addEventListener("click", () => {
  searchOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeSearchButton.addEventListener("click", () => {
  searchOverlay.classList.remove("open");
  document.body.style.overflow = "";
});
