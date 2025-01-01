// http://www.omdbapi.com/?i=tt3896198&apikey=e5f18a39
// http://img.omdbapi.com/?apikey=[yourkey]&
const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');

// Adding event listner to search form 
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(inputBox.value);
    const movieName = inputBox.value.trim();
    if(movieName !== ''){
        getMovieInfo(movieName);
    }
})