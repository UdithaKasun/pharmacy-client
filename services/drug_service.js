angular.module('pharamacy-web')
    .factory('drugService', function ($http) {
        var baseURL = 'http://localhost:5000';

        return {
            getDrugTypes: function () {
                return $http.get(baseURL + "/drugType");
            },
            addNewDrug: function (drug) {
                return $http.post(baseURL+"/drug", drug);
            },
            getDrugs: function () {
                return $http.get(baseURL + "/drug");
            },
            getDrugSupplies: function () {
                return $http.get(baseURL + "/drugSupply");
            },
            getPendingDrugRequests: function () {
                return $http.get(baseURL + "/drugRequests");
            },
            getDrugSuppliers: function () {
                return $http.get(baseURL + "/drugSuppliers");
            },
            updateDrugRequest: function (drugRequest) {
                return $http.put(baseURL + "/drugRequests",drugRequest);
            },
            updateDrug: function (drug) {
                return $http.put(baseURL + "/drug",drug);
            },
            deleteDrug: function (drugId) {
                return $http.delete(baseURL + "/drug/"+drugId);
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