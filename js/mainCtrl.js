var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, mainSrvc){

//$scope.test = "this is my test"
$scope.showQuotes = mainSrvc.getData()
$scope.showAddQuote = false;
$scope.showRemoveQuote = false;
$scope.showFilterQuote = false;


$scope.addQuote = function(){
	$scope.showAddQuote = !$scope.showAddQuote
	$scope.showRemoveQuote = false;
	$scope.showFilterQuote = false;
}

$scope.removeQuote = function(){
	$scope.showAddQuote = false;
	$scope.showRemoveQuote = !$scope.showRemoveQuote
	$scope.showFilterQuote = false; 
}

$scope.filterQuote = function() {
	$scope.showAddQuote = false
	$scope.showRemoveQuote = false;
	$scope.showFilterQuote = !$scope.showFilterQuote
}

$scope.addAddData = function(){
	mainSrvc.addData($scope.quotesText,$scope.quotesAuthor);
	$scope.quotesText = "";
	$scope.quotesAuthor = "";
}

$scope.removeRemoveData = function(){
	debugger;
	mainSrvc.removeData($scope.removeTheQuote);
	$scope.removeTheQuote = "";
}
});