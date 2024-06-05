var app=angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/product",{templateUrl: "product.html",controller: "myCtrl"})
    .when("/danhmuc",{templateUrl: "danhmuc.html",controller: "myCtrl"})
    .when("/lienhe",{templateUrl: "lienhe.html",controller: "myCtrl"})
    .when("/detail/:id",{templateUrl: "chitiet.html",controller: "myCtrl"},)
    .otherwise({templateUrl: "index.html",controller: "myCtrl"})
})  
app.controller("myCtrl",function ($scope, $rootScope, $routeParams, $http) {
    $scope.products= [];
        $http.get("http://localhost:3000/products").then(function (reponse) {
            $scope.products = reponse.data;
            console.log($scope.products);
            $scope.detailPro=$scope.products.find(item=>item.id==$routeParams.id);
        });
    $scope.tang=function(){
        $scope.sort='price'
    }
    $scope.giam=function(){
        $scope.sort='-price'
    }
 });
