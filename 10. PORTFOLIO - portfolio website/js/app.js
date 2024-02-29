$(document).ready(function(){

    $(".slider").slick({
        arrows:false,
        dots:true,
        appendDots:'.slider_dots',
        dotsClass:'dots'
    });

    let hamBurger = document.querySelector(".ham_icon");
    let close = document.querySelector(".close")
    let mobileNavigation = document.querySelector(".mobile_nav");
    let mobileLink = document.querySelector(".mob_link");

    hamBurger.addEventListener('click', function(){

        mobileNavigation.classList.add("open")

    })

    close.addEventListener('click', function(){
        
        mobileNavigation.classList.remove("open")

    })

    mobileLink.addEventListener('click', function(){
        
        mobileNavigation.classList.remove("open")

    })

})