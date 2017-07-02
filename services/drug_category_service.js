angular.module('pharamacy-web')
    .factory('drugCategoryService', function ($http) {
        var baseURL = 'http://localhost:5000/drugCategory';

        return {
            getDrugCategories: function () {
                return $http.get(baseURL);
            }
        }
    });

// angular.module('pharamacy-web')
//     .factory('drugService', function ($http) {
//         var baseURL = 'http://localhost:8080/queues';

//         return {
//             getQueues: function () {
//                 return $http.get(baseURL);
//             },
//             queuePatient: function (entry) {
//                 return $http.post(baseURL, entry);
//             },
//             getQueuedPatients: function () {
//                 return $http.get(baseURL + '/patients');
//             },
//             getQueuedPatientsForDoctor: function (doctor) {
//                 var temp = '59568044506d1a5ef54ad96f';
//                 return $http.get(baseURL + '/' + temp);
//             }
//         };
//     });