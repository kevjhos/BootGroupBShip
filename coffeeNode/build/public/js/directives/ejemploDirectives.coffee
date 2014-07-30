define ["directives"], (directives) ->
  directives.directive "example", () ->
    restrict: 'A'
    link:(scope,element,attrs)->
      element.click ()->
        alert 'hello world'