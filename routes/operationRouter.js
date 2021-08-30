const express = require("express");
const router = express.Router()
const bodyParser = require('body-parser');
const operationController = require("../controllers/operationController");



router.post('/addOperation', operationController.addOperation);
router.post('/updateOperation', operationController.updateOperation);
router.delete('/deleteOperation', operationController.deleteOperation);
router.get('/', operationController.allOperations);

module.exports = router;