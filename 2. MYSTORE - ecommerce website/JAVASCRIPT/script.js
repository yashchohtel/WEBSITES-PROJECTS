// A $( document ).ready() block.
$( document ).ready(function() {
    

    /* ----------------| MIDDLE HEADER STICKY OF HEADER ON SCROLL |---------------- */ 
    
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 130){
            $(".header-middle").addClass("active");
        } else{
            $(".header-middle").removeClass("active");
        }
    })

    /* ----------------| HOME SECTION CAROUSELS BANNER CAROUSE |---------------- */ 

    // hero section carousel
    $('#hero-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        items:1,
        responsive:{
            0:{
                items:1
            }
        }
    })


    // hero section feature carousel
    $('#feature-farousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        items:1,
        responsive:{
            0:{
                items:2
            },
            485:{
                items:3
            },
            990:{
                items:4
            },
            1235:{
                items:5
            }
        }
    })

    // all category carousel
    $('#all-catogery-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        margin:0,
        stagePadding: 60,
        responsive:{
            0:{
                items:1,
                stagePadding: 10,
            },
            340:{
                items:1,
                stagePadding: 20,
            },
            400:{
                items:1,
                stagePadding: 50,
            },
            500:{
                items:1,
                stagePadding: 100,
            },
            560:{
                items:2,
                stagePadding: 0,
            },
            670:{
                items:2,
                stagePadding: 50,
            },
            840:{
                items:3,
                stagePadding: 0,
            },
            1060:{
                items:3,
            },
            1235:{
                items:4
            }
        }
    })

    // FEATURED COLLECTION CAROUSEL
    $('#featured-collection-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        margin:00,
        responsive:{
            0:{
                items:1,
                stagePadding:10,
            },
            300:{
                items:1,
                stagePadding:30,
            },
            340:{
                items:1,
                stagePadding:50,
            },
            450:{
                items:1,
                stagePadding:100,
            },
            575:{
                items:2,
            },
            560:{
                items:2,
                stagePadding: 40,
                nav:false,
            },
            710:{
                items:3,
            },
            810:{
                items:3,
                stagePadding: 40,
            },
            950:{
                items:4,
            },
            1030:{
                items:4,
                stagePadding: 30,
            },
            1200:{
                items:5
            },
            
        }
    })

    // FEATURED COLLECTION CAROUSEL
    $('#featured-collection-carousel-2').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        items:1,
        margin:00,
        responsive:{
            0:{
                items:1,
                stagePadding:10,
            },
            300:{
                items:1,
                stagePadding:30,
            },
            340:{
                items:1,
                stagePadding:50,
            },
            450:{
                items:1,
                stagePadding:100,
            },
            575:{
                items:2,
            },
            560:{
                items:2,
                stagePadding: 40,
                nav:false,
            },
            710:{
                items:3,
            },
            810:{
                items:3,
                stagePadding: 40,
            },
            950:{
                items:4,
            },
            1030:{
                items:4,
                stagePadding: 30,
            },
            1200:{
                items:5
            },
            
        }
    })


});