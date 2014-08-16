/**
 * Created by yemi-t on 16/08/2014.
 */
angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses = [
        {name: 'c# for sociopaths', featured:true},
        {name: 'c# for sociopaths', featured:true},
        {name: 'c# for sociopaths', featured:true},
        {name: 'c# for sociopaths', featured:false},
        {name: 'c# for sociopaths', featured:false},
        {name: 'c# for sociopaths', featured:false}
    ];
});