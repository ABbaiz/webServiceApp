const express = require("express");
const router = express.Router()
const bodyParser = require('body-parser');
const articlesController = require("../controllers/articlesController");


router.get('/articleByRef', articlesController.articleByRef);
router.post('/addArticle', articlesController.addArticle);
router.post('/updateArticle', articlesController.updateArticle);
router.delete('/deleteArticle', articlesController.deleteArticle);
router.get('/', articlesController.allArticles);

module.exports = router;