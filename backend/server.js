require('dotenv').config();
const mongoose = require('mongoose');

// Verbindung zur MongoDB-Datenbank herstellen
mongoose.connect('mongodb://localhost:27017/mvmnts', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.error('Datenbankverbindung fehlgeschlagen', err));

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Beispiel-Route
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

// API-Routen
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
