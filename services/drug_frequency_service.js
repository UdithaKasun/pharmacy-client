angular.module('pharamacy-web')
    .factory('drugFrequencyService', function ($http) {
        var baseURL = 'http://localhost:5000/drugFrequency';

        return {
            getDrugFrequecies: function () {
                return $http.get(baseURL);
            }
        }
    });