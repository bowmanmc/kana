'use strict';

angular.module('kaApp').controller('kaCardViewerController',
function ($scope, deckHiragana) {

    $scope.flipped = false;

    $scope.flip = function() {
        $scope.flipped = !$scope.flipped;
    };

    var initialize = function() {
        console.log('Level 1: ' + JSON.stringify(deckHiragana[1][0]));
        $scope.card = deckHiragana[1][0];
    }
    initialize();
});
