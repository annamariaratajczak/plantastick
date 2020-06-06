let urlIndex = 0;
function redDot(){
    let redBadge = document.getElementById("redBadge");
    console.log(redBadge )
    redBadge.classList.remove("hideBadge");
    return redBadge
}

for (plant of myPlants) {

    var isTodayWater = nextAction(plant.lastWatering, plant.wateringSchedule, "day");
    var isTodayFert = nextAction(plant.lastFertilizing, plant.fertilizingSchedule, "week");


    if (isTodayWater == "today" || isTodayFert == "today" || isTodayWater.includes("due") || isTodayFert.includes("due")) {

    redDot();
        plantItem(plant, urlIndex);
    }

    urlIndex++;
}

function plantItem(plant, urlIndex) {
    var isTodayWater = nextAction(plant.lastWatering, plant.wateringSchedule, "day");
    var isTodayFert = nextAction(plant.lastFertilizing, plant.fertilizingSchedule, "week");

    let list = document.getElementById("myPlantList")

    let item = document.createElement("li");
    list.appendChild(item);
    item.classList.add("table-view-cell");
    item.classList.add("media");

    let itemLink = document.createElement("a");
    item.appendChild(itemLink);
    itemLink.classList.add("navigate-right");
    itemLink.setAttribute("data-ignore", "push");
    itemLink.href = "plant.html?plant=" + urlIndex;
    let waterButtonSpan = document.createElement("span")
    item.appendChild(waterButtonSpan);

    let buttons = document.createElement("li");
    list.appendChild(buttons);
    
    let waterDone = document.createElement("button");
    buttons.appendChild(waterDone);
    waterDone.setAttribute("class", "waterDone");

    
    waterDone.onclick = function() {
        waterDone.disabled = true;

        let now = moment();
        let nowFormat = now.format("DD-MM-YYYY");
        console.log("now is" + nowFormat); 
        plant.lastWatering = nowFormat;
        savePlantsLocalStorage();    
    }
            
    waterDone.textContent = "Mark as watered";


    let fertilizingDone = document.createElement("button");
    buttons.appendChild(fertilizingDone);
    
    
    fertilizingDone.onclick = function () {
        fertilizingDone.disabled = true;
  }

    fertilizingDone.textContent = "Mark as fertilized";
   

    let itemImg = document.createElement("img");
    itemLink.appendChild(itemImg);
    itemImg.classList.add("media-object");
    itemImg.classList.add("pull-left");
    itemImg.setAttribute("src", plant.img);
    itemImg.setAttribute("width", "150");

    let itemParameters = document.createElement("div");
    itemLink.appendChild(itemParameters);
    itemParameters.classList.add("media-body");

    const plantName = document.createElement('div');
    itemParameters.appendChild(plantName);
    plantName.classList.add("plant-name")
    plantName.textContent = plant.name;

    //if statement to append only the one that is due or for today

    if (isTodayWater == "today" || isTodayWater.includes("due")) {
        const waterSpan = document.createElement('span');
        itemParameters.appendChild(waterSpan);

        const iconWater = document.createElement('i');
        waterSpan.appendChild(iconWater);
        iconWater.setAttribute("class", "fas fa-tint");
        const wText = document.createTextNode(nextAction(plant.lastWatering, plant.wateringSchedule, "day"));
        waterSpan.appendChild(wText);
        const breake = document.createElement('br');
        waterSpan.appendChild(breake);

    } else {
        waterDone.disabled = true;
    }
    


    if (isTodayFert == "today" || isTodayFert.includes("due")) {
        const fertSpan = document.createElement('span');
        itemParameters.appendChild(fertSpan);

        const iconFert = document.createElement('i');
        fertSpan.appendChild(iconFert);
        iconFert.setAttribute("class", "fas fa-prescription-bottle");
        const fText = document.createTextNode(nextAction(plant.lastFertilizing, plant.fertilizingSchedule, "week"));
        fertSpan.appendChild(fText);
        
    
    } else {
            fertilizingDone.disabled = true;
        }

    
}



