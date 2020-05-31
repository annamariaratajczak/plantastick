
function createPhoto() {

    let div = document.createElement("div");
    let img = document.createElement("img");
    div.appendChild(img);
    img.classList.add("photo");
    img.setAttribute("src", "img/plant2.jpg");
    img.setAttribute("alt", "plant-photo");

    return div
}

function createName() {

    let div = document.createElement("div");
    div.classList.add("plant-name-div");
    let label = document.createElement("label");
    div.appendChild(label);
    label.setAttribute("for", "plant-name");
    label.textContent = "Plant name: ";

    let name = document.createElement("h2");
    div.appendChild(name);
    name.textContent = "Carlos"

    return div
}

function createSchedule() {

    let scheduleDiv = document.createElement("div");
    scheduleDiv.classList.add("schedule");
    scheduleDiv.classList.add("profile-page")

    let waterDiv = document.createElement("div");
    scheduleDiv.appendChild(waterDiv);
    waterDiv.classList.add("activity");

    let waterHeader = document.createElement("h3");
    waterDiv.appendChild(waterHeader);
    waterHeader.textContent = "WATER";

    let daysCountWater = document.createElement("span");
    waterDiv.appendChild(daysCountWater);


    let waterParagraph = document.createElement("p");
    daysCountWater.appendChild(waterParagraph);
    waterParagraph.textContent = "every";

    const noOfDays = document.createElement('h2');
    daysCountWater.appendChild(noOfDays);
    noOfDays.textContent = "5";

    let waterParagraph2 = document.createElement("p");
    daysCountWater.appendChild(waterParagraph2);
    waterParagraph2.textContent = "days";


    const lastWater = document.createElement('div');
    scheduleDiv.appendChild(lastWater);
    lastWater.classList.add("input-field");

    lastWaterLabel = document.createElement("label");
    lastWater.appendChild(lastWaterLabel);
    lastWaterLabel.setAttribute("for", "last-watered");
    lastWaterLabel.textContent = "Last watered on: ";

    let lastWaterDate = document.createElement("h4");
    lastWater.appendChild(lastWaterDate);
    lastWaterDate.textContent = " 30/05/2020";



    let fertDiv = document.createElement("div");
    scheduleDiv.appendChild(fertDiv);
    fertDiv.classList.add("activity");

    let fertHeader = document.createElement("h3");
    fertDiv.appendChild(fertHeader);
    fertHeader.textContent = "FERTILIZER";

    let daysCountFert = document.createElement("span");
    fertDiv.appendChild(daysCountFert);


    let fertParagraph = document.createElement("p");
    daysCountFert.appendChild(fertParagraph);
    fertParagraph.textContent = "every";

    const noOfWeeks = document.createElement('h2');
    daysCountFert.appendChild(noOfWeeks);
    noOfWeeks.textContent = "3";

    let fertParagraph2 = document.createElement("p");
    daysCountFert.appendChild(fertParagraph2);
    fertParagraph2.textContent = "weeks";




    const lastFert = document.createElement('div');
    scheduleDiv.appendChild(lastFert);
    lastFert.classList.add("input-field");

    lastFertLabel = document.createElement("label");
    lastFert.appendChild(lastFertLabel);
    lastFertLabel.setAttribute("for", "last-fert");
    lastFertLabel.textContent = "Last fertilized on: ";

    let lastFertDate = document.createElement("h4");
    lastFert.appendChild(lastFertDate);
    lastFertDate.textContent = " 25/05/2020";

    return scheduleDiv

}

function createNotes() {

    const div = document.createElement('div');
    div.classList.add("plant-notes-div");

    const label = document.createElement('label');
    div.appendChild(label);
    label.setAttribute("for", "plant-notes");
    label.textContent = "Notes: ";

    const noNote = document.createElement('p');
    div.appendChild(noNote);
    noNote.textContent = "Click on Edit to add a note."

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




