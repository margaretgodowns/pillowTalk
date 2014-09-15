'use strict';
angular.module("pillowTalk")
  .factory('mainSvc', function($route, $rootScope, $log, $http, $cookies, $cookieStore) {

    var createUser = function(userName) {
      $cookieStore.put("name", userName);
      $rootScope.$broadcast("user:created");
      console.log("user:created");
    };

    var userName = $cookieStore.get("name");

    var urlBaseConvo = "/api/collections/convo";

    var getConvo = function() {
      return $http.get(urlBaseConvo);

    };

    var addConvo = function(convo) {
      $cookieStore.post(urlBaseConvo, convo).success(function(response) {
        $rootScope.$broadcast("convo:added");
        $log.info("convo:added");
      });

    };

    var urlBaseUsers = "api/collections/users";

    var getUsers = function() {
      return $http.get(urlBaseUsers);

    };

    return{
      createUser: createUser,
      getConvo: getConvo,
      addConvo: addConvo,
      getUsers: getUsers
    }
  })
