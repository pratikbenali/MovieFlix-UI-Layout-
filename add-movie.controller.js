(function () {
    "use strict";

    angular
        .module("movie")
        .controller("AddMovieController", AddMovieController);

    AddMovieController.$inject = ["movieService", "$location"];
    function AddMovieController(movieService, $location) {

        var addMovieVm = this;

        addMovieVm.addMovie = addMovie;
        init();

        function init() {

        }

        function addMovie() {
           movieService
               .createMovie(addMovieVm.newMovie)
               .then(function (data) {
                   $location.path("/movie-list")
               }, function (error) {
                   console.log(error);
               })

        }

    }

})();

