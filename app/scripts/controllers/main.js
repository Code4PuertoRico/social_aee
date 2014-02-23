'use strict';

angular.module('socialAeeApp')
  .controller('MainCtrl', function ($scope, $http, $log) {
        var pueblos = ["ADJUNTAS", "AGUADA", "AGUADILLA", "AGUAS BUENAS", "AIBONITO", "ANASCO", "ARECIBO",
            "ARROYO", "BARCELONETA", "BARRANQUITAS", "BAYAMON", "CABO ROJO", "CAGUAS", "CAMUY",
            "CANOVANAS", "CAROLINA", "CATANO", "CAYEY", "CEIBA", "CIALES", "CIDRA", "COAMO",
            "COMERIO", "COROZAL", "CULEBRA", "DORADO", "FAJARDO", "FLORIDA", "GUANICA", "GUAYAMA",
            "GUAYANILLA", "GUAYNABO", "GURABO", "HATILLO", "HORMIGUEROS", "HUMACAO", "ISABELA",
            "JAYUYA", "JUANA DIAZ", "JUNCOS", "LAJAS", "LARES", "LAS MARIAS", "LAS PIEDRAS",
            "LOIZA", "LUQUILLO", "MANATI", "MARICAO", "MAUNABO", "MAYAGUEZ", "MOCA", "MOROVIS",
            "NAGUABO", "NARANJITO", "OROCOVIS", "PATILLAS", "PENUELAS", "PONCE", "QUEBRADILLAS",
            "RINCON", "RIO GRANDE", "SABANA GRANDE", "SALINAS", "SAN GERMAN", "SAN JUAN", "SAN LORENZO",
            "SAN SEBASTIAN", "SANTA ISABEL", "TOA ALTA", "TOA BAJA", "TRUJILLO ALTO", "UTUADO", "VEGA ALTA",
            "VEGA BAJA", "VIEQUES", "VILLALBA", "YABUCOA", "YAUCO"];

        $scope.pueblo = null;

        $scope.pueblos = [];

        for (var i = 0; i < pueblos.length; i++ ) {
            var pueblo = {name : pueblos[i]};
            $scope.pueblos.push(pueblo);
        }

        $scope.restData = null;
        $scope.stats = null;
        $scope.dataObj = null;

        $scope.doStuff = function(data) {
            $scope.restData = data;
            $scope.dataObj = data != null ? angular.fromJson(data) : null;
            var incidents = angular.isObject($scope.dataObj) && angular.isObject($scope.dataObj.return) ? $scope.dataObj.return.length : 0;
            $scope.stats = {
                name: $scope.pueblo.name,
                incidents: incidents
            };
        };

        $scope.$watch('pueblo', function(newVal, oldVal) {
            if (!angular.isObject($scope.pueblo)) {
                return;
            }
            $http({method: 'GET', url: 'http://localhost:8002/getBreakdownsByTownOrCity/' + $scope.pueblo.name + "/ "})
                .success(function(data, status, headers, config) {
                    $scope.doStuff(data);
                });
        });
  });
