(function() {

  "use strict";

  console.log("Hello1");

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
           templateUrl: 'view/about.html',
           controller: 'AboutCtrl'
      })
      .otherwise({redirectTo : '/'});
  });

}());
