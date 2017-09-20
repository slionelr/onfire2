var User = require('./models/user');
module.exports = function(app, passport){
	// app.use('/', index);
    /* GET home page. */
    app.get('/', function(req, res, next) {
		var isUserLogged;

		if (req.session['user'] != undefined) {
			isUserLogged = true;
		} else {
			isUserLogged = false;
		}

        res.render('index', { title: 'יא קציצה 2', isUserLogged: isUserLogged, user: req.session['user'] });
	});
	
	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile'); // TODO: manage profile page
	});

	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback', 
		function(req, res, next) {
			passport.authenticate('facebook', function(err, user, info) {
				if (err) { return next(err); }
				if (!user) { return res.redirect('/'); }
				req.logIn(user, function(err) {
					if (err) { return next(err); }
					// Add the user object to the session
					req.session['user'] = user;

					// Redirect to page
					return res.redirect('/');
				});
			})(req, res, next);
		}
	);


	// app.get('/logout', function(req, res){
	// 	req.logout();
	// 	res.redirect('/');
	// })
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('/login');
}