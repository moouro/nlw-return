const navigation = document.querySelector("#navigation");

window.addEventListener("scroll", onScroll);
onScroll();
//function scroll
//
function onScroll() {
  showNavOnScroll();

  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    let backToTopButton = document.querySelector("#backToTopButton");
    backToTopButton.classList.add("show");
  } else {
    let backToTopButton = document.querySelector("#backToTopButton");
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  scale: 1,
}).reveal(`#home,
          #home img,
          #home .stats,
          #services, 
          #services header,
          #services .card,
          #about,
          #about header,
          #about .content,
          footer`);
