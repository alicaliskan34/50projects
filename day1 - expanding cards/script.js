let fotolar = document.querySelectorAll(".card");


fotolar.forEach(foto => {
foto.addEventListener("mouseover",(e)=>{
    foto.classList.add("active");
});

foto.addEventListener("mouseout",(e)=>{
    foto.classList.remove("active");
})
});