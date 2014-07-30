define(['controllers', 'exampleDirective'], function(controllers) {
  return controllers.controller("ejemplocontrolador", [
    "$scope", function($scope) {
      $scope.name = "Romel Zabala";
      return $scope.addTwoNumbers = function(firstNumber, seconNumber) {
        return firstNumber + seconNumber;
      };
    }
  ]);
});
