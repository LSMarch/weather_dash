# weather_dash

## psuedo code

1) create html/css
    * header
    * search bar
        * search history displayed underneath
    * display weather 
        * city, date, icon based on weather (clouds for cloudy)
        * temp
        * wind
        * humid
        * uv index (green for good)
    * display 5 day forcast underneath
        *date, icon, temp, wind, humidity

2) create script
    * search bar
        * capture input 
            * save in local storage (setItem)
            * make persistant in search history (getItem)
                * create element for searched items (li)
                * append to search history (ul)
    * weather api
        * grap city via user search
        * display currentDay in main display
        * display future days in forcast
            *