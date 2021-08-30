const express = require("express");
const router = express.Router()
const bodyParser = require('body-parser');
const nomenclatureController = require("../controllers/nomenclatureController");



router.post('/addNomenclature', nomenclatureController.addNomenclature );
router.post('/updateNomenclature', nomenclatureController.updateNomenclature);
router.delete('/deleteNomenclature', nomenclatureController.deleteNomenclature);
router.get('/', nomenclatureController.allNomenclature);

module.exports = router;