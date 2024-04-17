let text = document.querySelector('.text');
let button = document.querySelector('.button');

button.addEventListener('click', generateJoke);




// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then((data) => {
//         console.log(data)
//         text.innerHTML= data.joke;
//         }
//     );
// }


// async

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json();
    text.innerHTML= data.joke;
}


generateJoke();

