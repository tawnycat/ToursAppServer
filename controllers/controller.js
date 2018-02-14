var db = require("../models");
var path = require("path");
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

    db.user.upsert({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then(function(result) {
        res.end();
    });
};

controller.addTourtoUser = function (req, res) {

    db.user.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        results.addTour(req.body.tourID);
        results.save();
        res.end();
    })
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

controller.getTourCity = function(req, res) {

    db.tour.findAll({
        where: {
            city: req.params.city
        },
        include: {
            model: db.point,
            through: 'TourPoint'
        }
    }).then(function(result) {
        return res.json(result)
    })
};

controller.getTourCityCategory = function(req, res) {

    db.tour.findAll({
        where: {
            city: req.params.city,
            category: req.params.category
        },
        include: {
            model: db.point,
            through: 'TourPoint'
        }
    })

};

controller.postTour = function(req, res) {
    console.log(req.body)
    db.tour.create({
        title: req.body.title,
        zipcode: req.body.zipcode,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        photo: req.body.photo,
        points: req.body.points
    }).then(function(results) {
        results.setPoints(req.body.points.map(p => p.id));
        results.save();
        res.send(results);
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

    db.point.create({
        title: req.body.title,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description
    }).then(function(results) {
        res.send(results);
    });
};

controller.formPage = function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'form.html'));
};