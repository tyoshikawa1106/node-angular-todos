angular.module("Services", []).factory("LocalStorage", ["$window", function($window) {
  var localStorage = $window.localStorage;
  return {
    save : function(key, data) {
      var str = JSON.stringify(data);
      localStorage.setItem(key, str);
    },
    get : function(key) {
      var str = localStorage.getItem(key);
      return JSON.parse(str);
    },
    remove : function(key) {
      return localStorage.removeItem(key);
    }
  };
}]);