/**
 * Created by FUNDACIONJALA\umss on 7/28/14.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
}]);