const operation = require("../models/operation")

module.exports = {
    addOperation : async(req,res) => {
        
        
     isEmpty = checkInputs(req.body,['numero_operation','article','postCharge']);
     if (isEmpty) {
        operation.create({
            temps_preparation: req.body.temps_preparation,
            temps_execution: req.body.temps_execution,
            temps_transfert: req.body.temps_transfert,
            libelle_operation: req.body.libelle_operation,
            article: req.body.article,
            postCharge: req.body.post_charge
         }).then(operation => {
             res.send(operation);
         }).catch(err=>{
            res.send(err);
         })
     }else{
        res.send({msg:"input missing"});
     }
     
        

        
    },
    updateOperation : async(req,res) =>{
        isEmpty = checkInputs(req.body,['numero_operation']);
        if (isEmpty) {

            articleModel.update(
              {
                temps_preparation: req.body.temps_preparation,
                temps_execution: req.body.temps_execution,
                temps_transfert: req.body.temps_transfert,
                libelle_operation: req.body.libelle_operation,
                article: req.body.article,
                postCharge: req.body.post_charge
              },
              { 
                where:{ numero_operation : req.body.numero_operation } 
              })
            .then(operation => {
                res.send(operation)
            }).catch( (err) => {
                res.send({error:err})
            });
  
          }else{
            res.send({msg:"input missing"})
          }
    },
    deleteOperation : async(req,res) => {
        isEmpty = checkInputs(req.body,['numero_operation']);
        if (isEmpty) {
            req.params.reference
            operation.destroy({
              where: {reference: req.params.numero_operation}
            }).then(result =>{
                res.send({msg:"element removed successfully "});
            }).catch( (err) => {
              res.send({error:err})
            });
          }else{
            res.send({msg:"input missing"})
          }
    },
    allOperations : async(req,res) => {
        try {
            const operations = await operation.findAll();
            res.send(operations)
          } catch (error) {
            res.send(error)
          }
    },
    
}