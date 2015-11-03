(function() {
    'use strict';

    angular.module('app', [
        'ui.router'
    ])
    .config(function($stateProvider, $locationProvider) {
        $stateProvider
            .state('layout', {
                url: '/src/',
                templateUrl: 'src/views/layout.html'
            });

        $locationProvider.html5Mode(true);
    });
})();