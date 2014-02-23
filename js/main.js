var soap = require('soap');
var url = 'http://wss.prepa.com/services/BreakdownReport?wsdl';
var args = {name: 'GUAYNABO'};
soap.createClient(url, function(err, client) {
    /*client.getBreakdownsSummary(args, function(err, result) {
        console.log(result);
    });*/

    client.getBreakdownsByTownOrCity(args, function(err, result) {
        console.log(result);
    });
});
