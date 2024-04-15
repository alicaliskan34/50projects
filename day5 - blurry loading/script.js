let container = document.querySelector(".container");
let text = document.querySelector(".text");


let sayi = 0;



const intervalID = setInterval(() => {
    sayi++;
    
    console.log(sayi);
    if (sayi === 100) {
        clearInterval(intervalID); // Döngüyü durdur 
        text.style.display="none";
    }
    text.innerHTML = `${sayi} %`;
    container.style.filter=`blur(${100-sayi}px)`;
    text.style.filter=`blur(${sayi/40}px)`;
    
}, 50);