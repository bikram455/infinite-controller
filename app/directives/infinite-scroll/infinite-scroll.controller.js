(
    function () {
        'use strict';

        angular.module('InfiniteScroll.Directives')
            .controller('InfiniteScrollController', InfiniteScrollController);

        InfiniteScrollController.$inject = ['$scope'];

        function InfiniteScrollController($scope) {
            var vm  = this;

            $scope.getPosts = getPosts;
            vm.rawPosts = angular.copy($scope.posts);
            vm.page  = 1;
            vm.count = 15;

            vm.$onInit = function () {
                $scope.getPosts();
            }

            function getPosts() {
                vm.dposts = vm.rawPosts.slice(0,(vm.page * vm.count));
                console.log('LENGTH: ' + vm.dposts.length);
                console.log(vm.dposts, vm.rawPosts);
                ++vm.page;
            }
        }
    }
)();