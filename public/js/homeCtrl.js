angular.module("pillowTalk")
  .controller("homeCtrl", function($scope, $location, $log, $routeParams, $route, $cookies, $cookieStore, chatService) {

  $scope.createUser = function(newUser) {
  chatService.createUser(newUser);
  $location.path('/chatroom');
  
};
});
