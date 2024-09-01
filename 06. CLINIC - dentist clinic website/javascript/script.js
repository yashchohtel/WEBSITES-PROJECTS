


// hedder scroll

let nav = document.querySelector(".header");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled")
    } else{
        nav.classList.remove("header-scrolled")
    }

    navBar.classList.remove("active");
    overlay.classList.remove("active");

}

// navigation open close

const navOpen = document.querySelector(".nav-open-btn");
const navClose = document.querySelector(".nav-close-btn");
const navBar = document.querySelector(".nav-links");
const overlay = document.querySelector(".blur-overlay");

navOpen.addEventListener("click", ()=>{
    navBar.classList.add("active");
    overlay.classList.add("active");
})

navClose.addEventListener("click", ()=>{
    navBar.classList.remove("active");
    overlay.classList.remove("active");
})

