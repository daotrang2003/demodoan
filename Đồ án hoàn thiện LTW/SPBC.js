let currentIndex = 0;
  const slides = document.querySelectorAll('.sp');
  const totalSlides = slides.length;

  function nextSlidee() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidee();
  }

  function prevSlidee() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidee();
  }

  function updateSlidee() {
      if (currentIndex === totalSlides - 1) {
      offsetX = -100; // Slide cuối cùng
  } else {
      offsetX = -currentIndex * (100 / totalSlides);
  }
     document.querySelector('.san-pham').style.transform = `translateX(${offsetX}%)`;

}

  document.querySelector('.arrow-left').addEventListener('click', function() {
      prevSlidee();
  });

  document.querySelector('.arrow-right').addEventListener('click', function() {
      nextSlidee();
  });
