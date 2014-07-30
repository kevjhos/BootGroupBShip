'use strict';
define(["angular", "css!generalStyle", "ngRoute", "controllers", "exampleController", "directives", "services", "ngDragDrop"], function(angular) {
  var battleShipsApp;
  battleShipsApp = angular.module("battleShipsApp", ["ngRoute", "battleShipsControllers", "battleShipsDirectives", "battleShipsServices", "ngDragDrop"]);
  battleShipsApp.config([
    "$routeProvider", function($routeProvider) {
      return $routeProvider.when("/", {
        templateUrl: "main.html"
      }).otherwise({
        redirectTo: "/main.html"
      });
    }
  ]);
  return battleShipsApp;
});
