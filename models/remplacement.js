const sequelize  = require('../config/sequelize');
const Sequelize = require('sequelize');
module.exports = sequelize.define('remplacement', {
    remplace: {
        type: Sequelize.STRING,
        required:true,
        primaryKey: true,
    },
    remplacant: {
        type: Sequelize.STRING,
        required:true,
        primaryKey: true,
    },
    date_de_remplacement: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    }

       
});
