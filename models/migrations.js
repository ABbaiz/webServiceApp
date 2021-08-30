const nomenclature = require('./nomenclature');
const article = require('./article');
const operation = require('./operation');
const post_charge = require('./post_charge');
const remplacement = require('./remplacement');
const stock = require('./stock');
module.exports = {
    initDb : async ()=>{
        await nomenclature.sync();
        await article.sync();
        await operation.sync();
        await post_charge.sync();
        await remplacement.sync();
        await stock.sync();
    }
}
// git pull <remote> <branch>

// git branch --set-upstream-to=origin/<branch> master