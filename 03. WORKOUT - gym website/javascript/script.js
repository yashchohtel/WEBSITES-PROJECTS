/* ==================:| NAV OPEN AND CLOSE |:================== */

const navMenu = document.querySelector("#nav-menu"),
  navOpenBtn = document.querySelector("#nav-open"),
  navCloseBtn = document.querySelector("#nav-close");

navOpenBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

/* ==================:| LINK CLICK NAV CLOSE |:================ */

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("active");
};

navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});

/* ==================:| BACKGROUND CHANGE HEADER SCROLL |:======= */

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("active")
    : header.classList.remove("active");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== REVEAL ON SCROLL ===============*/ 

const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:'1500',
  delay:'400'
})

sr.reveal('.home_data')
sr.reveal('.home_img', {delay: 700, origin:"bottom"})
sr.reveal('.program_card',{interval:100})
sr.reveal('.choose-text-content')
sr.reveal('.choose_image', {delay: 700, origin:"bottom"})
sr.reveal('.pricing_card',{interval:100})