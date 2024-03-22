// -----------------------------------------------------------------------------------------
// FOR DESKTOP HEADER ACTION BUTTON SUBMENUS

// BUTTONS
const create = document.querySelector(".create");
const message = document.querySelector(".message");
const notification = document.querySelector(".notification");
const profile = document.querySelector(".profile");

// SUBMENU'S
const createSubMenu = document.querySelector(".create-sub-menu");
const messageSubMenu = document.querySelector(".message-sub-menu");
const notificationSubMenu = document.querySelector(".notification-sub-menu");
const profileSubMenu = document.querySelector(".profile-sub-menu");

//* CREATE BUTTON *//
document.querySelector("#create-btn").onclick = () => {
  // BUTTON COLOR CHANGE ON CLICK
  create.classList.toggle("active");
  message.classList.remove("active");
  notification.classList.remove("active");
  profile.classList.remove("active");
  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.toggle("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");
};

//* MESSAGE BUTTON *//
document.querySelector("#message-btn").onclick = () => {
  // BUTTON COLOR CHANGE ON CLICK
  create.classList.remove("active");
  message.classList.toggle("active");
  notification.classList.remove("active");
  profile.classList.remove("active");
  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.toggle("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");
};

//* NOTIFICATION BUTTON *//
document.querySelector("#notification-btn").onclick = () => {
  // BUTTON COLOR CHANGE ON CLICK
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.toggle("active");
  profile.classList.remove("active");

  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.toggle("active");
  profileSubMenu.classList.remove("active");
};

//* PROFILE BUTTON *//
document.querySelector("#profile-btn").onclick = () => {
  // BUTTON COLOR CHANGE ON CLICK
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.remove("active");
  profile.classList.toggle("active");

  // SUBMENU SHOW AND HIDE
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.toggle("active");
};

// SUBMENU SEARCHBAR AND BUTTON BACKGROUND CLOSE ON SCROLL
window.onscroll = () => {
  // color hide on scroll
  create.classList.remove("active");
  message.classList.remove("active");
  notification.classList.remove("active");
  profile.classList.remove("active");

  // submenu hide on scroll
  createSubMenu.classList.remove("active");
  messageSubMenu.classList.remove("active");
  notificationSubMenu.classList.remove("active");
  profileSubMenu.classList.remove("active");

  // searchbar hide on scroll
  searchBoxList.classList.remove("active");
};

// -----------------------------------------------------------------------------------------

// FOR SHOW AND HIDE OF SEARCH BOX RECENT SEARCH LIST

const searchBoxList = document.querySelector(".search-list-box");

document.querySelector("#search-box").onclick = () => {
  searchBoxList.classList.add("active");
};

document.querySelector("#search-box-small").onclick = () => {
  searchBoxList.classList.add("active");
};

document.querySelector(".back-arrow").onclick = () => {
  searchBoxList.classList.remove("active");
};

// -----------------------------------------------------------------------------------------

// FOR NAVIGATION IN HOME PAGE FUNCTIONALITY

const seeMoreBtn = document.querySelector("#see-more-btn");
const showAbleLink = document.querySelector(".link-to-show");
const upDownIcon = document.querySelector(".up-down-icon");
const moreLessText = document.querySelector(".more-less-text");

seeMoreBtn.addEventListener("click", () => {
  showAbleLink.classList.toggle("active");
  upDownIcon.classList.toggle("fa-angle-up");

  if (moreLessText.innerText === "See More") {
    moreLessText.innerText = "See Less";
  } else {
    moreLessText.innerText = "See More";
  }
});

// MOBILE NAV OPEN AND CLOSE

const navOpenBtn = document.querySelector("#nav-open-btn");
const navCloseBtn = document.querySelector("#nav-close-btn");
const blackOverlay = document.querySelector(".black-overlay");

navOpenBtn.addEventListener("click", () => {
  document.querySelector(".left-sidebar").classList.add("active");

  // overlay active
  blackOverlay.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  document.querySelector(".left-sidebar").classList.remove("active");

  // overlay deactive
  blackOverlay.classList.remove("active");
});

blackOverlay.addEventListener("click", () => {
  document.querySelector(".left-sidebar").classList.remove("active");
  blackOverlay.classList.remove("active");
});

// -----------------------------------------------------------------------------------------

// POST SECTION FUNCTIONALITY

// like, unlike, increment, decrement
const likeNo = document.querySelector(".like-no");
const likeYes = document.querySelector(".like-yes");
const likeCount = document.querySelector("#likeCount");

likeNo.addEventListener("click", () => {
  // like unlike
  likeNo.style.display = "none";
  likeYes.style.display = "inline-block";

  // increment
  likeCount.value = parseInt(likeCount.value) + 1;
});

likeYes.addEventListener("click", () => {
  // like unlike
  likeYes.style.display = "none";
  likeNo.style.display = "inline-block";

  // decrement
  likeCount.value = parseInt(likeCount.value) - 1;
});

// save
const save = document.querySelector(".save");
save.addEventListener("click", () => {
  save.classList.toggle("fa-solid");
  save.classList.toggle("fa-regular");
  save.classList.toggle("active");
});

// load more description

document.querySelector(".more-desc").addEventListener("click", () => {
  // show full description
  document.querySelector(".to-show-hide").style.display = "inline";
  document.querySelector(".more-desc").style.display = "none";
  document.querySelector(".three-dots").style.display = "none";
  document.querySelector(".less-desc").style.display = "inline-block";
});

document.querySelector(".less-desc").addEventListener("click", () => {
  document.querySelector(".to-show-hide").style.display = "none";
  document.querySelector(".more-desc").style.display = "inline";
  document.querySelector(".three-dots").style.display = "inline";
  document.querySelector(".less-desc").style.display = "none";
});

// -----------------------------------------------------------------------------------------

// HOME SECTION CAROSELS

$(document).ready(function () {
  // story carosel
  $(".story-carousel").owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 4,
      },
      321: {
        items: 5,
      },
      461: {
        items: 6,
      },
      600: {
        items: 7,
      },
      830: {
        items: 8,
      },
      921: {
        items: 6,
      },
      1150: {
        items: 7,
      },
    },
  });

  // find friend carousel
  $(".find-friend-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 5,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      365: {
        items: 2,
      },
      481: {
        items: 2,
        stagePadding: 40,
      },
      531: {
        items: 3,
      },
      631: {
        items: 3,
        stagePadding: 30,
      },
      751: {
        items: 3,
      },
      921: {
        items: 2,
        stagePadding: 40,
      },
      1101: {
        items: 3,
      },
    },
  });
});

