(function() {
    'use strict';

    angular.module('app')
    .directive('boardPiece', boardPiece);

    function boardPiece() {
        var directive = {
            link:        link,
            templateUrl: 'src/app/components/board/boardPiece.html',
            replace:     true,
            restrict:    'E',
            scope: {
                color:  '=',
                xcoord: '=',
                ycoord: '='
            }
        };

        return directive;

        function link(scope) {
        }
    }
})();