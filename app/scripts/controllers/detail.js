'use strict';

angular.module('socialAeeApp')
    .controller('DetailCtrl', function ($scope, $http,$log) {
        $scope.items = [];

//        $http({method: 'GET', url: 'http://aeebe.ngrok.com/getBreakdownsByTownOrCity/San%20Juan' })
      /*  $http({method: 'GET', url: 'http://localhost:8002/getBreakdownsByTownOrCity/San%20Juan' })
            .success(function (data, status, headers, config) {
                $log.info(data);
                $scope.items = data;

            });*/
    });
