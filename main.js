//let plantsElement = document.getElementById();

let myPlants = [
  {
    name: "Dracaena dracena",
    img: "img/plant1.jpg",
    wateringSchedule: 7,
    fertilizingSchedule: 1,
    lastWatering: moment("2020-05-31 21:30:26").valueOf(),
    lastFertilizing: moment("2020-03-26 21:30:25").valueOf(),
  },

  {
    name: "Snake Plant",
    img: "img/plant2.jpg",
    wateringSchedule: 5,
    fertilizingSchedule: 4,
    lastWatering: moment("2020-05-20 21:30:26").valueOf(),
    lastFertilizing: moment("2020-05-03 21:30:25").valueOf(),

  }
]
/*
for (let plant of myPlants) {
    let plantElement = document.createElement("div");

    let nextWateringDate = plant.lastWatering + plant.wateringSchedule;
    let timeToNextWatering = moment(nextWateringDate).fromNow();

    let nextFertilizingDate = plant.lastFertilizing + plant.fertilizingSchedule;
    let timeToNextFertilizing = moment(nextFertilizingDate).fromNow();
}

plantElement.innerText = plant.name + ", " + plant.latinName + " next watering " + timeToNextWatering + ", next fertilizing " + timeToNextFertilizing;

plantsElement.appendChild(plantElement);
*/

function nextWatering(lastWatering, wateringSchedule) {

  let calculate = moment(lastWatering).add(wateringSchedule, "day");

  return calculate.fromNow();

}


function nextAction(last, schedule, unit) {

  let nextDate = moment(last).add(schedule, unit);
  let today = moment();
  var difference = moment.duration(nextDate.diff(today));
  var days = difference.as("days");
  console.log(days);

  if (days <= -1) {
    return "due " + Math.abs(Math.round(days)) + " days"
  }

  if (days < 1) {
    return "Today"
  }  else {
    return  "in " + Math.round(days) +  " days";
  }

}





//var x = new moment()
//var y = new moment()
//var duration = moment.duration(x.diff(y))
  // returns duration object with the duration between x and y