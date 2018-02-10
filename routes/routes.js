var controller = require('../controllers/controller.js');

module.exports = function(app) {

    app.get('/api/user/:id?', function (req, res) {
    	if (req.params.id) {
    		controller.getUser(req, res)
    	} else {
    		controller.getUserList(req, res)
    	}
    });

    app.get('/api/tour/:id?', function (req, res) {
    	if (req.params.id) {
    		controller.getTour(req, res)
    	} else {
    		controller.getTourList(req, res)
    	}
    });

    app.get('/api/point/:id?', function (req, res) {
        if (req.params.id) {
            controller.getPoint(req, res)
        } else {
            controller.getPointList(req, res)
        }
    });

    app.post('/api/user', controller.postUser);

    app.post('/api/tour', controller.postTour);

    app.post('/api/point', controller.postPoint);

};