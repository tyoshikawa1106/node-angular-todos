angular.module("ToDo", ["Controllers", "ngRoute", "Directives"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "MainCtrl",
    templateUrl : "/partials/main.html"
  });
}]);
