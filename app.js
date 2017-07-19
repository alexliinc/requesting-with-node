var movie = require("./movie");

var threeFavoriteMovies = ["one","two","three"];

threeFavoriteMovies.forEach(function(film){
  // your code here
  movie(film);
});

module.exports = threeFavoriteMovies;
