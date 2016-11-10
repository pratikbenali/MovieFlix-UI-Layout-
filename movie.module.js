(function () {
    "use strict";

    angular.module("movie",["ngMessages","ngRoute"])
        .config(moduleConfig)
        .run(moduleRun);

    moduleConfig.$inject = ["$routeProvider"];
    function moduleConfig($routeProvider) {
     $routeProvider
         .when("/movie-list", {
             templateUrl:"movie-list.tmpl.html",
             controller:"MovieListController",
             controllerAs:"movieListVm"
         })
         .when("/movie-detail/:Title", {
             templateUrl:"movie-detail.tmpl.html",
             controller:"MovieDetailController",
             controllerAs:"movieVm"
         })
         .when("/add-movie", {
             templateUrl:"add-movie.tmpl.html",
             controller:"AddMovieController",
             controllerAs:"addMovieVm"
         })
         .otherwise({
             redirectTo:"/movie-list"
         });

    }

    moduleRun.$inject = [];
    function moduleRun() {
        console.log("App started");
    }

})();

