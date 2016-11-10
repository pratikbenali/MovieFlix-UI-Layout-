(function () {
    "use strict";

    angular
        .module("movie")
        .controller("MovieDetailController", MovieDetailController);

    MovieDetailController.$inject = ["movieService","$routeParams"];
    function MovieDetailController(movieService,$routeParams) {

        var movieVm = this;


        init();

        function init() {

                movieService
                    .getMovie($routeParams.Title)
                    .then(function (data) {
                       movieVm.movie = data;
                    }, function (error) {
                        console.log(error);
                    })


            // movieVm.sorter = {
            //     sortBy:"Title",
            //     sortOrder:false
            // };
            //
            // movieService.getMovies()
            //     .then(function (data) {
            //         movieVm.movies = data;
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     })

        }

    }

})();

