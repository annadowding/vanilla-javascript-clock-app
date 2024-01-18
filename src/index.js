

function updateCity (city) {
    let timeElement = document.querySelector(".time");
    let cityElement = document.querySelector(".city");

    if (
      city === "America/Los_Angeles" ||
      city === "Africa/Harare" ||
      city === "Europe/London" ||
      city === "Asia/Tokyo"
    ) {
      cityElement.innerHTML = city.replace("_", " ").split("/")[1];
      timeElement.innerHTML = moment().tz(`${city}`).format("HH:mm:ss A");
    }
    if (city === "current") {
        cityElement.innerHTML = moment.tz.guess().replace("_", " ").split("/")[1];
        let guessTimeZone = moment.tz.guess();
        timeElement.innerHTML = moment.tz(guessTimeZone).format("HH:mm:ss A");
    }
        
    
}

function handleSearch (event) {
    event.preventDefault();
    let city = selectElement.value;
    updateCity(city);
}

let selectElement = document.querySelector(".select");
selectElement.addEventListener("change", handleSearch);

// setInterval(handleSearch);