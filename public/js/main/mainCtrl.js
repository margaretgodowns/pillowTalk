angular.module("mainCtrl")
  .controller("mainCtrl", function($rootScope, $scope, $location, $log, $routeParams, mainSvc, chatRoomsSvc) {

    $scope.createUser = function(user) {
      var user = {
        name: user.name
      };

      mainSvc.create(user);
      $rootScope.$broadcast("user:created");
      $location.path("/homePage");
    };

    $scope.users = mainSvc.query();

    $scope.createChatroom = function(chatroom) {
      var chatroom = {
        name: chatroom.name,
        convos: [],
        date: Date()
      };

      console.log(chatroom);
      chatRoomsSvc.create(chatroom);
      $rootScope.broadcast("chatroom:created");
    };

    $rootScope.$on("chatroom:created", function() {
      $scope.chatrooms = chatRoomsSvc.query();
    });

    $scope.chatrooms = chatRoomsSvc.query();


  });
