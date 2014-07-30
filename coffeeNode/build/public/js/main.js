require.config({
  paths: {
    angular: 'lib/angular.min',
    jquery: 'lib/jquery-2.0.3.min',
    bootstrap: 'lib/bootstrap.min',
    ngRoute: 'lib/angular-route',
    ngResource: 'lib/angular-resource',
    ngDragDrop: 'lib/angular-dragdrop.min',
    app: 'app',
    controllers: 'controllers/controllers',
    directives: 'directives/directives',
    services: 'services/services',
    exampleController: 'controllers/ejemploController',
    exampleService: 'services/example-service',
    exampleDirective: 'directives/ejemploDirectives',
    generalStyle: '../styles/index',
    bootstrapStyle: '../styles/bootstrap.min'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    },
    ngResource: {
      deps: ['angular']
    },
    ngDragDrop: {
      deps: ['angular']
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  map: {
    '*': {
      'css': 'lib/css.min'
    }
  }
});

require(['angular', 'app', 'css!bootstrapStyle', 'bootstrap'], function(angular, app) {
  return angular.bootstrap(document, [app.name]);
});
