console.log('work')

// var term = $("#city-search").val();
// var search = $("#searched")

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
    
    var displayEl = $("#display-weather-info")
    var cityEl = $("<h1 id='big-city'>")  
    var displayIcon = $("<img id='display-icon' src='' alt=''>")
    var iconAlt = data.weather[0].description
    var displayIconUrl = "http://openweathermap.org/img/wn/" +currentIcon + ".png"
    var currentIcon = data.weather[0].icon 
    var lat = data.coord.lat
    var lon = data.coord.lon
    var oneCallURL = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIkey
    cityEl.text(data.name)
    displayEl.append(cityEl)
    displayIcon.attr('src', displayIconUrl)
     displayIcon.attr('alt', iconAlt)
     cityEl.append(displayIcon)
     console.log(data.weather[0].icon)

    fetch(oneCallURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //console.log(data)

    var dateEl = $("<h3<span id='current-date' 'd-inline>>")
    var displayTemp = $("<p id='display-temp'>")
    var displayWind = $("<p id='display-wind'>")
    var displayHumid = $("<p id='display-humid'>")
    var displayUvi = $("<span id='display-uvi'>")
    // var displayIcon = $("<img id='display-icon' src='' alt=''>")
    // var displayIconUrl = "http://openweathermap.org/img/wn/"+currentIcon+".png"
    // var currentIcon = data.weather[0].icon
    // var iconAlt = data.current.weather[0].description
    var uvIndex = data.current.uvi

    displayEl.addClass('custom-display')
    dateEl.text(" " +now)
    cityEl.append(dateEl)

    // displayIcon.attr('src', displayIconUrl)
    // //displayIcon.attr('alt', iconAlt)
    // cityEl.append(displayIcon)    

    displayTemp.text("Temp: "+data.current.temp + " F")
    displayEl.append(displayTemp)

    displayWind.text("Wind speed: "+data.current.wind_speed + " mph")
    displayEl.append(displayWind)

    displayHumid.text("Humidity: "+data.current.humidity + "%")
    displayEl.append(displayHumid)

    if(uvIndex <= 3){
        displayUvi.addClass('low')
        displayUvi.removeClass('moderate')
        displayUvi.removeClass('high')
    } else if (uvIndex <= 5){
        displayUvi.removeClass('low')
        displayUvi.addClass('moderate')
        displayUvi.removeClass('high')
    } else {
        displayUvi.removeClass('low')
        displayUvi.removeClass('moderate')
        displayUvi.addClass('high')
    } 

    displayUvi.text("UV Index: "+ uvIndex)
    displayEl.append(displayUvi)

    for(var i=1; i < data.daily.length; i++) {
        if(i===6){ break }

    // === Display 5 Day Forcast === 
    var cardIcon = $("<img id='weather-icon' src='' alt='Weather Icon'>")    
    var display5 = $("#display-5day")
    var cardEl = $("<div class='card m-2 custom-card' style='width:13rem;'>")
    var cardDate = $("<h5 id='card-title' class='card-title'>")    
    var cardTemp = $("<p id='card-temp' class='card-text'>")
    var cardWind = $("<p id='card-wind' class='card-text'>")
    var cardHumid =$("<p id='card-humid' class='card-text'>")
    var cardBody = $("<div id='card-body' class='card-body'>")
    var dataIcon = data.daily[i].weather[0].icon
    var iconUrl = "http://openweathermap.org/img/wn/"+dataIcon+".png"

    //console.log(data)   

    
    var futureDate = new Date(data.daily[i].dt*1000).toLocaleDateString("en-US")
    //1649091600
    //futureDate[@@toPrimitive]('string')
    //var then = Date.now(futureDate)
    console.log(futureDate)
    

    cardIcon.attr('src', iconUrl)
    cardBody.append(cardIcon)

    cardDate.text(futureDate)
    cardBody.append(cardDate)

    cardBody.append(cardIcon)

    cardTemp.text("Temp: "+data.daily[i].temp.max)
    cardBody.append(cardTemp)

    cardHumid.text("Humidity: "+data.daily[i].humidity)
    cardBody.append(cardHumid)

    cardWind.text("Wind: "+data.daily[i].wind_speed)
    cardBody.append(cardWind)    

    cardEl.append(cardBody)
    display5.append(cardEl) 
} //end for-loop

}) // end oneCallURL       

}) // end requestOne

} // end getWeather()


$("#search-button").on("click", function(){
    
    getWeather();
    var serachedCtiy = $("#city-search").val();
    localStorage.setItem('Search', serachedCtiy)

    searchHistory();

})

function searchHistory(){
    var grabCity = localStorage.getItem('Search');
    var showCity = $("<button id='history-btn type='button' class='custom-history-btn btn btn-block btn-light'>").text(grabCity)
    $("#searched").append(showCity)
}

$("#history-btn").on('click', function(event){
    getWeather(event)
})