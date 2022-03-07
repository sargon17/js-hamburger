let burgerBtn = document.querySelector(".header-right > a");
let closeBurgerBtn = document.querySelector(".close");
let hamburgerMenu = document.querySelector(".hamburger-menu");

burgerBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = "block";
});
closeBurgerBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});
