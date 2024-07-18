


// NAVBAR OPEN AND CLOSE

const navOpen = document.querySelector("#nav-open");
const navClose = document.querySelector("#nav-close");
const navBar = document.querySelector("#navBar");

navOpen.addEventListener("click", () => {
  navBar.classList.add("active");
});

navClose.addEventListener("click", () => {
  navBar.classList.remove("active");
});


// SHOW IMAGE ON CLICK FUNCTIONLITY ON SHOP DETAIL PAGE

const mainImg = document.getElementById("main-img");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
  mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
  mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
  mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
  mainImg.src = smallImg[3].src;
}