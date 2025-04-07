const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Verwenden Sie die Umgebungsvariablen aus der .env-Datei
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;