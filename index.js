
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".nav-list");
let burgerItem = document.querySelector(".nav-item");

burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  burgerMenu.classList.toggle("burger-menu");
  burgerItem.classList.toggle("burger-item");
})