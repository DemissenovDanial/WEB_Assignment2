const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'asdasd.html'));
});

app.use(express.static(__dirname));

app.get('/weather', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(weatherData => {
      res.json(weatherData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Ошибка');
    });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
