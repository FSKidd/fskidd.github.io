(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
           templateUrl: 'view/about.html',
           controller: 'AboutCtrl'
      })
      .when('/contact', {
           templateUrl: 'view/contact.html',
           controller: 'ContactCtrl'
      })
      .otherwise({redirectTo : '/'});

    //$locationProvider.html5Mode(true); // Fix urls someday.
  }]);

}());
