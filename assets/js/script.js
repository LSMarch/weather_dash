console.log('work')

// var APIkey = "da68667857a166aac8fd5c7e112a3193"
// var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+ APIkey


function getWeather() {
    var APIkey = "da68667857a166aac8fd5c7e112a3193"
    var city = $("#city-search").val();
    var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+ APIkey

    var city = $("#city-search").val();

    fetch(weather)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })   
}

$("#search-button").on("click", getWeather)