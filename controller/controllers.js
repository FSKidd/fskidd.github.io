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
      for (var i = $scope.console_read.length - 1; i > 1; i--) {
        $scope.console_read[i] = $scope.console_read[i-1];
      };
      $scope.console_read[1] = "> " + $scope.console_read[0];
      $scope.console_read[0] = "";
    };
    $scope.enter = function() {
      if ($scope.console_read[0].length > 0) {
        var command = $scope.console_read[0];
        $scope.shift_console();
        // TODO -
        if (command === "help"){
          $scope.insert_line("Recognized commands:");
          $scope.insert_line("help");
        }
        else if (command === "resume") {
          
        }
        else {
          $scope.insert_line("Command not recognized!");
        }
      };
    };
    $scope.insert_line = function(m) {
      for (var i = $scope.console_read.length - 1; i > 1; i--) {
          $scope.console_read[i] = $scope.console_read[i-1];
      };
      $scope.console_read[1] = m;
    };
  }]);

  App.controller("AboutCtrl", ["$scope", function ($scope){

  }]);

  App.controller("ContactCtrl", ["$scope", function ($scope){

  }]);

}());
