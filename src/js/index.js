let hamburgerButton = document.querySelector(".header__nav__hamburger");
let navMenu = document.querySelector(".header__nav__menu");
let triangle = document.querySelector(".triangle__wrapper");

const showMenu = () => {
  console.log("clicked");

  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    triangle.style.display = "none";
  } else {
    navMenu.style.display = "flex";
    triangle.style.display = "flex";
  }
};

hamburgerButton.addEventListener("click", showMenu);
