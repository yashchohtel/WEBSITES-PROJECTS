/* --------------------:| NAVIGATION STYLE CHANGE ON SCROLL |:-------------------- */

window.onscroll = () => {
  if (window.scrollY > 10) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

/* --------------------:| NAVIGATION OPEN AND CLOSE |:--------------------------- */

const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");
const navigationMenu = document.querySelector(".navigation");
const blurOverlay = document.querySelector(".blur-overlay");

openMenuBtn.addEventListener("click", function () {

  // nav open
  navigationMenu.classList.add("active");

  // overlay active
  blurOverlay.classList.add("active");


});

closeMenuBtn.addEventListener("click", function () {

  // nav close
  navigationMenu.classList.remove("active");

  // overlay active
  blurOverlay.classList.remove("active");


});

/* --------------------:| NAVIGATION MOBILE SUBMENU OPEN AND CLOSE |:------------- */

const submenuOpenBtn1 = document.querySelector("#mobile-submenu-open-1");
const submenuOpenBtn2 = document.querySelector("#mobile-submenu-open-2");
const mobSubMenu1 = document.querySelector("#mobile-submenu-1");
const mobSubMenu2 = document.querySelector("#mobile-submenu-2");
const mobSmDd1 = document.querySelector(".smDropD-1");
const mobSmDd2 = document.querySelector(".smDropD-2");

submenuOpenBtn1.addEventListener("click", function () {
  mobSubMenu1.classList.toggle("active");
  mobSmDd1.classList.toggle("active")
});

submenuOpenBtn2.addEventListener("click", function () {
  mobSubMenu2.classList.toggle("active");
  mobSmDd2.classList.toggle("active")
});

