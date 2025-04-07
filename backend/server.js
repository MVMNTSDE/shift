require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Überprüfen der Umgebungsvariablen
console.log('Supabase URL:', process.env.SUPABASE_URL);
console.log('Supabase Anon Key:', process.env.SUPABASE_ANON_KEY);

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
