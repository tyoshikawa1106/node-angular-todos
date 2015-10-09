angular.module("Controllers", ["Services", "ngResource"]).controller("MainCtrl", ["$scope", "$resource", function($scope, $resource){
  $scope.title = "Todo";
  $scope.todos = [];
  $scope.doneType = "line";
  var todoModel = $resource("/todos");
  $scope.save = function(){
    todoModel.save({type : "todo", todos : $scope.todos});
  };
  $scope.load = function(){
    $scope.todos = todoModel.query({type : "todo"});
  };
  $scope.remove = function(){
    todoModel.remove({type : "todo"});
    $scope.todos = [];
  };
}]);
