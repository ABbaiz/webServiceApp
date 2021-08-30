const express    = require('express');
// const session    = require('express-session');
// const expHbs     = require('express-handlebars');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
// const path       = require('path');
const sequelize  = require('./config/sequelize');
const migrations = require('./models/migrations');

// const middleware = require('./middlewares/middleware');
const app = express();



// app.engine('hbs', hbs.engine);
app.use(cookieParser())
app.use(bodyParser({limit: '50mb'}));

app.set('view engine', 'hbs');
app.use(express.static(__dirname));

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

migrations.initDb();

app.use('/article',require('./routes/articleRouter'));
app.use('/nomenclature',require('./routes/nomenclatureRouter'));
app.use('/operation',require('./routes/operationRouter'));
app.use('/postCharger',require('./routes/postChargerRouter'));
app.use('/remplacement',require('./routes/remplacementRouter'));
// app.use('/stock',require('./routes/stockRouter'));

app.get('*', function(req, res){
  res.send({error:" page not found"})
});
app.listen(4000 , console.log(`server run on port 4000 `));
