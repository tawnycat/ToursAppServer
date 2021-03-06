"use strict";
 
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {};
 
 
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

// Associations
db.user.hasMany(db.tour, {as: 'CreatedTours'});
db.tour.belongsTo(db.user);
db.tour.belongsToMany(db.point, {through: 'TourPoint'});
db.point.belongsToMany(db.tour, {through: 'TourPoint'});
db.user.belongsToMany(db.tour, {through: 'DownloadedTours'});
db.tour.belongsToMany(db.user, {through: 'DownloadedTours'});
 
db.sequelize = sequelize;
db.Sequelize = Sequelize; 
 
module.exports = db;