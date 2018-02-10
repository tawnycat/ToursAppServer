var controller = require('../controllers/controller.js');

module.exports = function(app) {

    app.get('/api/user/:id?', function (req, res) {
        var models = app.get('models');
        var User = models.User;
        console.log('models.user: ' + models.user);


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

    app.post('/api/user', controller.postUser);

    app.post('/apitour', controller.postTour);
};