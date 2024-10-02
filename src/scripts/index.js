const button = document.querySelector(".button1");
const accordions = document.querySelectorAll(".accordion");
const joinchat_button_open = document.querySelector(".joinchat_button_open");
const joinchat_tooltip = document.querySelector(".joinchat_tooltip");

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let nav = document.querySelector(".nav_list");

setTimeout(() => {
  button.style.opacity = 1;
  joinchat_button_open.style.opacity = 1;
}, 3000);

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const content = accordion.nextElementSibling;
    const icon = accordion.querySelector("i");
    //content.classList.toggle('active');
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    accordion.classList.toggle("active");
  });
});

function menuShow() {
  if (nav) {
    nav.classList.toggle("open");
  }
  if (line1) {
    line1.classList.toggle("transform-line1");
  }
  if (line2) {
    line2.classList.toggle("transform-line2");
  }
  if (line3) {
    line3.classList.toggle("transform-line3");
  }
}

function tooltipShow() {
  joinchat_tooltip.style.opacity = 1;
}

function tooltipHide() {
  joinchat_tooltip.style.opacity = 0;
}
