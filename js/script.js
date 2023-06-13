// Elementos
const slider = document.querySelectorAll(".slider");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

// Variavel q armazena a imagem atual do slide
let currentImage = 0;

// Funcoes
function hideSlider() {
  slider.forEach((item) => {
    item.classList.remove("on")
  })
};

function showSlider() {
  slider[currentImage].classList.add("on");
}

function nextSlide() {
  hideSlider();

  if(currentImage === slider.length -1) {
    currentImage = 0
  } else {
    currentImage++
  }

  showSlider();
}

function prevSlide() {
  hideSlider();

  if(currentImage === 0) {
    currentImage = slider.length -1
  } else {
    currentImage--
  }

  showSlider();
}

// Eventos
nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", prevSlide);
