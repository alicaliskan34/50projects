let eventkeydiv = document.querySelector('.eventkeydiv');

let eventkeyCode = document.querySelector('.eventkeyCode');

let eventcode = document.querySelector('.eventcode');



window.addEventListener('keydown', (e)=>{
    console.log(e);
    eventkeydiv.textContent = e.key;
    eventkeyCode.textContent = e.keyCode;
    eventcode.textContent=e.code;
    
})