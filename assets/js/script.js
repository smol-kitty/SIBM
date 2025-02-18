/* Header Section Begins */
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    document.getElementsByClassName("header")[0].classList.add("fixed");
    document.getElementsByClassName("fest-logo")[0].classList.add("fest-fixed");
    document
      .getElementsByClassName("gallery")[0]
      .classList.add("gallery-fixed");
  } else {
    document.getElementsByClassName("header")[0].classList.remove("fixed");
    document
      .getElementsByClassName("fest-logo")[0]
      .classList.remove("fest-fixed");
    document
      .getElementsByClassName("gallery")[0]
      .classList.remove("gallery-fixed");
  }
});
/* Header Section Ends */

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordions-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      headers.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.classList.remove("active");
          otherHeader.nextElementSibling.classList.remove("open");
        }
      });
      header.classList.toggle("active");
      const content = header.nextElementSibling;
      content.classList.toggle("open");
    });
  });
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0; // Start at the first image
updateSlider();

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

function updateSlider() {
  const viewportWidth = window.innerWidth;
  let offset;

  if (viewportWidth < 1500) {
    // For viewports less than 1500px
    offset = index * -100; // Move the slider by 100% for each slide
    slider.style.transform = `translateX(${offset}%)`;
  } else {
    // For viewports 1500px and wider
    offset = (index - 1) * -33.33; // Move the slider by 33.33% for each slide
    slider.style.transform = `translateX(${offset}%)`;
  }

  // Update active classes for slides and thumbnails
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  // Update button visibility
  prevBtn.classList.toggle("hidden", index === 0);
  nextBtn.classList.toggle("hidden", index === slides.length - 1);
}

// Handle window resize to dynamically adjust the slider
window.addEventListener("resize", () => {
  updateSlider();
});
