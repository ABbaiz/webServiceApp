const express = require("express");
const router = express.Router()
const bodyParser = require('body-parser');
const postChargeController = require("../controllers/postChargeController");




router.post('/addPostCharge', postChargeController.addPostCharge );
router.post('/updatePostCharge', postChargeController.updatePostCharge);
router.delete('/deletePostCharge', postChargeController.deletePostCharge);
router.get('/', postChargeController.allPostCharge);

module.exports = router;