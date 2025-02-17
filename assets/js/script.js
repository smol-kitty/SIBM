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

let index = 1; // Start at first image centered
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
  const offset = (index - 1) * -33.33;
  slider.style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  prevBtn.classList.toggle("hidden", index === 0);
  nextBtn.classList.toggle("hidden", index === slides.length - 1);
}
