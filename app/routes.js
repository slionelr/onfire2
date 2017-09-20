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

        res.render('index', { title: 'יא קציצה', isUserLogged: isUserLogged });
	});
	
	// app.get('/login', function(req, res){
	// 	res.render('login.ejs', { message: req.flash('loginMessage') });
	// });
	// app.post('/login', passport.authenticate('local-login', {
	// 	successRedirect: '/profile',
	// 	failureRedirect: '/login',
	// 	failureFlash: true
	// }));

	// app.get('/signup', function(req, res){
	// 	res.render('signup.ejs', { message: req.flash('signupMessage') });
	// });


	// app.post('/signup', passport.authenticate('local-signup', {
	// 	successRedirect: '/',
	// 	failureRedirect: '/signup',
	// 	failureFlash: true
	// }));

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.ejs', { user: req.user });
	});

	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback', 
		passport.authenticate('facebook', {
			successRedirect: '/',
			failureRedirect: '/'
		})
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