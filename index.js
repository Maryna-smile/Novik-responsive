
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".nav-list");

burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  burgerMenu.classList.toggle("burger-menu");
})