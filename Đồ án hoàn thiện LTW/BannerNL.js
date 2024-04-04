
let bannerIndex = 0;
  const bannerSlide = document.querySelector('.banner-slide');
  const bannerItems = document.querySelectorAll('.banner-item');
  const totalBannerItems = bannerItems.length;

  function nextSlide() {
      bannerIndex = (bannerIndex + 1) % totalBannerItems;
      updateSlide();
  }

  function updateSlide() {
      const offsetX = -bannerIndex * 100;
      bannerSlide.style.transform = `translateX(${offsetX}%)`;
  }

  setInterval(nextSlide, 2000); // Chuyển slide mỗi 3 giây