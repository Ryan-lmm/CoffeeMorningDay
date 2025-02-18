let burger = document.querySelector(".burger");
let main = document.querySelector("main.main")

burger.addEventListener("click", function() {
  let menuMob = document.querySelector(".menu-mobile")
  if (menuMob.classList.contains('visible')) {
    menuMob.classList.remove('visible')
  } else {
    menuMob.classList.add('visible')
  }
})
//
//slider


let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlides(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let slides = document.querySelectorAll("ul.grid-galery-ul-mobile > li")
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block"
  setTimeout(showSlides, 2000)
}
