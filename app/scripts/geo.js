var geocoder = null;

function initialize() {
    if (GBrowserIsCompatible()) {
        geocoder = new GClientGeocoder();
    }
}


$(document).ready(function(){
    findNearbyLocations (function(town){
        alert(town);
    })
});

function findNearbyLocations(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var latlng = latitude + "," + longitude


            geocoder.getLocations(latlng, function (addresses) {
                if (addresses.Status.code != 200) {
                    alert("reverse geocoder failed to find an address for " + latlng.toUrlValue());
                }
                else {
                    var town =addresses.Placemark[0].AddressDetails.Country.AdministrativeArea.Locality.LocalityName;

                    callback(town);
                }
            });


        }, function () {

        });
    }
}


//{"name":"18.4669025,-66.1053951","Status":{"code":200,"request":"geocode"},"Placemark":[{"address":"Puerto Rico 25 Spur, San Juan, 00901, Puerto Rico","AddressDetails":{"Accuracy":6,"Country":{"CountryName":"Puerto Rico","CountryNameCode":"PR","AdministrativeArea":{"AdministrativeAreaName":"San Juan","Locality":{"LocalityName":"San Juan","DependentLocality":{"DependentLocalityName":"Old San Juan","Thoroughfare":{"ThoroughfareName":"Puerto Rico 25 Spur, San Juan, 00901, Puerto Rico"},"PostalCode":{"PostalCodeNumber":"00901"}}}}}},"Point":{"coordinates":[-66.10594700000001,18.4674134,0]},"ExtendedData":{"LatLonBox":{"north":18.4686918302915,"south":18.4659938697085,"east":-66.10458821970849,"west":-66.10728618029151}}}]}
//{"Accuracy":6,"Country":{"CountryName":"Puerto Rico","CountryNameCode":"PR","AdministrativeArea":{"AdministrativeAreaName":"San Juan","Locality":{"LocalityName":"San Juan","DependentLocality":{"DependentLocalityName":"Old San Juan","Thoroughfare":{"ThoroughfareName":"Puerto Rico 25, San Juan, 00901, Puerto Rico"},"PostalCode":{"PostalCodeNumber":"00901"}}}}}}