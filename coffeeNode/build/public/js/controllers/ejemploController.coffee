
define ['controllers','exampleDirective'], (controllers) ->
  controllers.controller "ejemplocontrolador",["$scope",($scope) ->
    $scope.name = "Romel Zabala"

    $scope.addTwoNumbers=(firstNumber, seconNumber)->
      firstNumber + seconNumber
  ]