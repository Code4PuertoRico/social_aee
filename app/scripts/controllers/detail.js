'use strict';

angular.module('socialAeeApp')
    .controller('DetailCtrl', function ($scope, $http,$log,$rootScope) {

        $scope.dataObj = null;
        $scope.pueblo = $rootScope.incident.name
//        $http({method: 'GET', url: 'http://aeebe.ngrok.com/getBreakdownsByTownOrCity/San%20Juan' })
        $http({method: 'GET', url: 'http://localhost:8002/getBreakdownsByTownOrCity/'+$rootScope.incident.name+"/" })
            .success(function (data, status, headers, config) {
                $scope.doStuff(data);

            });

        $scope.doStuff = function(data) {
            $scope.dataObj = data != null ? angular.fromJson(data) : null;

        };
    });
