let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  // Ensure the index is within the valid range
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

// Show the initial slide when the page loads
showSlides();
