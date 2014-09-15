angular.module("chatRoomsCtrl")
  .controller("chatRoomsCtrl", function($rootScope, $scope, $location, $log, $routeParams, chatRoomsSvc, soloRoomSvc) {

    $scope.soloRoom = soloRoomSvc.show({id: $routeParams.id});

    $scope.newConvo = {};

    $scope.user = user;

    $scope.convo = function(chatroom) {
      console.log("convo starting");
      $scope.newConvo.author = user.name;
      chatroom.convos.push($scope.newConvo);
      soloRoomSvc.convo(chatroom);
      $scope.newConvo = {};

    };
  })
