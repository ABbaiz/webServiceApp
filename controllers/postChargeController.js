const postChargeModel = require('../models/post_charge')
module.exports = {
    addPostCharge : async(req,res) => {
        isEmpty = checkInputs(req.body,['compose','composant','quantite_de_composition']);
        if (isEmpty)
        {
            postChargeModel.create({

                numero_sous_section: req.body.numero_sous_section,
                machine: req.body.machine,
                designation: req.body.designation,
                taux_horaire_ou_forfait: req.body.taux_horaire_ou_forfait,
                nombre_de_postes: req.body.nombre_de_postes,
                capacite_nominale: req.body.capacite_nominale,
                type_taux_horaire_ou_forfait:req.body.type_taux_horaire_ou_forfait
    
            }).then(postCharge =>{
                res.send(postCharge);
            }).catch(err =>{
                res.send(err)
            })

        }else{
            res.send({msg:'input missing'});
        }
        
        



        
    },
    updatePostCharge : async(req,res) =>{
        

        if (checkInputs(req.body,['postCharge'])) {
            ifExist = await  postChargeModel.findAll({raw: true,where:{numero_section:req.body.numero_section}});
            if (ifExist.length!=0) {
                postChargeModel.update({
                    numero_sous_section: req.body.numero_sous_section,
                    machine: req.body.machine,
                    designation: req.body.designation,
                    taux_horaire_ou_forfait: req.body.taux_horaire_ou_forfait,
                    nombre_de_postes: req.body.nombre_de_postes,
                    capacite_nominale: req.body.capacite_nominale,
                    type_taux_horaire_ou_forfait:req.body.type_taux_horaire_ou_forfait
                },{where:{numero_section:req.body.numero_section}}).then(postCharge=>{
                    res.send(postCharge);
                })
            }else{
                res.send({msg:"this data don't exist"});
            }
        }else{
            res.send({msg:'input missing'});
        }

    },
    deletePostCharge : async(req,res) => {
        if (checkInputs(req.body,['compose','composant'])) {
            ifExist = await  postChargeModel.findAll({raw: true,where:{numero_section:req.params.numero_section}});
            if (ifExist.length!=0) {
                
                postChargeModel.destroy({where:{numero_section:req.params.numero_section}}).then(postCharge=>{
                    res.send({msg:"element removed successfully "});
                })
            }else{
                res.send({msg:"this data don't exist"});
            }
        }else{
            res.send({msg:'input missing'});
        }
    },
    allPostCharge : async(req,res) => {
        try {
            let postCharges = await  postChargeModel.findAll();
            res.send(postCharges);
        } catch (error) {
            res.send(error)
        }
    },
    

}