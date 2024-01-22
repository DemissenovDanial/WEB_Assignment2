###Overview:
This project is a web application that provides weather information for a specified location, along with data from NASA's Astronomy Picture of the Day (APOD) API and top headlines from the News API. The weather data is displayed on the page, and additional information such as APOD image, date, and news headlines are also presented.

###Files:

**1. asdasd.js**
This JavaScript file handles the logic for fetching and displaying weather, NASA APOD, and news data. It utilizes the OpenWeatherMap API, NASA APOD API, and News API to gather information. The main features include:

Weather data display for a specified city.
APOD information display, including date, title, and an image.
Top news headlines display.

**2. server.js**
This Node.js file sets up a simple Express server to serve the HTML file and handle API requests. It includes an endpoint /weather for fetching weather data based on the city parameter.

**3. asdasd.html**
The HTML file defines the structure of the web page. It includes input fields for city entry, buttons for initiating API requests, and sections for displaying weather, APOD, and news information. It also embeds the asdasd.js script and includes a Google Maps API script for displaying a map.

###Usage:
install dependencies

Open project with command:
```bash
node server.js
```

Enter the desired location in the input field and click the search button.

The page will display weather information, an APOD image, and top news headlines for the specified location.

###Dependencies:
*Google Maps API,*
*OpenWeatherMap API,*
*NASA APOD API,*
*News API*

##Student: Demissenov Danial
##Group: SE-2206
