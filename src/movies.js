// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray = moviesArray.map(currentMovie =>  currentMovie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray === null){
        return 0;
    }
    if (moviesArray.length === 0){
        return 0;
    }
    const stevenMovies = moviesArray.filter( currentMovie => { 
        const stevenSpielberg = currentMovie.director ===  "Steven Spielberg"; 
        const stevenDrama = currentMovie.genre && currentMovie.genre.includes("Drama");
        return stevenSpielberg && stevenDrama;
});
return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
    if (moviesArray.length === 0){
        return 0;
}
let result = moviesArray.reduce((accumulator, currentValue) => {
    if (currentValue.score){
        return accumulator + currentValue.score
    } else {
        return accumulator
    }}, 0)

    let ave = result / moviesArray.length
    return Number(ave.toFixed(2))
}
    /* if (moviesArray.length === 0){
        return 0;
    }
    const filteredArray = moviesArray.filter(movie => typeof movie.score === 'number');
    if (scores.length === 0) {
        return 0;
    }
    const result = filteredArray.reduce((accumulator, currentValue) =>  accumulator + currentValue, 0);
    const ave = result / moviesArray.length;
    return Number(result.toFixed(2)); 
} incomplete way!! try again later for a better understanding. For now use joshua's way*/  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(moviesArray.filter(currentMovies => currentMovies.genre.includes("Drama") )); }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortingMovies = [...moviesArray]
    let finalSorting = sortingMovies.sort((a, b) => {
    if (a.year > b.year){
        return 1
    } else if (a.year < b.year){
        return -1
    } else if (a.year === b.year){
        if (a.title > b.title) {
            return 1
        } else if (a.title < b.title) {
        return -1
        } else {
            return 0
        }
    }
})
return finalSorting 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderArray = [...moviesArray]
    let moviesOrder = orderArray.sort((a, b) => {
        if (a.title > b.title){
            return 1
        } else if (a.title < b.title){
            return -1
        } else {
            return 0
        }
    })
    let alpha = orderArray.slice(0,20).map(movie => movie.title)
    return alpha
} 

/*    const orderArray = [...moviesArray]
    let moviesOrder = orderArray.sort((a , b) => a.title.localeCompare(b.title));
    const alpha = moviesOrder.map(({title}) => );
    return alpha.slice(0, 20);
}  TRY DOING IT THIS WAY! SHORTER BUT NEED MORE CONCENTRATION */

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
