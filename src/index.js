

function handleSearch (city) {
    let timeElement = document.querySelector(".time");
    if (city === "Europe/London"){
        timeElement.innerHTML= moment().tz(`${city}`).format("HH:mm:ss");
    }
}

function updateCity (event) {
    event.preventDefault();
    let city = selectElement.value;
    handleSearch(city);
}

let selectElement = document.querySelector(".select");
selectElement.addEventListener("change", updateCity);
