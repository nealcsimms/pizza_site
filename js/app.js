//Module is setup here with ngRoute dependency injection
var app = angular.module("pizzaConglomerate", ["ngRoute"]);

// Creates the route, add new location routes here
app.config(function($routeProvider) {



     $routeProvider.when("/nyc", {
        templateUrl: "./views/nyc.html",
        controller: ''

    });


     $routeProvider.when("/sanfran", {
        templateUrl: "./views/sanfran.html",
        controller: ''

	});


     $routeProvider.when("/chi",{
    	templateUrl: "./views/chi.html",
    	controller: ''
    });


//Main Page View


     $routeProvider.otherwise({
        templateUrl: "./views/home.html",
        controller: ''

    });
});

//menu arrays per location containing pizza objects, add menu's for new locations here
$scope.nycPizzas = [
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
}
];

$scope.sanfranPizzas = [
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
}
];

$scope.chiPizzas = [
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"",
	imageUrl: "",
	name:"",
	toppings:""
}
];


