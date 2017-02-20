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
	imageUrl: "images/pizza2.png",
	name:"Neal'apeal",
	toppings:"Pepperoni, Yellow Peppers, Green olives"
},
{
	type:"Veggie",
	imageUrl: "images/pizza2.png",
	name:"Forager",
	toppings:"Mushrooms, Roasted Garlic, Leeks"
},
{
	type:"Cheese",
	imageUrl: "images/pizza2.png",
	name:"Quatro",
	toppings:"Gouda, Gruyere, Parmesan, Mozzarella"
}
];

$scope.sanfranPizzas = [
{
	type:"Meat",
	imageUrl: "images/pizza2.png",
	name:"Goodfella",
	toppings:"Pepperoni, Ham, Salami, Giardiniera"
},
{
	type:"Veggie",
	imageUrl: "images/pizza2.png",
	name:"Billy Goat",
	toppings:"Mushrooms, Chevre, Parsely, Drizzle"
},
{
	type:"Cheese",
	imageUrl: "images/pizza2.png",
	name:"Baby Blue",
	toppings:"Baby Brie, Blue, Honey"
}
];

$scope.chiPizzas = [
{
	type:"Meat",
	imageUrl: "images/pizza2.png",
	name:"Windy City",
	toppings:"Pepperoni, Sausage, Green Pepper"
},
{
	type:"Veggie",
	imageUrl: "images/pizza2.png",
	name:"Spud Boy",
	toppings:"Potato, Mushrooms, Green Onion, Cheddar"
},
{ 
	type:"Cheese",
	imageUrl: "images/pizza2.png",
	name:"Bayside",
	toppings:"Fried Cheese Curds, Mozzarella"
}
];

});
