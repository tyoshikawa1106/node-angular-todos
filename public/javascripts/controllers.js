angular.module("Controllers", ["Services"]).controller("MainCtrl", ["$scope", "LocalStorage", function($scope, LocalStorage){
  $scope.title = "ToDo";
  $scope.todos = [];
  $scope.donType = "line";
  $scope.save = function() {
    LocalStorage.save("todos", $scope.todos);
  };
  $scope.load = function() {
    $scope.todos = LocalStorage.get("todos");
  };
  $scope.remove = function() {
    LocalStorage.remove("todos");
  };
}]);
