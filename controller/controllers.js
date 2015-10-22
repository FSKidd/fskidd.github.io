(function() {

  "use strict";

  var App = angular.module("App.controllers", []);


  App.controller("HomeCtrl", ["$scope", function ($scope){
    $scope.titleread = "skyler kidd";
  }]);

  App.controller("AboutCtrl", ["$scope", function ($scope){

  }]);

  App.controller("ContactCtrl", ["$scope", function ($scope){

  }]);

}());
