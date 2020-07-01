const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require ('express-handlebars');
const methodOverride = require('method-override');

//initializations
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride('_method'))


//configurations
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts')
}))
//app.engine('handlebars', hbs({
//    defaultLayout: 'main',
//    layoutsDir: path.join(app.get('views'), 'layouts'),
//    partialsDir: path.join(app.get('views'), 'partials'),
//    extname: '.hbs'
//}));
app.set('view engine', 'handlebars');

//routes
app.use(require('./routes/table.routes'));
app.use(require('./routes/match.routes'));
app.use(require('./routes/add-team.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;