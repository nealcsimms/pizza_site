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

app.controller('pizzaController', function($scope){
//menu arrays per location containing pizza objects, add menu's for new locations here
$scope.nycPizzas = [
{
	type:"Meat",
	imageUrl: "",
	name:"Neal'apeal",
	toppings:"Pepperoni, Yellow Peppers, Green olives"
},
{
	type:"Veggie",
	imageUrl: "",
	name:"",
	toppings:"Mushrooms, Roasted Garlic, Leeks"
},
{
	type:"Cheese",
	imageUrl: "",
	name:"",
	toppings:""
}
];

$scope.sanfranPizzas = [
{
	type:"Meat",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"Veggie",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"Cheese",
	imageUrl: "",
	name:"",
	toppings:""
}
];

$scope.chiPizzas = [
{
	type:"Meat",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"Veggie",
	imageUrl: "",
	name:"",
	toppings:""
},
{
	type:"Cheese",
	imageUrl: "",
	name:"",
	toppings:""
}
];

});
