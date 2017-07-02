pharmacyApp.controller('batchimportController', ['$scope', 'drugCategoryService', 'drugFrequencyService', 'drugDosageService', 'drugService', function ($scope, drugCategoryService, drugFrequencyService, drugDosageService, drugService) {

    $scope.drugCategories = [];
    $scope.drugFrequencies = [];
    $scope.drugDosages = [];
    $scope.drugTypes = [];

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

$scope.loadFile = function myFunction() {
    var x = document.getElementById("myFile").value;
    console.log(x);
}



var url = "E:\AF Project\pharmacy-client.git\trunk\test.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  /* Call XLSX */
  var workbook = XLSX.read(bstr, {type:"binary"});

  /* DO SOMETHING WITH workbook HERE */
  var first_sheet_name = workbook.SheetNames[0];
  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];
  console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
}

oReq.send();


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