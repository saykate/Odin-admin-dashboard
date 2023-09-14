const NAV_MENU = document.querySelector(".menu");
const NAV_MENU_BUTTON = document.querySelector("#hamburger");

// function setNavMenuOffsetTop() {
//   const NAV_BAR = document.querySelector(".nav__container");
//   NAV_MENU.style.top = NAV_BAR.clientHeight + "px";
// }

function openNavMenu() {

  console.log('click')
  /* 
        Setting display to grid when the button is clicked is a hacky way to prevent
        the slide out animation from triggering on page load.
    */
  // NAV_MENU.style.display = "grid";
  NAV_MENU_BUTTON.classList.toggle("hamburger-open");
  NAV_MENU.classList.toggle("menu-open");
}

// setNavMenuOffsetTop();
NAV_MENU_BUTTON.addEventListener("click", openNavMenu);