let openMenu = document.querySelector(".openMenu");
let menuDiv = document.querySelector(".menu");
let closeMenu = document.querySelector(".closeMenu");

let container = document.querySelector(".container");


let yanMenu = document.querySelector(".yanMenu");

openMenu.addEventListener("click",()=>{
    container.classList.toggle("show");
    menuDiv.classList.toggle("menushow")
    yanMenu.classList.toggle("yanMenuShow");

});

closeMenu.addEventListener("click",()=>{
    container.classList.toggle("show");
    menuDiv.classList.toggle("menushow");
    yanMenu.classList.toggle("yanMenuShow");
});


