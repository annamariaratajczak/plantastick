//let plantsElement = document.getElementById();

let myPlants = [
    {
        name: "Carlos",
        img: "img/plant1.jpg",
      //  wateringShedule: 1000 * 60 * 60 * 24 * 30,
       // fertilizingShedule: 1000 * 60 * 60 * 24 * 5,
      //  lastWatering: moment("2020-05-27 21:30:26").valueOf(),
      //  lastFertilizing: moment("2020-05-21 21:30:25").valueOf(),
    },

    {
        name: "Marko",
        img: "img/plant2.jpg",
      //  wateringShedule: 1000 * 60 * 60 * 24 * 30,
      //  fertilizingShedule: 1000 * 60 * 60 * 24 * 5,
       // lastWatering: moment("2020-05-27 21:30:26").valueOf(),
      //  lastFertilizing: moment("2020-05-21 21:30:25").valueOf(),

    }
]
/*
for (let plant of myPlants) {
    let plantElement = document.createElement("div");

    let nextWateringDate = plant.lastWatering + plant.wateringShedule;
    let timeToNextWatering = moment(nextWateringDate).fromNow();

    let nextFertilizingDate = plant.lastFertilizing + plant.fertilizingShedule;
    let timeToNextFertilizing = moment(nextFertilizingDate).fromNow();
}

plantElement.innerText = plant.name + ", " + plant.latinName + " next watering " + timeToNextWatering + ", next fertilizing " + timeToNextFertilizing;

plantsElement.appendChild(plantElement);
*/