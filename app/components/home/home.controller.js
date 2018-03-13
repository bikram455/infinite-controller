(function () {
        'use strict';

        angular.module('InfiniteScroll')
            .controller('HomeController', HomeController);

        HomeController.$inject = ['Posts'];

        function HomeController(Posts) {
            var vm = this;
            vm.posts = Posts;
        }
    })();