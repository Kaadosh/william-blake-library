const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://localhost/william_black_library', {

  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Успешное подключение к базе данных')
  })
  .catch((error) => {
    console.error('Ошибка при подключении к базе данных:', error);
  })

app.get('/', (req, res) => {
  res.send('Привет, это сервер для библиотеки картин Уильяма Блейка.');
});

const Painting = mongoose.model('Painting', {
  title: String,
  description: String,
  imageUrl: String
});

app.get('/api/paintings', async (req, res) => {
  try {
    const paintings = await Painting.find();
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении списка картин' })
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
});
