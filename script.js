// http://www.omdbapi.com/?i=tt3896198&apikey=e5f18a39
// http://img.omdbapi.com/?apikey=[yourkey]&
const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');

//function to fetch movie details using OMDB API
const getMovieInfo = async (movie)=>{
    const myApiKey = "e5f18a39";
    const url = `https://www.omdbapi.com/?apikey=${myApiKey}& t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    showMovieData(data);
    
}

//Function to show movie data on screen
const showMovieData = (data)=>{
    //Use destructruing assignment to extract properties from data object
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;

}

// Adding event listner to search form 
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(inputBox.value);
    const movieName = inputBox.value.trim();
    if(movieName !== ''){
        getMovieInfo(movieName);
    }
})