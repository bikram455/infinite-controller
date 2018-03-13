(
    function () {
        'use strict';
        
        angular.module('InfiniteScroll.Directives')
            .directive('infiniteScroll', infiniteScroll);

        infiniteScroll.$inject = [];
        
        function infiniteScroll() {
            return{
                restrict: 'EA',
                templateUrl:'directives/infinite-scroll/infinite-scroll.html',
                controller: 'InfiniteScrollController',
                scope: {
                        posts: '='
                },
                link: linkDirective,
                transclude: 'true'
            }
        }
        function linkDirective(scope, elem, attrs, ctrl, $window) {

            var pageTop = 0;
            var scrollCount = 0;
            var previousPosition = window.pageYOffset;
            var currentPosition;
            window.onscroll = function (e) {
                currentPosition = window.pageYOffset;

                if(currentPosition > previousPosition){

                    if(++scrollCount >= 12){console.log('scrolling down');
                        scope.getPosts();
                        scope.$digest();
                        scrollCount = 0;
                    }
                }
                else {
                    console.log('scrolling up');
                }
                previousPosition = currentPosition;
                /*if(pageTop < window.pageYOffset){
                    pageTop = window.pageYOffset;
                    ++scrollCount;
                }


                if(scrollCount == 15){
                    scope.getPosts();
                    scope.$digest();
                    scrollCount = 0;
                }*/
            };
            // angular.element($window).on('scroll', function () {
            //     console.log('scroll');
            // });
        }
    }
)();