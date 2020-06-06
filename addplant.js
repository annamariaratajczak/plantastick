let waterDays = 5;
let fertalizeWeeks = 3; 

function createPhoto() {

    let div = document.createElement("div");
    let img = document.createElement("img");
    div.appendChild(img);
    img.classList.add("photo");
    img.setAttribute("src", "img/not-found.png");
    img.setAttribute("alt", "plant-photo");
    img.setAttribute("id", "photo");

    let inputButton = document.createElement("input");
    div.appendChild(inputButton);
    inputButton.classList.add("photo-button");
    inputButton.setAttribute("id", "capture");
    inputButton.setAttribute("accept", "image/*");
    inputButton.setAttribute("type", "file")


    //www.youtube.com/watch?v=dbrez37HlJM
    inputButton.addEventListener("change", (ev) => {
        if (inputButton.files[0].type.indexOf("image/") > -1) {

            //https://javascript.info/blob
            var a = new FileReader();
            // convert to base64
            a.readAsDataURL(inputButton.files[0]);
            a.onload = function () {
                console.log(a.result)
                img.src = a.result;
            };

        }
    })


    let label = document.createElement("label");
    div.appendChild(label);
    label.setAttribute("for", "capture");
    let i = document.createElement("i");
    label.appendChild(i);
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
    minusWater.setAttribute("id", "minus_W_button")

    const noDays = document.createElement('h2');
    noDays.setAttribute("id", "noDays");
    spanWater.appendChild(noDays);
    noDays.textContent = "5";

    const plusWater = document.createElement('button');
    spanWater.appendChild(plusWater);
    plusWater.textContent = "+";
    plusWater.setAttribute("id", "plus_W_button")

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
    minusfert.setAttribute("id", "minus_F_button")

    const noOfWeeks = document.createElement('h2');
    spanfert.appendChild(noOfWeeks);
    noOfWeeks.setAttribute("id", "noOfWeeks");
    noOfWeeks.textContent = "3";

    const plusfert = document.createElement('button');
    spanfert.appendChild(plusfert);
    plusfert.textContent = "+";
    plusfert.setAttribute("id", "plus_F_button")
 

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


function addPlant() {
    let img = document.getElementById("photo");
    let name = document.getElementById("plant-name").value;
    let wateringSchedule = document.getElementById("noDays").textContent;
    let fertilizingSchedule = document.getElementById("noOfWeeks").textContent;
    let lastWatering = document.getElementById("last-watered").value;
    let lastFertilizing = document.getElementById("last-fert").value;
    let notes = document.getElementById("plant-notes").value;

    newPlant = {
        img: img.src,
        name: name,
        wateringSchedule: wateringSchedule,
        fertilizingSchedule: fertilizingSchedule,
        lastWatering: lastWatering,
        lastFertilizing: lastFertilizing,
        notes: notes,
    };

    console.log(newPlant);
    myPlants.push(newPlant);
    console.log(myPlants);
    savePlantsLocalStorage()
}
function savePlantsLocalStorage() {

    console.log(myPlants);
    let plantsAsJsonString = JSON.stringify(myPlants);
    console.log(plantsAsJsonString);
    localStorage.setItem("myPlant", plantsAsJsonString);
    window.location.replace("index.html");
}


function daystoWater() {
    document.getElementById("plus_W_button").onclick = function() {
        let add = waterDays++;
        document.getElementById("noDays").textContent = waterDays;
        console.log(add);
    return add
    };
    document.getElementById("minus_W_button").onclick = function () {
        let minus = waterDays--;
        document.getElementById("noDays").textContent = waterDays;
        console.log(minus);
        return minus
    }
    
    return waterDays;
}
daystoWater();

function weekstoFertalize() {
    document.getElementById("plus_F_button").onclick = (fertalizeWeeks++) ;
    document.getElementById("minus_F_button").onclick = (fertalizeWeeks - 1);
    document.getElementById("noDays").textContent = fertalizeWeeks;
    return fertalizeWeeks; 
}


// document.getElementById("nodays").innerHTML = function daystoWater()
// document.getElementById("plus_W_button").onclick = daystoWater()
// let defaultFertaliseDays = 0; 
// function daystoWater (){
//     document.getElementById('plusbutton').onclick = (defaultWaterDays++) ;
//     document.getElementById("minus_button").onclick = (defaultWaterDays - 1);
//     noOfWeeks.innerHTML = defaultWaterDays;
// }
// document.getElementById("save-button").addEventListener("click", addPlantName);
// let plantx = document.getElementById("save-button");
// plantx.addEventListener("click", addPlant);


    // document.getElementById("no-Days").onclick = function Addnumber() {
    //     let waterDays = 5; 
    //     let waterDays =+ 1;
    //  }​



    // https://attacomsian.com/blog
    // const isToday = (date) => {
    //     const today = new Date()
    //     return date.getDate() === today.getDate() &&
    //         date.getMonth() === today.getMonth() &&
    //         date.getFullYear() === today.getFullYear();
    // };
    // const date = new Date(2019, 7, 7);
    // console.log(isToday(date)); // true
    
    // Date.prototype.isToday = function () {
    //     const today = new Date()
    //     return this.getDate() === today.getDate() &&
    //     this.getMonth() === today.getMonth() &&
    //     this.getFullYear() === today.getFullYear();
    // };
    
    // const date = new Date(2019, 7, 7);
    // console.log(date.isToday());

    // function redDot(){
    //     let lastWatering = document.getElementById("last-watered").value;
    //     if lastWatering = 
    // } 