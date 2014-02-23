'use strict';

angular.module('socialAeeApp')
    .controller('DetailCtrl', function ($scope, $rootScope) {

        $scope.incident = $rootScope.incident;

    });
