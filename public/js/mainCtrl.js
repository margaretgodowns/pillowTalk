angular.module("pillowTalk")
  .controller("mainCtrl", function($scope, $location, $log, $routeParams, $route, $cookies, $cookieStore, $interval, chatService) {

  $interval(function() {
  chatService.getMessages().success(function(messages) {
    $scope.messages = messages;
  })
  }, 500);

  chatService.getUsers().success(function(users) {
    $scope.users = users;
  });



  $scope.logout = function() {

    angular.forEach($scope.users, function(user) {
      if($scope.currentUser === user.name) {
        chatService.deleteUser(user._id)
      }
    });
    $location.path("/");



  };

  $scope.$on("user:added", function() {
    $scope.currentUser = chatService.getCurrentUser.name;
  });



  $scope.createMessage = function(newMessage) {
    var modifiedMsg = {
      content: newMessage.content,
      author: $scope.currentUser
    };
    chatService.createMessage(modifiedMsg);
  };




  });
