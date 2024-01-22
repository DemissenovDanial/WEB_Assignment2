let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let feels_like = document.querySelector('.feels_like');
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let wind = document.querySelector('.wind');
let cod = document.querySelector('.cod');
let coord = document.querySelector('.coord');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong City name'));
    fetch(`https://api.nasa.gov/planetary/apod?api_key=O6oX0tGwcVPJCTtm74JCODQDPaxwupACXkee54sg`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Дата:", data.date);
    console.log("Заголовок:", data.title);
    console.log("Изображение URL:", data.url);
    console.log("Описание:", data.explanation);
  })
  .catch(error => console.error("Ошибка при получении данных:", error));
})

let lon, lat;

const displayData=(weather)=>{
    lon = weather.coord.lon;
    lat = weather.coord.lat;
    temp.innerText=`${"temp: " + weather.main.temp}°C`
    desc.innerText=`${"description: " + weather.weather[0].main}`
    feels_like.innerText=`${"feels_like: " + weather.main.feels_like}°C`
    humidity.innerText=`${"humidity: " +weather.main.humidity}`
    pressure.innerText=`${"pressure: " + weather.main.pressure}`
    wind.innerText=`${"wind: " + weather.wind.speed + "m/s"}`
    cod.innerText=`${"cod: " + weather.cod}`
    coord.innerText=`${"lon: " + weather.coord.lon + " lat: " + weather.coord.lat}`
    mapUpdate(lon, lat);
}

function mapinit() {
    var coord = { lat: 51.509865, lng: -0.118092 };
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12, 
      center: coord 
    });
  
    var mark = new google.maps.Marker({
      position: coord,
      map: map,
      title: 'my mark'
    });
  }

function mapUpdate(lon, lat) {
    var coord = { lat: lat, lng: lon };
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12, 
      center: coord 
    });
  
    var mark = new google.maps.Marker({
      position: coord,
      map: map,
      title: 'my mark'
    });
}

