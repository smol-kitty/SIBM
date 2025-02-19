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
  const images = document.querySelectorAll(".image");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.01 }
  );

  images.forEach((image) => {
    observer.observe(image);
  });
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideContent = [
  "EOTY: A multi-round quest to uncover the most resilient and impactful entrepreneurs, this competition is a testament to grit, adaptability, and vision. Participants face a series of rigorous challenges designed to test their ability to leverage challenges into opportunities, showcasing the essence of a true survival entrepreneur.",
  "Sattva: Keynote speaker sessions, a key highlight of E-SUMMIT. These sessions go beyond simply sharing knowledge— they offer a unique opportunity for students to engage with and draw inspiration from the journeys and experiences of industry leaders.",
  "Stack the Stock: An immersive competition where participants compete in a simulated stock trading environment. Drawing from the insights and expertise of seasoned professionals, students learn key investment strategies, and compete for highest portfolio valuation.",
  "Startup Expo: Where potential converges with opportunity, the Startup Expo will showcase the latest innovations from emerging startups. The Expo invites entrepreneurs to present their products and services to an enthusiastic audience.",
  "Startup SYMposium: A networking event connecting students with alumni, entrepreneurs, and industry experts, fostering collaboration and idea exchange. It provides a platform to build connections and explore opportunities for future collaborations.",
  `Tank Shark: In this innovative twist, students will step into the shoes of investors, taking on the role of "sharks" in this Reverse Shark Tank experience that promises both excitement and educational value. As studentinvestors, they are tasked with deciphering the valuation of some well-known ventures.`,
  "The Biz Clash: A dynamic forum where participants tackle compelling topics on entrepreneurship. This event pushes participants to think on their feet, articulate wellreasoned arguments, and defend their perspectives and gain insights into the diverse views that shape the entrepreneurial landscape.",
  "The Pitch’25: The flagship business plan competition designed to emphasize creativity, feasibility, and clarity. This event welcomes early-stage ideas that are yet to generate revenue, making it a perfect arena for budding entrepreneurs to bring fresh ideas to life.",
];

let slideLink = [
  "https://unstop.com/o/CBIvkTq?lb=HFfVIKn&utm_medium=Share&utm_source=shortUrl",
  "",
  "https://unstop.com/o/IfwECvV?lb=4BQeLcE&utm_medium=Share&utm_source=shortUrl",
  "https://unstop.com/o/aql6IeH?lb=4BQeLcE",
  "https://unstop.com/o/2wc8ghB?lb=HFfVIKn&utm_medium=Share&utm_source=shortUrl",
  "https://unstop.com/o/ajW6ZrC?lb=HFfVIKn&utm_medium=Share&utm_source=shortUrl",
  "https://unstop.com/o/ANYufqw?lb=4BQeLcE&utm_medium=Share&utm_source=shortUrl",
  "https://unstop.com/o/ea0F2UM?lb=4BQeLcE&utm_medium=Share&utm_source=shortUrl",
];

let index = 0;
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
  document.getElementsByClassName("slide-text")[0].textContent =
    slideContent[index];
  if (index == 1) {
    document.getElementsByClassName("slide-link")[0].style.opacity = "0";
  } else {
    document.getElementsByClassName("slide-link")[0].style.opacity = "1";
  }
  document.getElementsByClassName("slide-link")[0].href = slideLink[index];
  const viewportWidth = window.innerWidth;
  let offset;

  if (viewportWidth < 1500) {
    offset = index * -100;
    slider.style.transform = `translateX(${offset}%)`;
  } else {
    offset = (index - 1) * -33.33;
    slider.style.transform = `translateX(${offset}%)`;
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  prevBtn.classList.toggle("hidden", index === 0);
  nextBtn.classList.toggle("hidden", index === slides.length - 1);
}

window.addEventListener("resize", () => {
  updateSlider();
});
