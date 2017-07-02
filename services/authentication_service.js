angular.module('pharamacy-web')
.factory('authenticationService', function($http) {
        var baseURL = 'http://localhost:5000/authentication';

        return {
            authenticate: function (user) {
                console.log(user);
                return $http.post(baseURL, user);
            },
            setLoggedInUser: function (user) {
                sessionStorage.setItem('user', JSON.stringify(user));
                sessionStorage.setItem('authenticated', true);
            },
            getLoggedInUser: function () {
                return JSON.parse(sessionStorage.getItem('user'));
            },
            isAuthenticated: function () {
                return JSON.parse(sessionStorage.getItem('authenticated'));
            },
            destroySession: function () {
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('authenticated');
            }
        };
    });