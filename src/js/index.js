let hamburgerButton = document.querySelector(".header__nav__hamburger");
let navMenu = document.querySelector(".header__nav__menu");
let triangle = document.querySelector(".triangle__wrapper");

const showMenu = () => {
  if (navMenu.classList.contains("displayFlex")) {
    navMenu.classList.remove("displayFlex");
    triangle.classList.remove("displayFlex");

    navMenu.classList.add("displayNone");
    triangle.classList.add("displayNone");
  } else {
    navMenu.classList.remove("displayNone");
    triangle.classList.remove("displayNone");

    navMenu.classList.add("displayFlex");
    triangle.classList.add("displayFlex");
  }
};

hamburgerButton.addEventListener("click", showMenu);
