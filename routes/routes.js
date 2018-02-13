var controller = require('../controllers/controller.js');

module.exports = function(app) {

    app.get('/api/user/:id?', function (req, res) {
    	if (req.params.id) {
    		controller.getUser(req, res)
    	} else {
    		controller.getUserList(req, res)
    	}
    });

    app.get('/api/tour/id/:id?', controller.getTour);

    app.get('/api/tour/city/:city?', controller.getTourCity);

    app.get('/api/tour', controller.getTourList);

    app.get('/api/point/:id?', function (req, res) {
        if (req.params.id) {
            controller.getPoint(req, res)
        } else {
            controller.getPointList(req, res)
        }
    });

    app.get('/', controller.formPage);

    app.post('/api/user', controller.postUser);

    app.post('/api/tour', controller.postTour);

    app.post('/api/point', controller.postPoint);

};