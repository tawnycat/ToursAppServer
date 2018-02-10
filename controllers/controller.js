var db = require("../models");
var controller = module.exports = {}

controller.getUser = function(req, res) {

    db.user.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: db.tour,
            as: 'Tours'
        }
    }).then(function(result) {
        return res.json(result);
    });

};

controller.getUserList = function(req, res) {

    console.log('db: ' + db);
    console.log(db.user);

    db.user.findAll({
    	include: {
    		model: db.tour,
            as: 'Tours'
    	}
    }).then(function(results) {
        res.json(results);
    });

};

controller.postUser = function(req, res) {

    db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then(function(results) {
        res.end();
    });

};

controller.getTour = function(req, res) {

    db.tour.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: db.point,
            through: 'TourPoint'
        }
    }).then(function(result) {
        return res.json(result);
    });

};

controller.getTourList = function(req, res) {

    db.tour.findAll({
        include: {
            model: db.point,
            through: 'TourPoint'
        }
      }).then(function(results) {
        res.json(results);
    });

};

controller.postTour = function(req, res) {

    db.tour.create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        price: req.body.price
    }).then(function(results) {
        res.end();
    });

};