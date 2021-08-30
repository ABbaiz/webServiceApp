const checkInputs = require("../helpers/checkInputs");
const nomenclature = require("../models/nomenclature")
module.exports = {
    addNomenclature : async(req,res) => {

      if (checkInputs(req.body,['compose','composant','quantite_de_composition'])) {
        ifExist = await  nomenclature.findAll({raw: true,where:{compose:req.body.compose,composant:req.body.composant}});
        if (ifExist.length==0) {
            nomenclature.create({
                compose: req.body.compose,
                composant: req.body.composant,
                quantite_de_composition: req.body.quantite_de_composition
              }).then(nomenclature =>{
                    res.send(nomenclature);
              }).catch(err=>{
                    res.send(err);
              })
          }else{
            
            res.send({msg:'this data already exist'});
          }
        }else{
            res.send({msg:'input missing'});
        }
        
      
    },
    updateNomenclature : async(req,res) =>{
        if (checkInputs(req.body,['compose','composant'])) {
            ifExist = await  nomenclature.findAll({raw: true,where:{compose:req.body.compose,composant:req.body.composant}});
            if (ifExist.length!=0) {
                nomenclature.update({
                    compose: req.body.compose,
                    composant: req.body.composant,
                    quantite_de_composition: req.body.quantite_de_composition
                },{where:{compose:req.body.compose,composant:req.body.composant}}).then(nomenclature=>{
                    res.send(nomenclature);
                })
            }else{
                res.send({msg:"this data don't exist"});
            }
        }else{
            res.send({msg:'input missing'});
        }
        
    },
    deleteNomenclature : async(req,res) => {
        if (checkInputs(req.body,['compose','composant'])) {
            ifExist = await  nomenclature.findAll({raw: true,where:{compose:req.params.compose,composant:req.params.composant}});
            if (ifExist.length!=0) {
                
                nomenclature.destroy({where:{compose:req.params.compose,composant:req.params.composant}}).then(nomenclature=>{
                    res.send({msg:"element removed successfully "});
                })
            }else{
                res.send({msg:"this data don't exist"});
            }
        }else{
            res.send({msg:'input missing'});
        }
    },
    allNomenclature : async(req,res) => {
        try {
            let nomenclatures = await  nomenclature.findAll();
            res.send(nomenclatures);
        } catch (error) {
            res.send(error)
        }
        
    },
    

}