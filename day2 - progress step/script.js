let ilerleme = document.querySelector(".ilerleme");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let numbers = document.querySelectorAll(".number");

let ilerlemeYüzdesi = 0;
let id = 0;

prev.disabled=true;

next.addEventListener("click", () => {
    ilerlemeYüzdesi += 33;
    ilerleme.style.width = `${ilerlemeYüzdesi}%`
    id++;
    numbers[id].classList.add("active");
    if (ilerlemeYüzdesi == 99) {
        next.disabled = true;
    }
    if (ilerlemeYüzdesi > 0) {
        prev.disabled = false;
    }
})

prev.addEventListener("click", () => {
    ilerlemeYüzdesi -= 33;
    Math.abs(ilerlemeYüzdesi);
    ilerleme.style.width = `${ilerlemeYüzdesi}%`;

    numbers[id].classList.remove("active");
    id--;

    if (ilerlemeYüzdesi < 99) {
        next.disabled = false;
    }

    if (ilerlemeYüzdesi === 0) {
        prev.disabled = true;
    }

})



