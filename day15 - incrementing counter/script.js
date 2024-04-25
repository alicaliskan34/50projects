let ytNumber = document.querySelector('.ytNumber');
let twFollowers = document.querySelector('.twFollowers');
let fbFollowers = document.querySelector('.fbFollowers');

let ytAboneSayisi = 500;
let twTakipciSayisi = 1000;
let fbTakipciSayisi = 750;

let i = 0;

let myInterval = setInterval(() => {
    i++;

    if (i <= ytAboneSayisi) {
        ytNumber.textContent = i;
    }

    if (i <= twTakipciSayisi) {
        twFollowers.textContent = i;
    }

    if (i <= fbTakipciSayisi) {
        fbFollowers.textContent = i;
    }

    if (i >= ytAboneSayisi && i >= twTakipciSayisi && i >= fbTakipciSayisi) {
        clearInterval(myInterval);
    }
}, );