(
    function () {
        'use strict';

        angular.module('InfiniteScroll.Directives')
            .controller('InfiniteScrollController', InfiniteScrollController);

        InfiniteScrollController.$inject = ['$scope', '$rootScope'];

        function InfiniteScrollController($scope, $rootScope) {
            // var vm  = this;

            $scope.getPosts = getPosts;
            $scope.rawPosts = angular.copy($scope.posts);
            $scope.page  = 1;
            $scope.count = 18;

            this.$onInit = function () {console.log('m here')
                $scope.getPosts();
            }

            function getPosts() {
                $scope.dposts = $scope.rawPosts.slice(0,($scope.page * $scope.count));
                console.log('LENGTH: ' + $scope.dposts.length);
                console.log($scope.dposts, $scope.rawPosts);
                ++$scope.page;
            }
        }
    }
)();