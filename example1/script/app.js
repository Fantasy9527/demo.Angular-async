define([
    'angular', 'ui.router'
], function() {
    var app = angular.module('app', ['ui.router']);

    app.config([
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function($controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.provider = $provide.provider;
            app.value = $provide.value;
            app.constant = $provide.constant;
            app.decorator = $provide.decorator;
        }
    ]);

    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'view/testTemplate.html',
                controller: 'testController',
                resolve: {
                    deps: [
                        '$q',
                        '$rootScope',
                        function($q, $rootScope) {
                            var deferred = $q.defer();
                            require(['../view/testController'], function() {
                                $rootScope.$apply(deferred.resolve);
                            });
                            return deferred.promise;
                        }
                    ]
                }
            })
        }
    ])


return app;
})
