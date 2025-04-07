const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// Beispiel-API-Endpunkt
router.get('/example', async (req, res) => {
  const { data, error } = await supabase
    .from('your_table_name') // Ersetzen Sie 'your_table_name' durch den tatsächlichen Tabellennamen
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

// Testendpunkt für Supabase-Verbindung
router.get('/test-supabase', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('your_table_name') // Ersetzen Sie 'your_table_name' durch den tatsächlichen Tabellennamen
      .select('*')
      .limit(1);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Fehler bei der Verbindung zu Supabase' });
  }
});

module.exports = router; 