var controller = require('../controllers/controller.js');

module.exports = function(app, passport) {

    app.get('/api/user/:id?', function (req, res) {
    	if (req.params.id) {
    		controller.getUser()
    	} else {
    		controller.getUserList()
    	}
    });

    app.get('api/tour/:id?', function (req, res) {
    	if (req.params.id) {
    		controller.getTour()
    	} else {
    		controller.getTourList()
    	}
    });

    app.post('/api/user', controller.postUser);

    app.post('/apitour', controller.postTour);
};

//asdfasdf.com/tour?id=15
// .com/user
// .com/point