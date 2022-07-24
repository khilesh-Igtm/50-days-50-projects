const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click',generatejoke)
generatejoke()

//////////////////////////////////////////////////////////////////////////
////////////////// USING ASYNC/AWAIT

async function generatejoke() {
    const config = {
        headers:{
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com',config)
    const data = await res.json()
    joke.innerHTML = data.joke
    
}

///////////////////////////////////////////////////////////////////////////
///////////////// ANOTHER WAYS OF DOING


// function generatejoke() {
//     const config = {
//         headers:{
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com',config)
//     .then((res)=> res.json()).then((data)=>{
//         joke.innerHTML = data.joke
//     }
//     )
// }