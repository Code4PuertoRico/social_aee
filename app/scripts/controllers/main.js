'use strict';

angular.module('socialAeeApp')
  .controller('MainCtrl', function ($scope) {
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

        $scope.pueblos = [];

        for (var i = 0; i < pueblos.length; i++ ) {
            var pueblo = {name : pueblos[i]};
            $scope.pueblos.push(pueblo);
        }

        $scope.pueblo = null;
  });
