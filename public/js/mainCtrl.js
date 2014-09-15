angular.module("pillowTalk")
  .controller("mainCtrl", function($rootScope, $scope, $location, $log, $routeParams, $route, $cookies, $cookieStore, mainSvc) {

    $scope.user = mainSvc.userName;
    console.log($scope.user);

    $scope.getConvos = function() {
      mainSvc.getConvos().success(function(convos) {
        $scope.thisUser = $scope.user;
        $scope.user = users;
      });
    };

    $scope.createUser = function(userName) {
      mainSvc.createUser(userName);
      $location.path("/chatroom");
    };



    $scope.addConvo = function(convo) {
      var convo = {
        name: $scope.user,
        content: convo.content,
        date: new Date()
      };

      mainSvc.addConvo(convo);
      $scope.submitConvo = {};
    };


  });
