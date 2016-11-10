(function () {
    "use strict";

    angular
        .module("movie")
        .controller("MainController", MainController);

    MainController.$inject = ["movieService"];
    function MainController(movieService) {

        var mainVm = this;

        mainVm.addMovie = addMovie;
        mainVm.deleteMovie = deleteMovie;

        init();

        function init() {
            mainVm.title = "MovieFlix";

            mainVm.sorter = {
                sortBy:"Title",
                sortOrder:false
            };

            movieService.getMovies()
                .then(function (data) {
                    mainVm.movies = data;
                })
                .catch(function (error) {
                    console.log(error);
                })

        }

        function addMovie() {
            mainVm.movies.unshift(mainVm.newMovie);
            mainVm.newMovie = null;
        };

        function deleteMovie(Title) {
        _.remove(mainVm.movies,function (movie) {
            return movie.Title === Title;
        });
        }


    }

})();
