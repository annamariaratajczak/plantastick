
let urlIndex = 0;

for (plant of myPlants) {
    plantItem(plant, urlIndex);
    urlIndex++;
}

function plantItem(plant, urlIndex) {


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

    let itemImg = document.createElement("img");
    itemLink.appendChild(itemImg);
    itemImg.classList.add("media-object");
    itemImg.classList.add("pull-left");
    itemImg.classList.add("liPlantImg")
    itemImg.setAttribute("src", plant.img);
    itemImg.setAttribute("width", "150");

    let itemParameters = document.createElement("div");
    itemLink.appendChild(itemParameters);
    itemParameters.classList.add("media-body");

    const plantName = document.createElement('div');
    itemParameters.appendChild(plantName);
    plantName.classList.add("plant-name")
    plantName.textContent = plant.name;

    const waterSpan = document.createElement('span');
    itemParameters.appendChild(waterSpan);

    const iconWater = document.createElement('img');
    waterSpan.appendChild(iconWater);
    iconWater.setAttribute("class", "careIcons");
    iconWater.setAttribute("src", "img/waterdropicon.svg")
    const wText = document.createTextNode(nextAction(plant.lastWatering, plant.wateringSchedule, "day"));
    waterSpan.appendChild(wText);
    const breake = document.createElement('br');
    waterSpan.appendChild(breake);



    const fertSpan = document.createElement('span');
    itemParameters.appendChild(fertSpan);

    const iconFert = document.createElement('img');
    fertSpan.appendChild(iconFert);
    iconFert.setAttribute("src", "img/fertaliseicon.svg");
    iconFert.setAttribute("class", "careIcons");


    const fText = document.createTextNode(nextAction(plant.lastFertilizing, plant.fertilizingSchedule, "week"));
    fertSpan.appendChild(fText);
}


