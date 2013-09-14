/**
 * Created with JetBrains WebStorm.
 * User: Santiago.Cordoba
 * Date: 9/13/13
 * Time: 11:53 AM
 * To change this template use File | Settings | File Templates.
 */

var SantiagoApp = angular.module('SantiagoApp', []);

SantiagoApp.config(function ($locationProvider, $routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/jade/home'
        })
        .when('/form', {
            templateUrl: '/jade/form'
        })
        .otherwise({redirectTo: '/'})
});

var controllersSantiagoApp = {};

controllersSantiagoApp.navController = function ($scope) {
    $scope.select = function () {
        var select=$(event.target);
        $('.nav li').removeClass('active');
        select.parent().addClass('active');
    }
};

SantiagoApp.controller(controllersSantiagoApp);
