const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

// Rutas para CRUD de transacciones
router.get('/', transactionsController.getAllTransactions);
router.get('/:id', transactionsController.getTransactionById);
router.post('/', transactionsController.createTransaction);
router.put('/:id', transactionsController.updateTransaction);
router.delete('/:id', transactionsController.deleteTransaction);

module.exports = router;
