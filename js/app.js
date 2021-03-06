
len = 0;

const car = function (name, model, owner, year, phone, images){
	len += 1;
	return {id: len - 1, name, model, owner, year, phone,
		image: "images/" + images + ".jpg"}				
}

const cars = [
	car("Ford", "Focus", "Musa", 2019, "+7 981 716 97 75", "car1"),
	car("Ford", "Mondeo", "Murad", 2018, "+7 960 351 92 24", "car2"),
	car("Porshe", "Panamera", "Sveta", 2016, "+7 923 543 15 64", "car3")
]

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: "",
		modalVisibility: false
	},
	methods: {
		selectCar: function (index){
			this.car = this.cars[index];
			this.selectedCarIndex = index;
		}
	},
	computed: {
		phoneBtnText: function(){
			return this.phoneVisibility ? 'Hide' : 'Show';
		},
		filteredCars: function(){
			return this.cars.filter(currentCar => {
				return currentCar.name.toUpperCase().indexOf(this.search.toUpperCase()) > -1 ||
					 currentCar.model.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
 			});
		}
	}
})