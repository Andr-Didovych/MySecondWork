const jsonData = `[
	{
	  "title": "M142 High Mobility Artillery Rocket System",
	  "mass": { "title": "Mass", "value": 16250, "units": "kg" },
	  "strike_range": { "title": "Strike range", "value": 70, "units": "km" },
	  "price": { "title": "Price", "value": 3500000, "units": "dollars" }
	},
	{
	  "title": "BM-21 Grad",
	  "mass": { "title": "Mass", "value": 13710, "units": "kg" },
	  "strike_range": { "title": "Strike range", "value": 30, "units": "km" },
	  "price": { "title": "Price", "value": 500000, "units": "dollars" }
	},
	{
	  "title": "M270 MLRS",
	  "mass": { "title": "Mass", "value": 24000, "units": "kg" },
	  "strike_range": { "title": "Strike range", "value": 165, "units": "km" },
	  "price": { "title": "Price", "value": 2100000, "units": "dollars" }
	}
  ]`;

// let jsonFile = require("./data.json");
// console.log(jsonFile);

function loadItems() {
  let jsonArr = JSON.parse(jsonData);

  for (let index in jsonArr) {
    let militaryMachine = jsonArr[index];
    loadItem(militaryMachine);
  }
}

function loadItem(item) {
  console.log("Inside loadItem function");
  console.log(item);

  let content = document.getElementById("content");

  // Create div for the item
  let itemDiv = document.createElement("div");
  itemDiv.setAttribute("name", "Compare1");
  itemDiv.setAttribute("class", "child");
  content.appendChild(itemDiv);

  // Create a span for title
  let itemSpan = document.createElement("span");
  itemSpan.setAttribute("name", "title");
  itemSpan.setAttribute("class", "child__titles");
  itemSpan.innerText = item.title;
  itemDiv.appendChild(itemSpan);

  // Create a <dl>
  let dlElement = document.createElement("dl");
  itemDiv.appendChild(dlElement);
  dlElement.setAttribute("class", "child__card card");
  

  // Create <div> for <dl>

  let divMass = document.createElement("div");
  dlElement.appendChild(divMass);
  divMass.setAttribute("class", "card");

  // Create <dt> for <div> for <dl>
  let dtMassTitle = document.createElement("dt");
  divMass.appendChild(dtMassTitle);

  let spanMassTitle = document.createElement("span");
  dtMassTitle.appendChild(spanMassTitle);
  spanMassTitle.innerText = item.mass.title;

  let ddMassTitle = document.createElement("dd");
  divMass.appendChild(ddMassTitle);

  let spanMassTitleValue = document.createElement("span");
  ddMassTitle.appendChild(spanMassTitleValue);
  spanMassTitleValue.innerText = item.mass.value;
  spanMassTitleValue.setAttribute("name", "massValue");

  let spanMassTitleUnits = document.createElement("span");
  ddMassTitle.appendChild(spanMassTitleUnits);
  spanMassTitleUnits.innerText = item.mass.units;

  // Create strike_range

  let divStrike_range = document.createElement("div");
  dlElement.appendChild(divStrike_range);
  divStrike_range.setAttribute("class", "card");

  let dtStrike_rangeTitle = document.createElement("dt");
  divStrike_range.appendChild(dtStrike_rangeTitle);

  let spanStrike_rangeTitle = document.createElement("span");
  dtStrike_rangeTitle.appendChild(spanStrike_rangeTitle);
  spanStrike_rangeTitle.innerText = item.strike_range.title;

  let ddStrike_rangeTitle = document.createElement("dd");
  divStrike_range.appendChild(ddStrike_rangeTitle);

  let spanStrike_rangeTitleValue = document.createElement("span");
  ddStrike_rangeTitle.appendChild(spanStrike_rangeTitleValue);
  spanStrike_rangeTitleValue.innerText = item.strike_range.value;
  spanStrike_rangeTitleValue.setAttribute("name", "rangeValue");

  let spanStrike_rangeTitleUnits = document.createElement("span");
  ddStrike_rangeTitle.appendChild(spanStrike_rangeTitleUnits);
  spanStrike_rangeTitleUnits.innerText = item.strike_range.units;

  //Create price

  let divPrice = document.createElement("div");
  dlElement.appendChild(divPrice);
  divPrice.setAttribute("class", "card");

  let dtPriceTitle = document.createElement("dt");
  divPrice.appendChild(dtPriceTitle);
  // dtPriceTitle.setAttribute("class", "card__name");

  let spanPriceTitle = document.createElement("span");
  dtPriceTitle.appendChild(spanPriceTitle);
  spanPriceTitle.innerText = item.price.title;

  let ddPriceTitle = document.createElement("dd");
  divPrice.appendChild(ddPriceTitle);

  let spanPriceTitleValue = document.createElement("span");
  ddPriceTitle.appendChild(spanPriceTitleValue);
  spanPriceTitleValue.innerText = item.price.value;
  spanPriceTitleValue.setAttribute("name", "priceValue");

  let spanPriceTitleUnits = document.createElement("span");
  ddPriceTitle.appendChild(spanPriceTitleUnits);
  spanPriceTitleUnits.innerText = item.price.units;
}

function compare() {
  compareByName("priceValue", "green", "red");
  compareByName("massValue", "green", "red");
  compareByName("rangeValue", "red", "green");
  // let priceElements = document.getElementsByName("priceValue");

  // let minPrice = Number.MAX_VALUE;
  // let maxPrice = Number.MIN_VALUE;

  // for (let i = 0; i < priceElements.length; i++) {
  //   let price = parseFloat(priceElements[i].innerText);

  //   if (price < minPrice) {
  //     minPrice = price;
  //   }

  //   if (price > maxPrice) {
  //     maxPrice = price;
  //   }
  // }

  // for (let i = 0; i < priceElements.length; i++) {
  //   let span = priceElements[i];
  //   let price = parseFloat(span.innerText);

  //   if (price === maxPrice) {
  //     span.style.backgroundColor = "red";
  //   }
  //   if (price === minPrice) {
  //     span.style.backgroundColor = "green";
  //   }
  // }

  // let rangeElements = document.getElementsByName("rangeValue");

  // let minRange = Number.MAX_VALUE;
  // let maxRange = Number.MIN_VALUE;

  // for (let i = 0; i < rangeElements.length; i++) {
  //   let range = parseFloat(rangeElements[i].innerText);

  //   if (range < minRange) {
  //     minRange = range;
  //   }

  //   if (range > maxRange) {
  //     maxRange = range;
  //   }
  // }

  // for (let i = 0; i < rangeElements.length; i++) {
  //   let span = rangeElements[i];
  //   let range = parseFloat(span.innerText);

  //   if (range === maxRange) {
  //     span.style.backgroundColor = "red";
  //   }
  //   if (range === minRange) {
  //     span.style.backgroundColor = "green";
  //   }
  // }

  // //MassValue

  // let massElements = document.getElementsByName("MassValue");

  // let minMass = Number.MAX_VALUE;
  // let maxMass = Number.MIN_VALUE;

  // for (let i = 0; i < massElements.length; i++) {
  //   let mass = parseFloat(massElements[i].innerText);

  //   if (mass < minMass) {
  //     minMass = mass;
  //   }

  //   if (mass > maxMass) {
  //     maxMass = mass;
  //   }
  // }

  // for (let i = 0; i < massElements.length; i++) {
  //   let span = massElements[i];
  //   let mass = parseFloat(span.innerText);

  //   if (mass === maxMass) {
  //     span.style.backgroundColor = "red";
  //   }
  //   if (mass === minMass) {
  //     span.style.backgroundColor = "green";
  //   }
  // }
}

function compareByName(name, minColor, maxColor) {
  let elements = document.getElementsByName(name);

  let minValue = Number.MAX_VALUE;
  let maxValue = Number.MIN_VALUE;

  for (let i = 0; i < elements.length; i++) {
    let value = parseFloat(elements[i].innerText);

    if (value < minValue) {
      minValue = value;
    }

    if (value > maxValue) {
      maxValue = value;
    }
  }

  for (let i = 0; i < elements.length; i++) {
    let span = elements[i];
    let value = parseFloat(span.innerText);

    if (value === maxValue) {
      span.style.backgroundColor = maxColor;
    }
    if (value === minValue) {
      span.style.backgroundColor = minColor;
    }
  }
}
