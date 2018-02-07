var controller = module.exports = {}

controller.getUser = function(req, res) {

    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        return res.json(result);
    });

};

controller.getUserList = function(req, res) {

    User.findAll({}).then(function(results) {
        res.json(results);
    });

};

controller.postUser = function(req, res) {

    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }).then(function(results) {
        res.end();
    });

};

controller.getTour = function(req, res) {

    Tour.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        return res.json(result);
    });

};

controller.getTourList = function(req, res) {

    Tour.findAll({}).then(function(results) {
        res.json(results);
    });

};

controller.postTour = function(req, res) {

    Tour.create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        price: req.body.price
    }).then(function(results) {
        res.end();
    });

};