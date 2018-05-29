let express     = require('express');
let path        = require('path');
let fs          = require('fs');
let favicon     = require('serve-favicon');
let logger      = require('morgan');
let bodyParser  = require('body-parser');
let mongoose    = require('mongoose');
let chalk       = require('chalk');

let schemasPath = __dirname + '/app/schemas/';
let routesPath  = __dirname + '/app/routes/';

let app = express();

mongoose.Promise = require('bluebird');
mongoose
    .connect('mongodb://localhost:27017/ang5-db', { promiseLibrary: require('bluebird') })
    .then(() =>  console.log(chalk.green('✓'), 'connection to ang5-db succesful'))
    .catch((err) => {
        console.error(err);
        console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  });

fs.readdirSync(schemasPath).forEach(function (file) {
    require(schemasPath + '/' + file);
});

// fs.readdirSync(routesPath).forEach(function (file) {
//     require(routesPath + '/' + file)(app);
// });
require('./app/routes/news.route')(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.set('port', process.env.PORT || 3000);
// app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/dist');



app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;