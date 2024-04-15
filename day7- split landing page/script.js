let playstation = document.querySelector(".ps");
let xbox = document.querySelector(".xbox");


playstation.addEventListener("mouseenter",()=>{
    playstation.classList.add("active");
})

xbox.addEventListener("mouseenter",()=>{
    xbox.classList.add("active");
});


playstation.addEventListener("mouseleave",()=>{
    playstation.classList.remove("active");
})


xbox.addEventListener("mouseleave",()=>{
    xbox.classList.remove("active");
})

