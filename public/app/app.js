/**
 * Created by yemi-t on 16/08/2014.
 */
angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {templateUrl: '/partials/main', controller: 'mvMainCtrl'})
});

