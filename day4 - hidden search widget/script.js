let button = document.querySelector(".button");
let input = document.querySelector(".input")

button.addEventListener(`click`,()=>{
    input.classList.toggle("show");
    button.classList.toggle("showBtn");
    input.focus();
})