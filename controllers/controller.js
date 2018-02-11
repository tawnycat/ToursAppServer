var db = require("../models");
var controller = module.exports = {}

controller.getUser = function(req, res) {

    db.user.findOne({
        where: {
            id: req.params.id
        },
        include: [{
                model: db.tour,
                as: 'CreatedTours'
            },
            {
                model: db.tour,
                through: 'DownloadedTours'
            }
        ]
    }).then(function(result) {
        return res.json(result);
    });
};

controller.getUserList = function(req, res) {

    db.user.findAll({
        include: [{
                model: db.tour,
                as: 'CreatedTours'
            },
            {
                model: db.tour,
                through: 'DownloadedTours'
            }
        ]
    }).then(function(result) {
        res.json(result);
    });
};

controller.postUser = function(req, res) {

    db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then(function(result) {
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
    }).then(function(result) {
        res.json(result);
    });
};

controller.getTourZipcode = function(req, res) {

    db.tour.findAll({
        where: {
            zipcode: req.params.zipcode
        },
        include: {
            model: db.point,
            through: 'TourPoint'
        }
    }).then(function(result) {
        return res.json(result)
    })
};

controller.postTour = function(req, res) {

    db.tour.create({
        title: req.body.title,
        zipcode: req.body.zipcode,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        photo: req.body.photo
    }).then(function(results) {
        res.end();
    });
};

controller.getPoint = function(req, res) {

    db.point.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        return res.json(result);
    });

};

controller.getPointList = function(req, res) {

    db.point.findAll({}).then(function(result) {
        return res.json(result);
    });
};

controller.postPoint = function(req, res) {

    db.tour.create({
        title: req.body.title,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description
    }).then(function(results) {
        res.end();
    });
};