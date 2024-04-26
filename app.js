const express = require('express');
const { Client } = require('pg');
const transactionsRoutes = require('./routes/transactionsRoutes');

const app = express();
const PORT = 8080;

// Configura la conexión a tu base de datos
const client = new Client({
    user: 'root',
    host: '192.168.45.100',
    database: 'biosecurity-boot',
    password: 'ZKTeco##123',
    port: 5442,
});

// Conexión a la base de datos
client.connect();


app.use('/api/transactions', transactionsRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});