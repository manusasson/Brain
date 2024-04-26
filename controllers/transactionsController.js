// Importa el modelo de la base de datos si es necesario
// const Transaction = require('../models/transaction');
const { Client } = require('pg');




// client.connect()
//     .then(() => console.log('Conexión exitosa a PostgreSQL'))
//     .catch(err => console.error('Error al conectar a PostgreSQL', err));
// Controladores para CRUD de transacciones
const getAllTransactions = async (req, res) => {
    try {
        const client = new Client({
            user: 'root',
            host: '192.168.45.100',
            database: 'biosecurity-boot',
            password: 'ZKTeco##123',
            port: 5442,
        });
        await client.connect();// Ejecuta la consulta SQL
        const result = await client.query(`
            SELECT id, app_id, bio_tbl_id, company_id, create_time, creater_code,
                   creater_id, creater_name, op_version, update_time, updater_code,
                   updater_id, updater_name, acc_zone, acc_zone_code, area_name,
                   card_no, dept_code, dept_name, description, dev_alias, dev_id,
                   dev_sn, event_addr, event_name, event_no, event_point_id, event_point_name,
                   event_point_type, event_time, last_name, log_id, mask_flag, name,
                   pin, reader_name, reader_state, temperature, trigger_cond, unique_key,
                   verify_mode_name, verify_mode_no, vid_linkage_handle
            FROM public.acc_transaction
            ORDER BY event_time DESC -- Ordena por fecha de evento de manera descendente
            LIMIT 3 ; -- Limita los resultados a las últimas 100 transacciones
        `);

        await client.end(); // Cierra la conexión a la base de datos

        // Devuelve las transacciones como respuesta en formato JSON
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener las transacciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
;

const getTransactionById = (req, res) => {
    // Lógica para obtener una transacción por su ID
    const id = req.params.id;
    res.json({ message: `Obteniendo transacción con ID ${id}` });
};

const createTransaction = (req, res) => {
    // Lógica para crear una nueva transacción
    res.json({ message: 'Creando una nueva transacción...' });
};

const updateTransaction = (req, res) => {
    // Lógica para actualizar una transacción existente
    const id = req.params.id;
    res.json({ message: `Actualizando transacción con ID ${id}` });
};

const deleteTransaction = (req, res) => {
    // Lógica para eliminar una transacción
    const id = req.params.id;
    res.json({ message: `Eliminando transacción con ID ${id}` });
};

module.exports = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction
};