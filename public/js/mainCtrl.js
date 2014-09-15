angular.module("pillowTalk")
  .controller("mainCtrl", function($scope, $location, $log, $routeParams, $route, $cookies, $cookieStore, chatService) {



  chatService.getUsers().success(function(users) {
    $scope.users = users;
  })

  $scope.createUser = function(newUser) {
    chatService.createUser(newUser);
    $location.path('/chatroom');
  };

  $scope.$on("user:added", function() {
    $scope.currentUser = chatService.getCurrentUser.name;
  });

  chatService.getMessages().success(function(messages) {
    $scope.messages = messages;
  })

  $scope.createMessage = function(newMessage) {
    chatService.createMessage(newMessage);
    $location.path('/chatroom');
  };

//confused on current message
  // $scope.$on("message:added", function() {
  //   $scope.message = chatService.getMessage
  // })


  });
