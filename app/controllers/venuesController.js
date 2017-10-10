app.controller('venuesController', function($http, $scope, venuesService){
    var vm = this;
    vm.data = "";
    vm.city = "";
    vm.error = "";

    vm.searchCity = function() {
        venuesService.venues(vm.city).then(function(response){
            vm.error = "";
            vm.data = response.data.response.venues;
            return(response.data.response.venues);
        }, function errorCallback(response) {
            vm.error = "Enter a valid city !";
        });
    };

});