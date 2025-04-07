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

module.exports = router; 