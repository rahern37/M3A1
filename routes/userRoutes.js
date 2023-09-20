const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router
.route('/')
.get(userController.getAllSales)
.post(userController.createNewSales);
router
.route('/:id')
.get(userController.getSalesByID)
.patch(userController.patchSalesById)
.delete(userController.deleteSalesByID);
module.exports = router;