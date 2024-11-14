const burgerBtn = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector(".header-nav");

burgerBtn.addEventListener("click", () => {
  if (burgerMenu.classList.contains("open")) {
    burgerMenu.classList.remove("open");
    burgerBtn.classList.remove("active");
  } else {
    burgerMenu.classList.add("open");
    burgerBtn.classList.add("active");
  }
});
