let myPlants = [
  {
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
  }
]


function displayPlaceHolderText(notes) {
  console.log(notes)
  if (notes == "" || typeof notes === "undefined") {
    console.log(notes)
    return notes = "Click on Edit to add a note.";
  } else {
    return notes;
  }
}




function nextAction(last, schedule, unit) {

  //var x = new moment()
  //var y = new moment()
  //var duration = moment.duration(x.diff(y))
  // returns duration object with the duration between x and y

  let nextDate = moment(last).add(schedule, unit);
  let today = moment();
  var difference = moment.duration(nextDate.diff(today));
  var days = difference.as("days");
  console.log(days);

  if (days <= -1) {
    return "due " + Math.abs(Math.round(days)) + " days"
  }

  if (days < 1) {
    return "today"
  } else {
    return "in " + Math.round(days) + " days";
  }

}

function dateFormat(date) {

  let changeFormat = moment(date);

  return changeFormat.format('DD-MM-YYYY')

}

