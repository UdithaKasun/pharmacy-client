pharmacyApp.controller('updateDrugController', ['$scope', 'drugCategoryService', 'drugFrequencyService', 'drugDosageService', 'drugService', function ($scope, drugCategoryService, drugFrequencyService, drugDosageService, drugService) {

    $scope.drugCategories = [];
    $scope.drugFrequencies = [];
    $scope.drugDosages = [];
    $scope.drugTypes = [];
    $scope.drugs = [];
    
    $scope.drug = {
        drug_name: "",
        drug_price: 0,
        drug_reorderlevel: 0,
        drug_dangerlevel: 0,
        drug_categoryid: {
            category_id : ""
        },
        drug_type: {
            drug_typeId : ""
        },
        drug_dosage: {
            drug_dosageId : ""
        },
        drug_frequency: {
            drug_ferquencyId : ""
        },
        drug_remarks: "",
        drug_active : true
    }
    $scope.selectedDrug = {};

    $scope.loadUpdateData = function(drug){
        console.log(drug);
        $scope.selectedDrug = drug;
        console.log($scope.selectedDrug);
    }

    $scope.updateDrug = function(){
        console.log($scope.selectedDrug);
        drugService.updateDrug($scope.selectedDrug)
        .then(function (response) {
            swal("Drug Updated", "Drug is Successfully Updated", "success");
            drugService.getDrugs()
        .then(function (response) {
            $scope.drugs = response.data;
        })
        .catch(err => {
            console.log(err);
        })
        })
        .catch(err => {
            swal("Drug Information", "Drug Saving Failed", "error");
        })

    }

    $scope.deelteDrug = function(){
        drugService.deleteDrug($scope.selectedDrug.drug_srno)
        .then(function (response) {
            swal("Drug Updated", "Drug is Successfully Updated", "success");
        })
        .catch(err => {
            swal("Drug Information", "Drug Saving Failed", "error");
        })

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

    //Load Drugs 
    drugService.getDrugs()
        .then(function (response) {
            $scope.drugs = response.data;
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