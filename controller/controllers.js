(function() {

  "use strict";

  var App = angular.module("App.controllers", []);


  App.controller("HomeCtrl", ["$scope", function ($scope){
    $scope.titleread = "skyler kidd";

    $scope.insertchar = function(c) {
      if ($scope.titleread.length < 16) {
        $scope.titleread = $scope.titleread + c;
      }
    }
  }]);

  App.controller("AboutCtrl", ["$scope", function ($scope){

  }]);

  App.controller("ContactCtrl", ["$scope", function ($scope){

  }]);

}());
