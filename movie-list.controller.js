(function () {
    "use strict";

    angular
        .module("movie")
        .controller("MovieListController", MovieListController);

    MovieListController.$inject = ["movieService"];
    function MovieListController(movieService) {

        var movieListVm = this;


        init();

        function init() {

            movieListVm.sorter = {
                sortBy:"Title",
                sortOrder:false
            };

            movieService.getMovies()
                .then(function (data) {
                    movieListVm.movies = data;
                })
                .catch(function (error) {
                    console.log(error);
                })

        }


        // movieListVm.addMovie = addMovie;
        // movieListVm.deleteMovie = deleteMovie;
        //
        // function addMovie() {
        //     movieListVm.movies.unshift(mainVm.newMovie);
        //     movieListVm.newMovie = null;
        // };
        //
        // function deleteMovie(Title) {
        //     _.remove(movieListVm.movies,function (movie) {
        //         return movie.Title === Title;
        //     });
        // }


    }

})();

