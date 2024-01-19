function updateCity (city) {
     
    let timeElement = document.querySelector(".time");
    let cityElement = document.querySelector(".city");
    let hidden = (document.querySelector("#homeCities").style.visibility =
      "hidden");
      let dateElement = document.querySelector(".date");
        let cityTime = moment().tz(`${city}`);
        dateElement.innerHTML=cityTime.format("dddd Mo MMMM YYYY");

    if (
      city === "America/Los_Angeles" ||
      city === "Asia/Tokyo" ||
      city === "Africa/Harare" ||
      city === "Europe/London" 
    ) {
      cityElement.innerHTML = city.replace("_", " ").split("/")[1];
      timeElement.innerHTML = moment().tz(`${city}`).format("HH:mm:ss A");
      hidden;
    }
    if (city === "current") {
        cityElement.innerHTML = moment.tz.guess().replace("_", " ").split("/")[1];
        let guessTimeZone = moment.tz.guess();
        timeElement.innerHTML = moment.tz(guessTimeZone).format("HH:mm:ss A");
        hidden;
    }
}

function handleSearch (event) {
    event.preventDefault();
    let city = selectElement.value;
    updateCity(city);
}

function homeDisplay() {
    let londonTime = moment().tz("Europe/London");
    let harareTime = moment().tz("Africa/Harare");
  let londonTimeElement = document.querySelector("#londonTime");
  let harareTimeElement = document.querySelector("#harareTime");
  let londonDateElement=document.querySelector("#londonDate");
  let harareDateElement=document.querySelector("#harareDate");

  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("HH:mm:ss A");
  harareTimeElement.innerHTML = moment()
    .tz("Africa/Harare")
    .format("HH:mm:ss A");
  londonDateElement.innerHTML = londonTime.format("dddd Mo MMMM YYYY");
  harareDateElement.innerHTML = harareTime.format("dddd Mo MMMM YYYY");
}

let selectElement = document.querySelector(".select");
selectElement.addEventListener("change", handleSearch);
homeDisplay();


setInterval(homeDisplay, 1000);