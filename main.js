const mobMenu = document.querySelector(".mob-menu");
const mobNav = document.querySelector(".mob-nav");
const logSign = document.querySelector(".mob-login-signup");
const navList = document.querySelectorAll(".list");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

const listA = document.querySelector(".list-a");
const listB = document.querySelector(".list-b");
const listC = document.querySelector(".list-c");
const listD = document.querySelector(".list-d");
const loginBtn = document.querySelector(".login");
const signupBtn = document.querySelector(".signup");

openBtn.addEventListener("click", () => {
  openMenu.classList.toggle("display-none");
  closeMenu.classList.toggle("display-flex");
  listA.classList.toggle("list-a-t");
  listB.classList.toggle("list-b-t");
  listC.classList.toggle("list-c-t");
  listD.classList.toggle("list-d-t");
  loginBtn.classList.toggle("login-t");
  signupBtn.classList.toggle("signup-t");
  // navList.classList.toggle("list-index");
});
closeBtn.addEventListener("click", () => {
  // navList.classList.toggle("list-index");
  openMenu.classList.toggle("display-none");
  closeMenu.classList.toggle("display-flex");
  listA.classList.toggle("list-a-t");
  listB.classList.toggle("list-b-t");
  listC.classList.toggle("list-c-t");
  listD.classList.toggle("list-d-t");
  loginBtn.classList.toggle("login-t");
  signupBtn.classList.toggle("signup-t");
});
