'use strict';

angular
  .module('pillowTalk', [
    'ngCookies',
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'homeCtrl'
      })

    .when('/chatroom', {
      templateUrl: 'views/chatRoom.html',
      controller: 'mainCtrl'
      })

    .otherwise({
      redirectTo: '/'
      });

  });
