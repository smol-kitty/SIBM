/* Header Section Begins */
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    document.getElementsByClassName("header")[0].classList.add("fixed");
    document.getElementsByClassName("fest-logo")[0].classList.add("fest-fixed");
  } else {
    document.getElementsByClassName("header")[0].classList.remove("fixed");
    document
      .getElementsByClassName("fest-logo")[0]
      .classList.remove("fest-fixed");
  }
});
/* Header Section Ends */
