let myPlants = [
  /*  {
    name: "Dracaena dracena",
    img: "img/plant1.jpg",
    wateringSchedule: 7,
    fertilizingSchedule: 1,
    lastWatering: moment("2020-05-31 21:30:26").valueOf(),
    lastFertilizing: moment("2020-03-26 21:30:25").valueOf(),
    notes: "",
  },
  {
    name: "Snake Plant",
    img: "img/plant2.jpg",
    wateringSchedule: 5,
    fertilizingSchedule: 4,
    lastWatering: moment("2020-05-20 21:30:26").valueOf(),
    lastFertilizing: moment("2020-05-03 21:30:25").valueOf(),
    notes: "",
  }*/
];
function redDot() {
  let redBadge = document.getElementById("redBadge");
  redBadge.classList.remove("hideBadge");
  return redBadge;
}
//redDot();

function displayPlaceHolderText(notes) {

  if (notes == "" || typeof notes === "undefined") {

    return (notes = "Click on Edit to add a note.");
  } else {
    return notes;
  }
}

function nextAction(last, schedule, unit) {
  //var x = new moment()
  //var y = new moment()
  //var duration = moment.duration(x.diff(y))
  // returns duration object with the duration between x and y

  let nextDate = moment(last, "YYYY-MM-DD").add(schedule, unit);
  let today = moment();
  var difference = moment.duration(nextDate.diff(today));
  var days = difference.as("days");

  if (days <= -1) {
    return "due " + Math.abs(Math.round(days)) + " days";
  }
  if (days < 1) {
    return "today";
  } else {
    return "in " + Math.round(days) + " days";
  }
}
function dateFormat(date) {
  let changeFormat = moment(date, "YYYY-MM-DD");
  return changeFormat.format("DD-MM-YYYY");
}

function loadPlants() {
  let savedPlantsAsJsonString = localStorage.getItem("myPlant");
  if (savedPlantsAsJsonString) {
    myPlants = JSON.parse(savedPlantsAsJsonString);
  }
}

loadPlants();

for (plant of myPlants) {
  var isTodayWater = nextAction(
    plant.lastWatering,
    plant.wateringSchedule,
    "day"
  );
  var isTodayFert = nextAction(
    plant.lastFertilizing,
    plant.fertilizingSchedule,
    "week"
  );

  if (
    isTodayWater == "today" ||
    isTodayFert == "today" ||
    isTodayWater.includes("due") ||
    isTodayFert.includes("due")
  ) {
    redDot();
  }
}

function savePlantsLocalStorage() {


  let plantsAsJsonString = JSON.stringify(myPlants);

  localStorage.setItem("myPlant", plantsAsJsonString);

}

function getPlantIndex() {
  const queryString = window.location.search;

  //plant.html?plant=0

  const urlParams = new URLSearchParams(queryString);

  const plantUrl = urlParams.get('plant')
  return plantUrl;

}