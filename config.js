var app = angular.module('myModule');

app.config(function($routeProvider) {

  $routeProvider
    .when('/cat', {
      controller: 'routeCtrl',
      templateUrl: 'cat.html',
    })
    .when('/dog', {
      controller: 'routeCtrl',
      templateUrl: 'dog.html',
    })

    .when('/elephant', {
      controller: 'routeCtrl',
      templateUrl: 'elephant.html',
    })

    .when('/penguin', {
      controller: 'routeCtrl',
      templateUrl: 'penguin.html',
    })

    .otherwise({ redirectTo: '/' });
});
