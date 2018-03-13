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
                controller: 'InfiniteScrollController as infiniteCtrl',
                scope: {
                        posts: '='
                },
                link: linkDirective
            }
        }
        function linkDirective(scope, elem, attrs, ctrl) {
            var mouseY = 125;
            var page = 1;
            elem.on('mousewheel', function (e) {console.log(e.deltaY)
                if(e.deltaY > (page * mouseY)){
                    ++page;
                    scope.getPosts();
                    console.log('fetch new page', e.deltaY, (page * mouseY));
                }
            });
        }
    }
)();