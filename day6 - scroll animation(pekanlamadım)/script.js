const boxs = document.querySelectorAll(".boxs");

window.addEventListener("scroll", checkBoxs);

checkBoxs()

function checkBoxs() {
   const trigerBottom = window.innerHeight / 5 * 4 ;

    boxs.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        
        if(boxTop<trigerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}


