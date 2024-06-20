const slides = document.querySelectorAll(".slide");
let slideIndex = 0;


function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    //   dots[i].classList.remove("active");
    }
  
    slideIndex++;
  
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  
    slides[slideIndex - 1].classList.add("active");
    // dots[slideIndex - 1].classList.add("active");
  
    setTimeout(showSlides, 5000);
  }

  showSlides();