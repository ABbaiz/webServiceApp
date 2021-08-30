const articleModel = require('../models/article')
const stringGenerate = require('../helpers/stringGenerate');
const checkInputs = require('../helpers/checkInputs');
const stock = require('../models/stock');
module.exports = {
    addArticle : async(req,res) => {

      newStock = stock.create({nmbr_magasin: stockItems.nmbr_magasin,
        quantity: stockItems.quantity,
        periode: stockItems.periode,
        stock_type: stockItems.stock_type});


      articleModel.create({
          reference: stringGenerate(8),
          designation: req.body.designation,
          type_fabrication_achat: req.body.type_fabrication_achat,
          unite_achat_stock: req.body.unite_achat_stock,
          delai_en_semaine: req.body.delai_en_semaine,
          prix_standard: req.body.prix_standard,
          lot_de_reapprovisionnement: req.body.lot_de_reapprovisionnement,
          stock_mini: req.body.stock_mini,
          stock_maxi: req.body.stock_maxi,
          pourcentage_de_perte: req.body.pourcentage_de_perte,
          inventaire: req.body.inventaire,
          PF_ou_MP_ou_Piece_ou_SE: req.body.PF_ou_MP_ou_Piece_ou_SE,
          stock : newStock.nmbr_magasin,
      }).then(article => {
          res.send(article);
      }).catch( (err) => {
          res.send({error:err})
      });


    },
    updateArticle : async(req,res) =>{
        isEmpty = checkInputs(req.body,['reference']);
        if (isEmpty) {

          articleModel.update(
            {
              designation: req.body.designation,
              type_fabrication_achat: req.body.type_fabrication_achat,
              unite_achat_stock: req.body.unite_achat_stock,
              delai_en_semaine: req.body.delai_en_semaine,
              prix_standard: req.body.prix_standard,
              lot_de_reapprovisionnement: req.body.lot_de_reapprovisionnement,
              stock_mini: req.body.stock_mini,
              stock_maxi: req.body.stock_maxi,
              pourcentage_de_perte: req.body.pourcentage_de_perte,
              inventaire: req.body.inventaire,
              PF_ou_MP_ou_Piece_ou_SE: req.body.PF_ou_MP_ou_Piece_ou_SE,
            },
            { 
              where:{ reference : req.body.reference } 
            })
          .then(article => {}).catch( (err) => {
              res.send({error:err})
          });

        }else{
          res.send({msg:"input missing"})
        }
    },
    deleteArticle : async(req,res) => {
      isEmpty = checkInputs(req.params,['reference']);
      if (isEmpty) {
        req.params.reference
        articleModel.destroy({
          where: {reference: req.params.reference}
        }).then(result =>{
          res.send({msg:"element removed successfully "});
        }).catch( (err) => {
          res.send({error:err})
        });
      }else{
        res.send({msg:"input missing"})
      }
        
    },
    allArticles : async(req,res) => {
      try {
        const articles = await articleModel.findAll();
        res.send(articles)
      } catch (error) {
        res.send(error)
      }
    },
    articleByRef : async(req,res) => {
      
      isEmpty = checkInputs(req.params,['reference']);
      if (isEmpty) {
        try {
          const article = await articleModel.findByPk(req.params.reference,{raw: true});
          res.send(article)
        } catch (error) {
          res.send(error)
        }
      }
      
    }

}