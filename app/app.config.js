(
    function () {
        'use strict';

        angular.module('InfiniteScroll')
            .config(config);

        config.$inject= ['$stateProvider', '$urlRouterProvider'];

        function config($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url:'/home',
                    controller: 'HomeController as homeCtrl',
                    templateUrl: 'components/home/home.html'

                });
        }
    }
)();