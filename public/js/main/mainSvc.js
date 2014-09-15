angular.module("mainCtrl")
  .factory("mainSvc", function($resource, $rootScope, $log) {
    return $resource ('api/collections/users',
      {},
      {
        query: {method: 'GET', isArray: true},
          create: {method: 'POST'},
      });
  });
