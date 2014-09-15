'use strict';

angular
  .module('pillowTalk', [
    'mainCtrl',
    'ngCookies',
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainCtrl'
      })

    .when('/chatroom', {
      templateUrl: 'views/chatRoom.html',
      controller: 'mainCtrl'
      })

    .otherwise({
      redirectTo: '/'
      });

  });
