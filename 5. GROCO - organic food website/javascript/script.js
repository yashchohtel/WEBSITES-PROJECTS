// SEARCH BAR
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  navIcon.classList.remove("fa-xmark");
};

// SHOPING CART
let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  navIcon.classList.remove("fa-xmark");
};

// LOGIN FORM
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  navIcon.classList.remove("fa-xmark");
};

// NAVIGATION MENU
let navbar = document.querySelector(".navigation");
let navIcon = document.querySelector("#menu-btn");

document.querySelector("#menu-btn").onclick = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// SCROLL REMOVE
window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  navIcon.classList.remove("fa-xmark");
};

// PRODUCTS-SLIDER
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// REVIEWS SLIDERS
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
