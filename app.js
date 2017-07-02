/**
 * Created by Uditha Kasun on 5/11/2017.
 */

var pharmacyApp = angular.module('pharamacy-web',['ngRoute','ngMessages']);


//App Configurations
pharmacyApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'components/login_view/login_view.html',
        controller : 'loginController'
    })
    .when("/addDrugs", {
        templateUrl: 'components/add_new_drug/add_new_drug.html',
        controller : 'addNewDrugController'
    }).
    when("/viewDrugRequests", {
        templateUrl: 'components/handle_drug_request/drug_request_handler.html',
        controller : 'drugRequestHandlerController'
    }).
    when("/viewDrugStock", {
        templateUrl: 'components/view_current_stock/view_current_stock.html',
        controller : 'drugStockController'
    }).
    when("/viewDrugs", {
        templateUrl: 'components/update_drug/update_drug.html',
        controller : 'updateDrugController'
    })
    .otherwise({
        redirectTo: function () {
            return "/";
        }
    })
}])


