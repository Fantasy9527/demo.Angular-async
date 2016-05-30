'use strict';
require.config({
    paths: {
        'angular': 'http://cdn.bootcss.com/angular.js/1.5.6/angular.min',
        'ui.router': 'http://cdn.bootcss.com/angular-ui-router/0.2.18/angular-ui-router.min',
        'app': 'app'
    },
    shim: {
        'ui.router': {
            deps: ['angular']
        }
    }});
    require(['app'], function() {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
