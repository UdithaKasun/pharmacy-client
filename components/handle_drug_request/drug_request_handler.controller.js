pharmacyApp.controller('drugRequestHandlerController', ['$scope', 'drugCategoryService', 'drugFrequencyService', 'drugDosageService', 'drugService', function ($scope, drugCategoryService, drugFrequencyService, drugDosageService, drugService) {

    $scope.drugCategories = [];
    $scope.drugFrequencies = [];
    $scope.drugDosages = [];
    $scope.drugTypes = [];
    $scope.drugs = [];
    $scope.drugSupplies = [];
    $scope.drugRequests = [];
    $scope.drugSuppliers = [];


    $scope.request = {
        request_id: "",
        requestStatus: "",
        assignedSuppier: ""
    }
    $scope.drug = {
        drug_name: "",
        drug_price: 0,
        drug_reorderlevel: 0,
        drug_dangerlevel: 0,
        drug_categoryid: {
            category_id: ""
        },
        drug_type: {
            drug_typeId: ""
        },
        drug_dosage: {
            drug_dosageId: ""
        },
        drug_frequency: {
            drug_ferquencyId: ""
        },
        drug_remarks: "",
        drug_active: true
    }

    $scope.saveDrug = function () {
        if ($scope.drug.drug_reorderlevel == 0) {
            swal("Invalid Drug Information", "Reorder Level Must Be Greater Than Zero", "warning");
        }
        else {
            console.log("Here");
            drugService.addNewDrug($scope.drug)
                .then(function (response) {
                    swal("Drug Information", "Drug is Successfully Saved", "success");
                })
                .catch(err => {
                    swal("Drug Information", "Drug Saving Failed", "error");
                })
        }

    }

    $scope.forwardToSupplier = function () {

    };

    $scope.forwardRequest = function (drug) {
        $scope.drugSuppliers = $scope.drugSuppliers.filter(function (item) {
            return item.drugs.indexOf(drug.requestedDrug.drug_srno) != -1;
        })
        $scope.request.request_id = drug.request_id;
        console.log($scope.drugSuppliers);
    };

    $scope.sendRequest = function (supplierId) {
        $scope.request.assignedSuppier = supplierId;
        $scope.request.requestStatus = "ASSIGNED";
        drugService.updateDrugRequest($scope.request)
            .then(function (response) {
                swal("Drug Request", "Your Drug Request is Forwarded to Supplier", "success");
                $scope.drugRequests = [];
                drugService.getPendingDrugRequests()
                    .then(function (response) {
                        $scope.drugRequests = response.data;
                    })
                    .catch(err => {
                        console.log(err);
                    })

            })
            .catch(err => {
                swal("Drug Request", "Drug Request Saving Failed", "error");
            })
    }

    //Load Drug Categories 


    //Load Drug Requests
    drugService.getDrugSuppliers()
        .then(function (response) {
            $scope.drugSuppliers = response.data;
        })
        .catch(err => {
            console.log(err);
        })

    //Load Drug Requests
    drugService.getPendingDrugRequests()
        .then(function (response) {
            $scope.drugRequests = response.data;
        })
        .catch(err => {
            console.log(err);
        })
    //Load Drug Supplies
    drugService.getDrugSupplies()
        .then(function (response) {
            $scope.drugSupplies = response.data;
        })
        .catch(err => {
            console.log(err);
        })

    //Load Drug Categories 
    drugCategoryService.getDrugCategories()
        .then(function (response) {
            $scope.drugCategories = response.data;
        })
        .catch(err => {
            console.log(err);
        })

    //Load Drug Dosages
    drugDosageService.getDrugDosages()
        .then(function (response) {
            $scope.drugDosages = response.data;
        })
        .catch(err => {
            console.log(err);
        })

    //Load Drug Frequencies
    drugFrequencyService.getDrugFrequecies()
        .then(function (response) {
            $scope.drugFrequencies = response.data;
        })
        .catch(err => {
            console.log(err);
        })

    //Load Drug Types
    drugService.getDrugTypes()
        .then(function (response) {
            $scope.drugTypes = response.data;
        })
        .catch(err => {
            console.log(err);
        })
}]);