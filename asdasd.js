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

})

const displayData=(weather)=>{
    temp.innerText=`${"temp: " + weather.main.temp}°C`
    desc.innerText=`${"description: " + weather.weather[0].main}`
    feels_like.innerText=`${"feels_like: " + weather.main.feels_like}°C`
    humidity.innerText=`${"humidity: " +weather.main.humidity}`
    pressure.innerText=`${"pressure: " + weather.main.pressure}`
    wind.innerText=`${"wind: " + weather.wind.speed + "m/s"}`
    cod.innerText=`${"cod: " + weather.cod}`
    coord.innerText=`${"lon: " + weather.coord.lon + " lat: " + weather.coord.lat}`
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
  