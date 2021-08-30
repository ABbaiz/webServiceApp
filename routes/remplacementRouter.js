const express = require("express");
const router = express.Router()
const bodyParser = require('body-parser');
const remplacementController = require("../controllers/remplacementController");



router.post('/addRemplacement', remplacementController.addRemplacement );
router.post('/updateRemplacement', remplacementController.updateRemplacement);
router.delete('/deleteRemplacement', remplacementController.deleteRemplacement);
router.get('/', remplacementController.allRemplacements);

module.exports = router;