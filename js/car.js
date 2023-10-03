

//ARRAY OF CARS

const cars = [
  {
  brand: "Mitsubishi",
  model: "Outlander",
  year: 2016,
  color: "black",
  mileage: 1200000,
  isFourWheelDrive: true,
  features: ["Automatic transmission", "Leather seats", "Backup camera"],
  carOn: true,
  status: "My car",
  withinBudget: false,
  startCar: function(){
    cars.carOn = !cars.carOn
  },
  imageSrc: "/images/outlander.jpg",
},

{
  brand: "Ford",
  model: "Mustang GT",
  year: 2023,
  color: "silver",
  mileage: 1500,
  isFourWheelDrive: false,
  features: ["Manual transmission", "Sports seats", "Rearview camera"],
  carOn: false,
  status: "My dream car",
  withinBudget: false,
  startCar: function(){
    cars.carOn = !cars.carOn
  },
  imageSrc: "/images/mustang.jpeg", 
  },

{
  brand: "Mini",
  model: "Cooper",
  year: 2018,
  color: "pink",
  mileage: 45000,
  isFourWheelDrive: true,
  features: ["Automatic transmission", "Leather seats", "Backup camera"],
  carOn: false,
  status: "My wifes dream car",
  withinBudget: false,
  startCar: function(){
    cars.carOn = !cars.carOn
  },
  imageSrc: "/images/mini-cooper.jpg",
  },

  {
    brand: "Evenflo",
    model: "MINI Cooper S Coupe",
    year: 2022,
    color: "red",
    mileage: "Null",
    isFourWheelDrive: false,
    features: ["6V Battery", "60 minute runtime", "Plastic seats"],
    carOn: false,
    status: "My daughters dream car",
    withinBudget: true,
    startCar: function(){
      cars.carOn = !cars.carOn;
    },
    imageSrc: "/images/mini-cooper-kid.jpg",
  },
]


var carsContainer = document.querySelector(".cars");
var image =document.querySelector("cars.imageSrc");

for (var i = 0; i < cars.length; i++){
  var item = cars[i];
  console.log(item);
  var featuresText = item.features.join(", ");
  
  carsContainer.innerHTML += 
  `
  <h2> ${item.status}</h2>
  <img src = "${item.imageSrc}">
  <h3> ${item.brand}</h3>
  <p> Model: ${item.model}</p>
  <p> Year: ${item.year}</p>
  <p> Colour: ${item.color}</p>
  <p class="features"> Features: ${featuresText}</p>
  `;
}

