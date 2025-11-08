// one_page_website.js
// Lightbox slideshow with navigation + thumbnails

document.addEventListener("DOMContentLoaded", function () {
  const thumbImages = document.querySelectorAll(".lightbox-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const thumbsContainer = document.getElementById("lightbox-thumbs");

  const slides = [];
  let currentIndex = 0;

  // Build slides + lightbox thumbnails
  thumbImages.forEach((img, index) => {
    const largeSrc = img.getAttribute("data-large") || img.src;
    const altText = img.alt || "";

    slides.push({ largeSrc, alt: altText });

    const thumb = document.createElement("img");
    thumb.src = img.src;
    thumb.alt = altText;
    thumb.dataset.index = index;
    thumb.addEventListener("click", () => showSlide(index));
    thumbsContainer.appendChild(thumb);

    img.addEventListener("click", () => openLightbox(index));
  });

  function openLightbox(index) {
    currentIndex = index;
    showSlide(currentIndex);
    lightbox.style.display = "block";
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImage.src = "";
    lightboxCaption.textContent = "";
  }

  function showSlide(index) {
    if (slides.length === 0) return;
    if (index < 0) currentIndex = slides.length - 1;
    else if (index >= slides.length) currentIndex = 0;
    else currentIndex = index;

    const slide = slides[currentIndex];
    lightboxImage.src = slide.largeSrc;
    lightboxCaption.textContent = slide.alt;
    lightboxCounter.textContent = `${currentIndex + 1} / ${slides.length}`;

    // highlight active thumb
    const allThumbs = thumbsContainer.querySelectorAll("img");
    allThumbs.forEach(t => t.classList.remove("active"));
    if (allThumbs[currentIndex]) allThumbs[currentIndex].classList.add("active");
  }

  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    showSlide(currentIndex - 1);
  });
  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    showSlide(currentIndex + 1);
  });
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox.style.display === "block") closeLightbox();
  });
});
