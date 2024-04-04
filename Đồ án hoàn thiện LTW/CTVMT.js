
document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".slideshow-CTVMT img");
  var currentImageIndex = 0;
  var slideInterval = setInterval(nextSlide, 3000); 

  function nextSlide() {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
  }
});