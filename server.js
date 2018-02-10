var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Models
var models = require("./models");
 
//Routes
var routes = require('./routes/routes.js')(app);

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

app.set('models', models);

// Listener
app.listen(process.env.PORT || 3000, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});