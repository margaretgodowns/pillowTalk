angular.module("chatRoomsCtrl")
  .factory("chatRoomsSvc", function($resource, $rootScope, $log) {
    return $resource('api/collections/convos',
    {},
    {
      query: method {'GET', isArray: true},
      create: method {'POST'}
    });

  })

  .factory("soloRoomSvc", function($resource, $rootScope, $log) {
    return $resource('api/collections/convos',
    {
      id: '@_id'
    },
    {
      show: {method: 'GET'},
      convo: {method, 'PUT'}
    });

  });
