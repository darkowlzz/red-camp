var redCamp = angular.module('redCamp', [
                              'ngRoute', 'ngMaterial', 'ngMdIcons'
                              ]);

redCamp.controller('MainCtrl', [
  '$scope', '$route', '$routeParams', '$location', '$mdMedia',
  function ($scope, $route, $routeParams, $location, $mdMedia) {
    $scope.go = function (path) {
      $location.url(path);
    };
  }
]);


redCamp.controller('RedCampCtrl', [
  '$scope', '$routeParams', '$timeout', 'getList',
  function ($scope, $routeParams, $timeout, getList) {
    $scope.description = 'This is the description part of the page. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';

    $scope.campList = [];

    getList('/camps').then(function (data) {
      var index = 0,
          subList = [];
      // push the items in pair of two
      for (var i = 0; i < data.length; i++) {
        subList.push(data[i]);
        index++;
        if (index == 2) {
          index = 0;
          $scope.campList.push(subList);
          subList = [];
        }
      }
      // push the partially filled subList
      if (! _.isEmpty(subList)) {
        $scope.campList.push(subList);
      }
    });
  }
]);


redCamp.controller('AboutCtrl', [
  '$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.aboutContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';
  }
]);


redCamp.config(['$mdThemingProvider', '$routeProvider',
  function($mdThemingProvider, $routeProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('blue');

    $routeProvider
      .when('/', {
        templateUrl: 'cards.html',
        controller: 'RedCampCtrl'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);


/**
 * getList service to fetch the list of camps.
 *
 * @param {String} uri
 *    Target uri to fetch the data.
 *
 * @return {Promise}
 *    Returns a promise which is completed when the whole of the requested
 *    data is fetched.
 */
redCamp.factory('getList', ['$http', function ($http) {
  return function (uri) {
    var promise = $http.get(uri).then(function (resp) {
      return resp.data;
    });
    return promise;
  };
}]);
