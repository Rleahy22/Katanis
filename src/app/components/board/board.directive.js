(function() {
    'use strict';

    angular.module('app')
    .directive('board', board);

    function board() {
        var directive = {
            link:        link,
            templateUrl: 'src/app/components/board/board.html',
            restrict:    'E'
        };

        return directive;

        function link(scope) {
            scope.pieces = [
                {
                    color: 'blue',
                    xCoord: 200,
                    yCoord: 0
                },
                {
                    color: 'green',
                    xCoord: 400,
                    yCoord: 0
                },
                {
                    color: 'red',
                    xCoord: 600,
                    yCoord: 0
                },
                {
                    color: 'yellow',
                    xCoord: 100,
                    yCoord: 150
                },
                {
                    color: 'orange',
                    xCoord: 300,
                    yCoord: 150
                },
                {
                    color: 'blue',
                    xCoord: 500,
                    yCoord: 150
                },
                {
                    color: 'green',
                    xCoord: 700,
                    yCoord: 150
                },
                {
                    color: 'red',
                    xCoord: 0,
                    yCoord: 300
                },
                {
                    color: 'blue',
                    xCoord: 200,
                    yCoord: 300
                },
                {
                    color: 'green',
                    xCoord: 400,
                    yCoord: 300
                },
                {
                    color: 'orange',
                    xCoord: 600,
                    yCoord: 300
                },
                {
                    color: 'yellow',
                    xCoord: 800,
                    yCoord: 300
                },
                {
                    color: 'yellow',
                    xCoord: 100,
                    yCoord: 450
                },
                {
                    color: 'orange',
                    xCoord: 300,
                    yCoord: 450
                },
                {
                    color: 'blue',
                    xCoord: 500,
                    yCoord: 450
                },
                {
                    color: 'green',
                    xCoord: 700,
                    yCoord: 450
                },
                {
                    color: 'blue',
                    xCoord: 200,
                    yCoord: 600
                },
                {
                    color: 'green',
                    xCoord: 400,
                    yCoord: 600
                },
                {
                    color: 'red',
                    xCoord: 600,
                    yCoord: 600
                }
            ];
        }
    }
})();