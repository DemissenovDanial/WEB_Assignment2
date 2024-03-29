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
let date = document.querySelector('.date');
let title = document.querySelector('.title');
let url = document.querySelector('.url');
// let exp = document.querySelector('.exp');
let news = document.querySelector('.news');

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
      date.innerText=`${"Дата: " + data.date}`
      title.innerText=`${"Заголовок: " + data.title}`
      url.innerHTML=`<img src="${data.url}" alt="NASA Image" style="width: 20%; height: 20%">`
      // exp.innerText=`${"Описание:"+ data.explanation}`
    })
    .catch(error => console.error("Ошибка при получении данных:", error));
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9a0a6d42d6524e02a488a22466b31ac8')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      return response.json();
    })
    .then(info => {
      if (info.articles) {
        for (let i = 0; i < 3; i++) {
          news.innerText += `News: ${info.articles[i].title},\n`;
        }
      } else {
        console.error('Отсутствует поле "articles" в ответе API');
      }
    })
    .catch(error => {
      console.error(`Произошла ошибка: ${error.message}`);
    });
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

