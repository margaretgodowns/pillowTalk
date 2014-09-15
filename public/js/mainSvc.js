'use strict';
angular.module("pillowTalk")
  .factory('chatService', function($rootScope, $http, $cookieStore) {



    var messagesCollectionUrl = "/api/collections/convo";
    var usersCollectionUrl = "api/collections/users";
    var getCurrentUser = $cookieStore.get('currentuser');

    //GET users

    var getUsers = function() {
      return $http.get(usersCollectionUrl);
    };

    //POST new User to Users

    var createUser = function(newUser) {
      if(getCurrentUser && getCurrentUser.name === newUser.name) return;

      $cookieStore.put('currentuser', newUser);

      $http.post(usersCollectionUrl, newUser).then(function(response) {

        $rootScope.$broadcast('user:added');
        return newUser;
      });
    };

    var deleteUser = function(userId) {
      $cookieStore.remove('currentUser');
      $http.delete(usersCollectionUrl + "/" + userId).then(function(response) {
        $rootScope.$broadcast('user:deleted');
      });
    };


    //GET Messages

    var getMessages = function() {
      return $http.get(messagesCollectionUrl);
    };

    //POST new Message to Messages

    var createMessage = function(newMessage) {
      $http.post(messagesCollectionUrl, newMessage).then(function(response) {
        
        $rootScope.$broadcast('message:added');
      });

    };


    return{
      getUsers: getUsers,
      createUser: createUser,
      deleteUser: deleteUser,
      getCurrentUser: getCurrentUser,
      getMessages: getMessages,
      createMessage: createMessage

    };
  });
