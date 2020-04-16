

const carsDetails = [];

function Car(plate, maker, model, price, color) {
	this.plate = plate;
	this.maker = maker;
	this.model = model;
	this.price = price;
	this.color = color;
}

const createCar = () => {
	let plate, maker, model, price, color, addedcarPlate, addedcarDiscount;

	plate = document.getElementById('plate').value;
	maker = document.getElementById('maker').value;
	model = document.getElementById('model').value;
	price = document.getElementById('price').value;
	color = document.getElementById('color').value;

	addedcarPlate = document.getElementById('addedcarPlate');
	addedcarDiscount = document.getElementById('addedcarDiscount');

	let carProperties = new Car(plate, maker, model, price, color);
	carsDetails.push(carProperties);
	console.table(carsDetails);

	
}

function searchLicencePlate() {
let searchCarInput = document.getElementById('searchCarInput').value;
let searchedCar = carsDetails.find(car => car.plate === searchCarInput);

if (searchedCar) {
	console.log(`Car model is ${searchedCar.maker}, car license plate is ${searchedCar.plate} and car discount is ${discounts(searchedCar.price)} `)
}
}

const discounts = (price) => {
	
	if (price > 20000) {
		console.log(price * 0.25)
		return price * 0.25;
		
	} else if (price < 5000) {
		return price * 0.1;
	} else {
		return price * 0.15;
	}
};
