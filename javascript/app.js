let cityInput = document.querySelector("#cityInput")
let searchBtn = document.querySelector("#searchBtn")
let error = document.querySelector("#error")
let toggleUnitBtn = document.querySelector("#toggleUnit")

// weather card
let cityName = document.querySelector("#cityName")
let description = document.querySelector("#description")
let temperature = document.querySelector("#temperature")
let feelsLike = document.querySelector("#feelsLike")
let humidity = document.querySelector("#humidity")
let wind = document.querySelector("#wind")
let mondayTemp = document.querySelector("#mondayTemp")
let tuesdayTemp = document.querySelector("#tuesdayTemp")
let wednesdayTemp = document.querySelector("#wednesdayTemp")
let thursdayTemp = document.querySelector("#thursdayTemp")
let fridayTemp = document.querySelector("#fridayTemp")


// async/await function
async function searchCity() {
    let city = cityInput.value
    // first thing to put in an async function is a try and a catch block
    try {
        let response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=c22fcc8161efc4fb144c2d62fbdd0a2a&units=metric`);
        //    waits for data fetched from above api to be converted into a json
        let data = await response.json();
        console.log(data)

            cityName.innerHTML = city
            // description.innerHTML = `${data.weather.description}`
            temperature.innerHTML = `${data.main.temp}°C`
            feelsLike.innerHTML = `${data.main.feels_like}°C`
            humidity.innerHTML = `${data.main.humidity}%`
            wind.innerHTML = `${data.wind.speed} m/s`


    } catch (error) {
       error.innerHTML = `<p>Error: ${error.message}</p>`
    }

       
}

async function forecast() {
     let city = cityInput.value
     // first thing to put in an async function is a try and a catch block
     try {
         let response = await fetch(`https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c22fcc8161efc4fb144c2d62fbdd0a2a&units=metric`);
         //    waits for data fetched from above api to be converted into a json
         let data = await response.json();
         console.log(data)

            mondayTemp.innerHTML = `${data.list[0].main.temp}°C`
            tuesdayTemp.innerHTML = `${data.list[4].main.temp}°C`
            wednesdayTemp.innerHTML = `${data.list[2].main.temp}°C`
            thursdayTemp.innerHTML = `${data.list[12].main.temp}°C`
            fridayTemp.innerHTML = `${data.list[20].main.temp}°C`


          } catch (error) {
              error.innerHTML = `<p>Error: ${error.message}</p>`
          }
}


// add click event to the button
searchBtn.addEventListener('click', searchCity)
searchBtn.addEventListener('click', forecast)

async function searchCityInFahrenheit() {
    let city = cityInput.value
    // first thing to put in an async function is a try and a catch block
    try {
        let response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=c22fcc8161efc4fb144c2d62fbdd0a2a&units=imperial`);
        //    waits for data fetched from above api to be converted into a json
        let data = await response.json();
        console.log(data)

        cityName.innerHTML = city
        // description.innerHTML = `${data.weather.description}`
        temperature.innerHTML = `${data.main.temp}°F`
        feelsLike.innerHTML = `${data.main.feels_like}°F`
        humidity.innerHTML = `${data.main.humidity}%`
        wind.innerHTML = `${data.wind.speed} m/s`


    } catch (error) {
        error.innerHTML = `<p>Error: ${error.message}</p>`
    }


}

async function forecastInFahrenheit() {
    let city = cityInput.value
    // first thing to put in an async function is a try and a catch block
    try {
        let response = await fetch(`https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c22fcc8161efc4fb144c2d62fbdd0a2a&units=imperial`);
        //    waits for data fetched from above api to be converted into a json
        let data = await response.json();
        console.log(data)

        mondayTemp.innerHTML = `${data.list[0].main.temp}°F`
        tuesdayTemp.innerHTML = `${data.list[4].main.temp}°F`
        wednesdayTemp.innerHTML = `${data.list[2].main.temp}°F`
        thursdayTemp.innerHTML = `${data.list[12].main.temp}°F`
        fridayTemp.innerHTML = `${data.list[20].main.temp}°F`


    } catch (error) {
        error.innerHTML = `<p>Error: ${error.message}</p>`
    }
}


// add click event to the button
toggleUnitBtn.addEventListener('click', searchCityInFahrenheit)
toggleUnitBtn.addEventListener('click', forecastInFahrenheit)