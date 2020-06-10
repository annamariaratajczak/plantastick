let waterDays = 5;
let fertalizeWeeks = 3;

function createPhoto(plant) {

    console.log(plant);
    let div = document.createElement("div");
    div.setAttribute("class", "round");
    let img = document.createElement("img");
    div.appendChild(img);
    img.classList.add("photo");
    //to edit the content of the page
    if (plant == null) {
    
        img.setAttribute("src", "img/placeholderbigger.svg");
    } else {
        img.setAttribute("src", plant.img);
    }
        
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
            var reader = new FileReader();
            // convert to base64
            reader.readAsDataURL(inputButton.files[0]);


            reader.onload = function (e) {
                var img2 = document.createElement("img");
                img2.src = e.target.result;
                // https://stackoverflow.com/questions/31853770/save-image-to-localstorage-html-after-resize-and-show-same/31854594

                img2.onload = function () {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img2, 0, 0);


                    var MAX_WIDTH = 500;
                    var width = img2.width;
                    var height = img2.height;

                    height = height * (MAX_WIDTH / width);
                    width = MAX_WIDTH;

                    canvas.width = width;
                    canvas.height = height;

                    ctx.drawImage(img2, 0, 0, width, height);

                    var photo = canvas.toDataURL("image/jpeg");

                    document.getElementById('photo').src = photo;
                }




            };

        }
    })


    let label = document.createElement("label");
    div.appendChild(label);
    label.setAttribute("for", "capture");

    let camIcon = document.createElement("img");
    label.appendChild(camIcon);
    camIcon.setAttribute("class", "cameraIcon");
    camIcon.setAttribute("src", "img/cameradarkgreen.svg");

    return div
}

function createName(plant) {

    let div = document.createElement("div");
    div.classList.add("plant-name-div");
    let label = document.createElement("label");
    div.appendChild(label);
    label.setAttribute("for", "plant-name");
    label.textContent = "Plant name: ";
    let input = document.createElement("input");
    div.appendChild(input);

    if (plant == null) {

        input.value = "";
    } else {
        input.value = plant.name;
    } 

    input.setAttribute("type", "text");
    input.setAttribute("id", "plant-name")
    input.setAttribute("name", "plant-name");
    
    input.classList.add("class", "inputStyle");

    return div
}


function createSchedule(plant) {

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
    minusWater.textContent = "−";
    minusWater.setAttribute("id", "minus_W_button")

    const noDays = document.createElement('h2');
    noDays.setAttribute("id", "noDays");
    spanWater.appendChild(noDays);
    

    if (plant == null) {

        noDays.textContent = waterDays;
    } else {
        noDays.textContent = plant.wateringSchedule;
    } 


    const plusWater = document.createElement('button');
    spanWater.appendChild(plusWater);
    plusWater.textContent = "+";
    plusWater.setAttribute("id", "plus_W_button")

    let waterParagraph2 = document.createElement("p");
    waterDiv.appendChild(waterParagraph2);
    waterParagraph2.textContent = "days";

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
    lastWaterInput.classList.add("class", "inputStyle");
    

    if (plant != null) {

        lastWaterInput.value = moment(plant.lastWatering, "DD-MM-YYYY").format("YYYY-MM-DD");
    }

    function maxDate() {
        //https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
        var today = new Date();
        console.log(today);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        return today


    }
    lastWaterInput.setAttribute("max", maxDate());
    lastWaterInput.setAttribute("id", "last-watered");
    lastWaterInput.setAttribute("name", "last-watered");



    let fertDiv = document.createElement("div");
    scheduleDiv.appendChild(fertDiv);
    fertDiv.classList.add("activity");

    let fertHeader = document.createElement("h3");
    fertDiv.appendChild(fertHeader);
    fertHeader.textContent = "FERTILIZER";

    let fertParagraph = document.createElement("p");
    fertDiv.appendChild(fertParagraph);
    fertParagraph.textContent = "every";

    const spanfert = document.createElement('span');
    fertDiv.appendChild(spanfert);

    const minusfert = document.createElement('button');
    spanfert.appendChild(minusfert);
    minusfert.textContent = "−";
    minusfert.setAttribute("id", "minus_F_button")

    const noOfWeeks = document.createElement('h2');
    spanfert.appendChild(noOfWeeks);
    noOfWeeks.setAttribute("id", "noOfWeeks");

    if (plant == null) {

        noOfWeeks.textContent = fertalizeWeeks;
    } else {
        noOfWeeks.textContent = plant.fertilizingSchedule;
    } 
    

    const plusfert = document.createElement('button');
    spanfert.appendChild(plusfert);
    plusfert.textContent = "+";
    plusfert.setAttribute("id", "plus_F_button")


    let fertParagraph2 = document.createElement("p");
    fertDiv.appendChild(fertParagraph2);
    fertParagraph2.textContent = "weeks";


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
    lastFertInput.setAttribute("max", maxDate());
    lastFertInput.setAttribute("id", "last-fert");
    lastFertInput.setAttribute("name", "last-fert");
    lastFertInput.classList.add("class", "inputStyle");
    if (plant != null) {

        lastFertInput.value = moment(plant.lastFertilizing, "DD-MM-YYYY").format("YYYY-MM-DD");
        console.log(plant.lastFertilizing)
    }

    return scheduleDiv

}

function createNotes(plant) {

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
    input.classList.add("class", "inputStyle");

    if (plant != null) {

        input.value = plant.notes;
    }
    
    return div
}

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

    let plantUrl = getPlantIndex();

    if (plantUrl == null) {
        myPlants.push(newPlant);
    } else {
        myPlants[plantUrl] = newPlant;
    }

    savePlantsLocalStorage()
    window.location.replace("index.html");
}



function daystoWater(plant) {

    if (plant != null) {
        waterDays = plant.wateringSchedule;
    }
    document.getElementById("plus_W_button").onclick = function () {
        let add = waterDays++;
        document.getElementById("noDays").textContent = waterDays;
        console.log(add);
        if (waterDays > 30) {
            document.getElementById("noDays").textContent = 30;
            waterDays = 30;
        }
        return add
    };

    document.getElementById("minus_W_button").onclick = function () {
        let minus = waterDays--;
        document.getElementById("noDays").textContent = waterDays;
        console.log(minus);
        if (waterDays < 2) {
            document.getElementById("noDays").textContent = 1;
            waterDays = 1;
        }
        return minus
    }
    return waterDays;
}

function weekstoFertalize(plant) {
    if (plant != null) {
        fertalizeWeeks = plant.fertilizingSchedule;
    }
    document.getElementById("plus_F_button").onclick = function () {
        let add = fertalizeWeeks++;
        document.getElementById("noOfWeeks").textContent = fertalizeWeeks;
        console.log(add);
        if (fertalizeWeeks > 54) {
            document.getElementById("noOfWeeks").textContent = 54;
            fertalizeWeeks = 54;
        }
        return add
    };
    document.getElementById("minus_F_button").onclick = function () {
        let minus = fertalizeWeeks--;
        document.getElementById("noOfWeeks").textContent = fertalizeWeeks;
        console.log(minus);
        if (fertalizeWeeks < 2) {
            document.getElementById("noOfWeeks").textContent = 1;
            fertalizeWeeks = 1;
        }
        return minus

    }

    return fertalizeWeeks;
}

let plantUrl = getPlantIndex();
let pageHeadline = document.getElementById("pageHeader");
if (plantUrl != null) {
    pageHeadline.textContent = "Edit plant";
} else {
    pageHeadline.textContent = "Add plant";
}

console.log(plantUrl)
let content = document.getElementById("content");

//function createPhoto
let photo = createPhoto(myPlants[plantUrl]);
content.appendChild(photo);

//function createName 
let name = createName(myPlants[plantUrl]);
content.appendChild(name);


//function create schedule
let schedule = createSchedule(myPlants[plantUrl]);
content.appendChild(schedule);

//function create notes
let notes = createNotes(myPlants[plantUrl]);
content.appendChild(notes);

daystoWater(myPlants[plantUrl]);
weekstoFertalize(myPlants[plantUrl]);


