console.log('work')


function getWeather() {
    var APIkey = "09ffa92f2c32fc0fa30b5a0ed08067bb"
    var city = $("#city-search").val();
    var requestOne = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid="+ APIkey    

    fetch(requestOne)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //console.log(data)

        // === Formating date ===

    var now = moment(dataDate).format('MM/DD/YYYY')
    var dataDate = data.dt;
        console.log(now)

        // === Main display ===

    var displayEl = $("#display-weather-info")
    var cityEl = $("<h1 id='big-city' class='row flex-column'>")
    var dateEl = $("<span id='current-date'>")
    var displayTemp = $("<p id='display-temp'>")
    var displayWind = $("<p id='display-wind'>")
    var displayHumid = $("<p id='display-humid'>")
    var displayUvi = $("<p id='display-uvi'>")
    var displayIcon = $("<img id='display-icon'>")
    var displayIconUrl = "http://openweathermap.org/img/wn/"+currentIcon+".png"
    var currentIcon = data.weather[0].icon
    console.log(data)

    cityEl.text(data.name)
    displayEl.append(cityEl)

    dateEl.text(now)
    displayEl.append(dateEl)

    displayIcon.attr('src', displayIconUrl)
    displayEl.append(displayIcon)    

    displayTemp.text(data.main.temp + " F")
    displayEl.append(displayTemp)

    displayWind.text(data.wind.speed + " mph")
    displayEl.append(displayWind)

    displayHumid.text(data.main.humidity + "%")
    displayEl.append(displayHumid)




        // === 5 Day forcast cards ===

    // var cardIcon = $("<img id='weather-icon' src='' alt='Weather Icon'>")    
    // var display5 = $("#display-5day")
    // var cardEl = $("<div class='card' style='width:13rem;'>")
    // var cardCity = $("<h5 id='card-title' class='card-title'>")    
    // var cardTemp = $("<p id='card-temp' class='card-text'>")
    // var cardWind = $("<p id='card-wind' class='card-text'>")
    // var cardHumid =$("<p id='card-humid' class='card-text'>")
    // var cardBody = $("<div id='card-body' class='card-body'>")
    // var dataIcon = data.weather[0].icon
    // var iconUrl = "http://openweathermap.org/img/wn/"+dataIcon+".png"

    // cardIcon.attr('src', iconUrl)
    // cardBody.append(cardIcon)

    // cardCity.text(data.name)
    // cardBody.append(cardCity)

    // cardBody.append(cardIcon)

    // cardTemp.text("Temp: "+data.main.temp)
    // cardBody.append(cardTemp)

    // cardHumid.text("Humidity: "+data.main.humidity)
    // cardBody.append(cardHumid)

    // cardWind.text("Wind: "+data.wind.speed)
    // cardBody.append(cardWind)    

    // cardEl.append(cardBody)
    // display5.append(cardEl) 

    })   

    // var cardEl = $("<div class='card' style='width:13rem;'>")
    // var cardCity = $("<h5 id='card-title' class='card-title'>")
    // var cardIcon = $("<div id='card-icon' class='card-subtitle mb-2'>")
    // var cardTemp = $("<p id='card-temp' class='card-text'>")
    // var cardWind = $("<p id='card-wind' class='card-text'>")
    // var cardHumid =$("<p id='card-humid' class='card-text'>")
    // var cardBody = $("<div id='card-body' class='card-body'>")

    


}

$("#search-button").on("click", getWeather)