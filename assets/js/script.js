console.log('work')

// var geoAPIkey //= "58e0ffc4029d6627d5281bd568bd2b8b"
// var city //= $("#city-search").val();
// var state //= $("#state-search").val();
// var requestGeo  //"https://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state +"&appid="+ geoAPIkey 
// var lat
// var lon

// function getGeo (){
//     var geoAPIkey = "58e0ffc4029d6627d5281bd568bd2b8b"
//     var requestGeo = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state +"&appid="+ geoAPIkey 
//     var city =$("#city-search").val();
//     var state =$("#state-search").val();
 
// fetch(requestGeo)
// .then(function(response){
//     return response.json();
// })
// .then(function(geo){
//     console.log(geo)
//     var lat = [0].lat
//     var lon = [0].lon
//     console.log(lat)
//     console.log(lon)
// })

// }


function getWeather() {
    var APIkey = "58e0ffc4029d6627d5281bd568bd2b8b"
    var city = $("#city-search").val();
    //var state = $("#state-search").val();
    var requestOne = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+ APIkey 
    

    fetch(requestOne)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //console.log(data)

        //=== Formating date ===

    var now = moment(dataDate).format('MM/DD/YYYY')
    var dataDate = data.dt;
        console.log(now)
    

        // === Main display ===
    //var oneCallApi = "107f35b69ac4de4e432adda92e340f58"
    var displayEl = $("#display-weather-info")
    var cityEl = $("<h1 id='big-city'>")
    // var dateEl = $("<span id='current-date'>")
    // var displayTemp = $("<p id='display-temp'>")
    // var displayWind = $("<p id='display-wind'>")
    // var displayHumid = $("<p id='display-humid'>")
    // var displayUvi = $("<p id='display-uvi'>")
    // var displayIcon = $("<img id='display-icon'>")
    // var displayIconUrl = "http://openweathermap.org/img/wn/"+currentIcon+".png"
    // var currentIcon = data.weather[0].icon
    // var iconAlt = data.weather[0].description
    var lat = data.coord.lat
    var lon = data.coord.lon
    var oneCallURL = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIkey

    cityEl.text(data.name)
    displayEl.append(cityEl)

    fetch(oneCallURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

    var dateEl = $("<h3<span id='current-date' 'd-inline>>")
    var displayTemp = $("<p id='display-temp'>")
    var displayWind = $("<p id='display-wind'>")
    var displayHumid = $("<p id='display-humid'>")
    var displayUvi = $("<p id='display-uvi'>")
    var displayIcon = $("<img id='display-icon'>")
    var displayIconUrl = "http://openweathermap.org/img/wn/"+currentIcon+".png"
    var currentIcon = data.current.weather[0].icon
    var iconAlt = data.current.weather[0].description
    var uvIndex = data.current.uvi

    dateEl.text(" " +now)
    cityEl.append(dateEl)

    displayIcon.attr('src', displayIconUrl)
    displayIcon.attr('alt', iconAlt)
    cityEl.append(displayIcon)    

    displayTemp.text("Temp: "+data.current.temp + " F")
    displayEl.append(displayTemp)

    displayWind.text("Wind speed: "+data.current.wind_speed + " mph")
    displayEl.append(displayWind)

    displayHumid.text("Humidity: "+data.current.humidity + "%")
    displayEl.append(displayHumid)

    if( 0 < uvIndex < 3){
        displayUvi.attr("class","low")
    } else if (3 < uvIndex < 5){
        displayUvi.attr('class', 'moderate')
    } else if(5 < uvIndex) {
        displayUvi.attr('class', 'high')
    }    

    displayUvi.text("UV Index: "+ uvIndex)
    displayEl.append(displayUvi)

    for( var i = 0; )

        
    })    

    // cityEl.text(data.name)
    // displayEl.append(cityEl)

    // dateEl.text(now)
    // displayEl.append(dateEl)

    // displayIcon.attr('src', displayIconUrl)
    // displayIcon.attr('alt', iconAlt)
    // displayEl.append(displayIcon)    

    // displayTemp.text(data.main.temp + " F")
    // displayEl.append(displayTemp)

    // displayWind.text(data.wind.speed + " mph")
    // displayEl.append(displayWind)

    // displayHumid.text(data.main.humidity + "%")
    // displayEl.append(displayHumid)

    // displayUvi.text(data.current.uvi)
    // displayEl.append(displayUvi)

    






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