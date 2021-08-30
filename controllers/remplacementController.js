const remplacementModel = require('../models/remplacement')
module.exports = {
    addRemplacement : async(req,res) => {
        if (checkInputs(req.body,['remplace','remplacant'])) {
            ifExist = await  nomenclature.findAll({raw: true,where:{remplace:req.body.remplace,remplacant:req.body.remplacant}});
            if (ifExist==0) {
                remplacementModel.create({
                    remplace: req.body.remplace,
                    remplacant: req.body.remplacant,
                }).then(remplacement => {
                    res.send(remplacement);
                }).catch(err => {
                    res.send(err);
                })
            }else{
            
                res.send({msg:'this data already exist'});
            }
        }else{
            res.send({msg:'input missing'});
        }
        
    },
    updateRemplacement : async(req,res) =>{
        if (checkInputs(req.body,['remplace','remplacant'])) {
            ifExist = await  nomenclature.findAll({raw: true,where:{remplace:req.body.remplace,remplacant:req.body.remplacant}});
            if (ifExist==0) {
                remplacementModel.update({
                    remplace: req.body.remplace,
                    remplacant: req.body.remplacant,
                },
                {where:{remplace:req.body.remplace,remplacant:req.body.remplacant}}
                ).then(remplacement => {
                    res.send(remplacement);
                }).catch(err => {
                    res.send(err);
                })
            }else{
            
                res.send({msg:'this data already exist'});
            }
        }else{
            res.send({msg:'input missing'});
        }
    },
    deleteRemplacement : async(req,res) => {
        if (checkInputs(req.body,['remplace','remplacant'])) {
            ifExist = await  remplacementModel.findAll({raw: true,where:{remplace:req.params.remplace,remplacant:req.params.remplacant}});
            if (ifExist.length!=0) {
                
                nomenclature.destroy({where:{remplace:req.params.remplace,remplacant:req.params.remplacant}}).then(nomenclature=>{
                    res.send({msg:"element removed successfully "});
                })
            }else{
                res.send({msg:"this data don't exist"});
            }
        }else{
            res.send({msg:'input missing'});
        }
    },
    allRemplacements : async(req,res) => {
        try {
            let remplacements = await  remplacementModel.findAll();
            res.send(remplacements);
        } catch (error) {
            res.send(error)
        }
    },
    

}