var Emails = require('../models/emails.js');

exports.get = function(req, res, next){
	Emails.find({ sender: /^tori/}).select({ sender: 1,
	subject: 1 }).exec(function(err,data){
		if(err){res.send('Error');}
		else {
            res.json(data);
		}
	});
	return next();
}

// http://mongoosejs.com/docs/queries.html
