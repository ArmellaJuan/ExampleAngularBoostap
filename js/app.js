
  var webAppEjemplo = angular.module('webAppEjemplo', [ 'ngRoute','controllers']);

  webAppEjemplo.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'ui/home.html',
        controller: 'PageController'

      }).
      when('/about', {
        templateUrl: 'ui/about.html',
        controller: 'PageController'
      }).
      when('/contact', {
        templateUrl: 'ui/contact.html',
        controller: 'PageController'
      }).
       when('/myCarousel', {
              templateUrl: 'ui/home.html',

      }).
       when('/listExample', {
              templateUrl: 'ui/listExample.html',
              controller: 'listExampleController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

var controllers = angular.module('controllers', []);

  controllers.controller('PageController', function($scope) {
    

     angular.element(document).ready(function () {
            jQuery(document).ready(function() {
                      $('.post').addClass("div-hidden-animation").viewportChecker({
                      classToAdd: 'div-visible-animation animated fadeIn',
                      offset: 100
                      });
              });
    });

    });

controllers.controller('navController', function($scope) {
      $scope.navSelected = "home";
    

    });
