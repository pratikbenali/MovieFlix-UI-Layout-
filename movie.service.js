(function () {
    "use strict";

    angular
        .module("movie")
        .service("movieService", movieService);
    
    movieService.$inject = ["$http","$q"];
    function movieService($http, $q) {
        var self = this;

        self.getMovies = getMovies;
        self.getMovie = getMovie;
        self.createMovie = createMovie;
        
        function getMovies() {
           return $http.get("data.json")
                .then(sucessFn, errorFn);
        }

        function getMovie(Title) {
            return $http.get("data.json" + Title)
                .then(sucessFn, errorFn);
        }

        function createMovie(movie) {
            return $http.post("data.json", movie)
                .then(sucessFn, errorFn);
        }
        function sucessFn(response) {
            return response.data        //Will resolve promise
        }
        function errorFn(response) {
            return $q.reject(error.status);    //Will reject
        }
    }

})();
