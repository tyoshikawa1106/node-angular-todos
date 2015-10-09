angular.module("Directives", []).directive("addTodo", function(){
  return {
    restrict : "A",
    replace : true,
    scope : { todos : "=todos" },
    templateUrl : "/partials/button.html",
    link : function(scope, element) {
      var button = angular.element(element.children()[1]);
      button.bind("click", function(){
        scope.todos.push({text : scope.text, done : false});
        scope.text = "";
        scope.$apply();
      });
    }
  };
});