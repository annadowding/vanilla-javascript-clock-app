

function handleSearch (city) {
    let timeElement = document.querySelector(".time");
    

        timeElement.innerHTML= moment().tz(`${city}`).format("HH:mm:ss");
        
    
}

function updateCity (event) {
    event.preventDefault();
    let city = selectElement.value;
    handleSearch(city);
    if (city === "America/Los_Angeles") {
    let cityElement = document.querySelector(".city");
    cityElement.innerHTML ="Los Angeles";
    }
}

let selectElement = document.querySelector(".select");
selectElement.addEventListener("change", updateCity);

// setInterval(handleSearch);