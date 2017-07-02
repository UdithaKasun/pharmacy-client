pharmacyApp.controller('loginController', ['$scope', 'authenticationService','$location', function ($scope, authenticationService,$location) {

    $scope.user = {
        username : "",
        password : ""
    }

    $scope.authenticateUser = function(){
        console.log("Here")
        authenticationService.authenticate($scope.user)
        .then(function (response) {
            $scope.user = response.data;
            $location.url('/viewDrugStock');
        })
        .catch(err => {
            console.log(err);
           swal("Login", "Invalid Credentials", "error");
        })
    }

}]);