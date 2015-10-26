(function() {

  "use strict";

  var App = angular.module("App.controllers", []);


  App.controller("HomeCtrl", ["$scope", function ($scope){
    $scope.console_read = ["","Hello! Welcome to my site.","","",""];
    $scope.insertchar = function(c) {
      if ($scope.console_read[0].length < 16) {
        $scope.console_read[0] = $scope.console_read[0] + c;
      };
    };
    $scope.deletechar = function() {
      if ($scope.console_read[0].length > 0) {
        $scope.console_read[0] = $scope.console_read[0].substring(0, $scope.console_read[0].length - 1);
      };
    };
    $scope.shift_console = function() {
      for (var i = $scope.console_read.length - 1; i > 0; i--) {
        $scope.console_read[i] = $scope.console_read[i-1];
      };
      $scope.console_read[0] = "";
    };
    $scope.enter = function() {
      if ($scope.console_read[0].length > 0) {
        // TODO
        $scope.shift_console();
      };
    };
  }]);

  App.controller("AboutCtrl", ["$scope", function ($scope){

  }]);

  App.controller("ContactCtrl", ["$scope", function ($scope){

  }]);

}());
