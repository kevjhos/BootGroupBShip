define(["directives"], function(directives) {
  return directives.directive("example", function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        return element.click(function() {
          return alert('hello world');
        });
      }
    };
  });
});
