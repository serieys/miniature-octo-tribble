app.factory('venuesService', function ($http) {

    var requestParms = {
        clientId: "41KGRFSA3B4F0BXDCCC0ZIQRQCSLXLKGQ1CUN4O0H1KEQEFU",
        clientSecret: "JRZKJVMPKAQUNT54MRFQZAGWN4PD3OIM4S1GQWY34DON0USG"
    }
 
    var requestUri = 'https://api.foursquare.com/v2/venues/search';

    var getVenues = function(city) {
        return $http.get(requestUri + '?near=' + city + '&client_id=' + requestParms.clientId + '&client_secret=' + requestParms.clientSecret + "&v=20171010");
    };

return{
    venues: getVenues
};

});