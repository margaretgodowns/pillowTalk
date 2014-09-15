angular.module("chatRoomsCtrl", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
    .when("/chatroom:id", {
      templateUrl: "views/chatrooms.html",
      controller: "chatRoomsCtrl"
    });
  });
