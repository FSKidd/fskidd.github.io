(function() {

  "use strict";

  var App = angular.module("App.controllers", []);


  App.controller("HomeCtrl", ["$scope", function ($scope){
    $scope.console_read = ["","Hello! Welcome to my site.","","",""];
    $scope.insertchar = function(c) {
      if ($scope.console_read[0].length < 16) {
        $scope.console_read[0] = $scope.console_read[0] + c;
      }
    }

    $scope.deletechar = function() {
      if ($scope.console_read[0].length > 0) {
        $scope.console_read[0] = $scope.console_read[0].substring(0, $scope.console_read[0].length - 1);
      }
    }
  }]);

  App.controller("AboutCtrl", ["$scope", function ($scope){

  }]);

  App.controller("ContactCtrl", ["$scope", function ($scope){

  }]);

}());
