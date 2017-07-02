angular.module('pharamacy-web')
    .factory('drugDosageService', function ($http) {
        var baseURL = 'http://localhost:5000/drugDosage';

        return {
            getDrugDosages: function () {
                return $http.get(baseURL);
            }
        }
    });