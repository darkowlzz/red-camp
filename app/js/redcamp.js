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
  '$scope', '$routeParams', '$timeout',
  function ($scope, $routeParams, $timeout) {
    $scope.description = 'This is the description part of the page. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat interdum felis sed interdum. Pellentesque ultrices est eget placerat tempor. Curabitur iaculis porttitor mauris. Sed dictum mattis est, sit amet tempor leo placerat id.';

    /*
    $scope.campList = [];
    $http.get()
      .success(function (data) {
        // organize the data and push to campList
        $scope.campList.push(data);
      });
    */

    // sample data
    $scope.campList = [
      [
        { title: 'Blood Camp 1', location: 'Sector A', date: '11/4/2015' },
        { title: 'Blood Camp 2', location: 'Sector B', date: '11/4/2015' }
      ],
      [
        { title: 'Blood Camp 3', location: 'Sector C', date: '11/4/2015' },
        { title: 'Blood Camp 4', location: 'Sector D', date: '11/4/2015' }
      ],
      [
        { title: 'Blood Camp 5', location: 'Sector E', date: '11/4/2015' },
        { title: 'Blood Camp 6', location: 'Sector F', date: '11/4/2015' }
      ],
      [
        { title: 'Blood Camp 1', location: 'Sector A', date: '11/4/2015' },
        { title: 'Blood Camp 2', location: 'Sector B', date: '11/4/2015' }
      ],
      [
        { title: 'Blood Camp 3', location: 'Sector C', date: '11/4/2015' },
        { title: 'Blood Camp 4', location: 'Sector D', date: '11/4/2015' }
      ],
      [
        { title: 'Blood Camp 5', location: 'Sector E', date: '11/4/2015' },
        { title: 'Blood Camp 6', location: 'Sector F', date: '11/4/2015' }
      ]
    ];
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
