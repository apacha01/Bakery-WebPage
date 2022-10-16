/*
	//MENU BUTTON (ON TOP RIGHT PART OF SCREEN)
*/
let menuBtn = document.querySelector(".menu--icon");
let menu = document.querySelector(".menu");

menuBtn.addEventListener('click', function (){
	menu.classList.toggle('mostrar');
});