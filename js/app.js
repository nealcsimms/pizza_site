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


//Menu arrays per location containing pizza objects, add menus for new locations here
$scope.nycPizzas = [
{
	type:"Meat",
	imageUrl: "http://placehold.it/50x50",
	name:"Neal'apeal",
	toppings:"Pepperoni, Yellow Peppers, Green olives"
},
{
	type:"Veggie",
	imageUrl: "http://placehold.it/50x50",
	name:"Forager",
	toppings:"Mushrooms, Roasted Garlic, Leeks"
},
{
	type:"Cheese",
	imageUrl: "http://placehold.it/50x50",
	name:"Quatro",
	toppings:"Gouda, Gruyere, Parmesan, Mozzarella"
}
];

$scope.sanfranPizzas = [
{
	type:"Meat",
	imageUrl: "http://placehold.it/50x50",
	name:"Goodfella",
	toppings:"Pepperoni, Ham, Salami, Giardiniera"
},
{
	type:"Veggie",
	imageUrl: "http://placehold.it/50x50",
	name:"Billy Goat",
	toppings:"Mushrooms, Chevre, Parsely, Drizzle"
},
{
	type:"Cheese",
	imageUrl: "http://placehold.it/50x50",
	name:"Baby Blue",
	toppings:"Baby Brie, Blue, Honey"
}
];

$scope.chiPizzas = [
{
	type:"Meat",
	imageUrl: "http://placehold.it/50x50",
	name:"Windy City",
	toppings:"Pepperoni, Sausage, Green Pepper"
},
{
	type:"Veggie",
	imageUrl: "http://placehold.it/50x50",
	name:"Spud Boy",
	toppings:"Potato, Mushrooms, Green Onion, Cheddar"
},
{ 
	type:"Cheese",
	imageUrl: "http://placehold.it/50x50",
	name:"Bayside",
	toppings:"Fried Cheese Curds, Mozzarella"
}
];

});
