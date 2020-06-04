
function createPhoto() {

    let div = document.createElement("div");
    let img = document.createElement("img");
    div.appendChild(img);
    img.classList.add("photo");
    img.setAttribute("src", "img/not-found.png");
    img.setAttribute("alt", "plant-photo");

    let button = document.createElement("button");
    div.appendChild(button);
    button.classList.add("photo-button");
    let i = document.createElement("i");
    button.appendChild(i);
    i.setAttribute("class", "fas fa-camera");

    return div
}

function createName() {

    let div = document.createElement("div");
    div.classList.add("plant-name-div");
    let label = document.createElement("label");
    div.appendChild(label);
    label.setAttribute("for", "plant-name");
    label.textContent = "Plant name: ";
    let input = document.createElement("input");
    div.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute("id", "plant-name")
    input.setAttribute("name", "plant-name");

    return div
}


function createSchedule() {

    let scheduleDiv = document.createElement("div");
    scheduleDiv.classList.add("schedule");

    let waterDiv = document.createElement("div");
    scheduleDiv.appendChild(waterDiv);
    waterDiv.classList.add("activity");

    let waterHeader = document.createElement("h3");
    waterDiv.appendChild(waterHeader);
    waterHeader.textContent = "WATER";

    let waterParagraph = document.createElement("p");
    waterDiv.appendChild(waterParagraph);
    waterParagraph.textContent = "every";

    const spanWater = document.createElement('span');
    waterDiv.appendChild(spanWater);

    const minusWater = document.createElement('button');    
    spanWater.appendChild(minusWater);
    minusWater.textContent = "-";

    const noDays = document.createElement('h2');
    spanWater.appendChild(noDays);
    noDays.textContent = "5";

    const plusWater = document.createElement('button');
    spanWater.appendChild(plusWater);
    plusWater.textContent = "+";

    let waterParagraph2 = document.createElement("p");
    waterDiv.appendChild(waterParagraph2);
    waterParagraph2.textContent = "day";

    const lastWater = document.createElement('div');
    scheduleDiv.appendChild(lastWater);
    lastWater.classList.add("input-field");

    lastWaterLabel = document.createElement("label");
    lastWater.appendChild(lastWaterLabel);
    lastWaterLabel.setAttribute("for", "last-watered");
    lastWaterLabel.textContent = "Last watered on: ";

    let lastWaterInput = document.createElement("input");
    lastWater.appendChild(lastWaterInput);
    lastWaterInput.setAttribute("type", "date");
    lastWaterInput.setAttribute("id", "last-watered");
    lastWaterInput.setAttribute("name", "last-watered");



    let fertDiv = document.createElement("div");
    scheduleDiv.appendChild(fertDiv);
    fertDiv.classList.add("activity");

    let fertHeader = document.createElement("h3");
    fertDiv.appendChild(fertHeader);
    fertHeader.textContent = "Fertilizer";

    let fertParagraph = document.createElement("p");
    fertDiv.appendChild(fertParagraph);
    fertParagraph.textContent = "every";

    const spanfert = document.createElement('span');
    fertDiv.appendChild(spanfert);

    const minusfert = document.createElement('button');
    spanfert.appendChild(minusfert);
    minusfert.textContent = "-";

    const noOfWeeks = document.createElement('h2');
    spanfert.appendChild(noOfWeeks);
    noOfWeeks.textContent = "3";

    const plusfert = document.createElement('button');
    spanfert.appendChild(plusfert);
    plusfert.textContent = "+";

    let fertParagraph2 = document.createElement("p");
    fertDiv.appendChild(fertParagraph2);
    fertParagraph2.textContent = "week";

    


    const lastFert = document.createElement('div');
    scheduleDiv.appendChild(lastFert);
    lastFert.classList.add("input-field");

    lastFertLabel = document.createElement("label");
    lastFert.appendChild(lastFertLabel);
    lastFertLabel.setAttribute("for", "last-fert");
    lastFertLabel.textContent = "Last fertilized on: ";

    let lastFertInput = document.createElement("input");
    lastFert.appendChild(lastFertInput);
    lastFertInput.setAttribute("type", "date");
    lastFertInput.setAttribute("id", "last-fert");
    lastFertInput.setAttribute("name", "last-fert");

return scheduleDiv
    
}

function createNotes() {
    
    const div = document.createElement('div');
    div.classList.add("plant-notes-div");

    const label = document.createElement('label');
    div.appendChild(label);
    label.setAttribute("for", "plant-notes");
    label.textContent = "Notes: ";

    const input = document.createElement('input');
    div.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute("id", "plant-notes");
    input.setAttribute("name", "plant-notes");

    return div
}


let content = document.getElementById("content");

//function createPhoto
let photo = createPhoto();
content.appendChild(photo);

//function createName 
let name = createName();
content.appendChild(name);


//function create schedule
let schedule = createSchedule();
content.appendChild(schedule);

//function create notes
let notes = createNotes();
content.appendChild(notes);

//zahra----------------------
let myPlantsInfo =[];
function addPlant() {
    let plantName = document.getElementById("plant-name").value;
    let lastWateredDate = document.getElementById("last-watered").value;
    let lastFertalizeDate = document.getElementById('last-fert').value;
    let allNotes = document.getElementById('plant-notes').value;

    let newPlant = {
        plantName: plantName,
        lastWateredDate: lastWateredDate,
        lastFertalizeDate: lastFertalizeDate,
        allNotes : allNotes,
    };

    myPlantsInfo.push(newPlant);
    console.log(myPlantsInfo) ;
}
function savePlantsLocalStorage() {
    let plantsAsJsonString = JSON.stringify(myPlantsInfo);
    localStorage.setItem("key", plantsAsJsonString);
}
function loadPlants() {
    let savedPlantsAsJsonString = localStorage.getItem("key");
    if (savedPlantsAsJsonString) {
        myPlantsInfo = JSON.parse(savedPlantsAsJsonString);
    }
}
// function addPlantName(){
//     let divPlantName = document.getElementById ("reflect Value");
//     let inpName = document.getElementById("plant-name").value;
//     divPlantName.innerHTML = inpName;
// }
// document.getElementById("save-button").addEventListener("click", addPlantName);
// let plantx = document.getElementById("save-button");
// plantx.addEventListener("click", addPlant);
// const noDays = document.createElement('h2');
//     spanWater.appendChild(noDays);
//     noDays.textContent = "5";

    // document.getElementById("no-Days").onclick = function Addnumber() {
    //     let waterDays = 5; 
    //     let waterDays =+ 1;
    //  }​