var clientID = process.env.FB_CLIENTID || '527499394260317';
var clientSecret = process.env.FB_CLIENTSEC || 'd98c2100d757eefe87bec468b2f60e19';
var callbackUrl = process.env.FB_CALLBACK || 'http://localhost:8080/auth/facebook/callback';

module.exports = {
	'facebookAuth' : {
		'clientID'      : clientID, // your App ID
		'clientSecret'  : clientSecret, // your App Secret
		'callbackURL'   : callbackUrl
	},

	// 'googleAuth' : {
	// 	'clientID': 'enter client id here',
	// 	'clientSecret': 'enter client secret here',
	// 	'callbackURL': 'enter callback here'
	// }
}