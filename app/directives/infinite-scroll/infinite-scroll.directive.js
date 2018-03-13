(
    function () {
        'use strict';
        
        angular.module('InfiniteScroll.Directives')
            .directive('infiniteScroll', infiniteScroll);

        infiniteScroll.$inject = [];
        
        function infiniteScroll() {
            return{
                restrict: 'E',
                templateUrl:'directives/infinite-scroll/infinite-scroll.html',
                controller: 'InfiniteScrollController',
                scope: {
                        posts: '='
                },
                link: linkDirective,
                transclude: 'true'
            }
        }
        function linkDirective(scope, elem, attrs, ctrl) {

            var scrollCount = 0;
            elem.on('mousewheel', function (e) {console.log()
                if(e.deltaY > 0){
                    ++scrollCount;
                }

                if(scrollCount == 6){
                    scope.getPosts();
                    scope.$digest();
                    scrollCount = 0;
                }
            });
        }
    }
)();