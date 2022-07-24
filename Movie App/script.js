// we use moviedb api for creating this site
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5dfc88a740554fa0bda478442d2a734c&page=1'
// this is for retrieving images from their site
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// this is for search box, if someone hit ,hard , it will recommmend all movie with title related to hard.
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=5dfc88a740554fa0bda478442d2a734c&query="'


const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
// we get the movie through our API key.
getMovies(API_URL)

// instead of async await we can also use then but that will become cumbersome, so we use this.
async function getMovies(url){
    // we fetch the api url 
    const res = await fetch(url)
    // then we get the data through json format.
    const data = await res.json()
    // then we show the movie through data results.
showMovies(data.results)
}

function showMovies(movies){
    // so when showMovies method is encountered , we don't need to add movie in our site instead we want to replace our default to the data result.
    // so initially when showMovie enountered our main will become empty.
    main.innerHTML = ''
    // and from result (we used foreach in our data.result) from particular data , excess only title, poster_path, vote_average and overview
    movies.forEach((movie) => {
        // in simple we are pulling these things from a movie .
        const { title, poster_path, vote_average, overview} = movie
        // we created a new element and added movie in this and changed it's inner content.
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
         // poster path only include the image name not the path that's why we added IMG_PATH to it.
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}"
             alt=${title}">
             <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
             </div>
             <div class="overview">
                <h3>Overview</h3>
                ${overview}
             </div>
        
        
        `
        // now adding everything in our main element ,that is our final website.
        main.appendChild(movieEl);
    })
}

// this function is for changing the color our votes , accordingly.
function getClassByRate(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}
// when we enter something in search tab and hit submit then this event will be fired.
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchTerm = search.value
    // if our searchTerm exist and it is not empty then , get movie based on url and adding the search item at it's end.
    // like https://moviedb.com/avengers.
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm)
        // then after get the movie recommendation , clear the search box to empty string.
        search.value = ''

    }
    // but if the searchTerm is invalid or empty then kindly reload the window.
    else{
        window.location.reload()
    }
})