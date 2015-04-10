//modules and configs
//===============================================
var express = require('express'),
    router  = express.Router(),
    app     = express(),
    mongoose = require('mongoose');

var port = process.env.PORT || 3000; //port set to 3000

//var uristring = process.env.MONGODB_URI || '';
//console.log('DB', uristring);

mongoose.connect(process.env.MONGO, function (err, res) {
  if (err) {
    console.log('Error connecting to db', err);
  } else {
    console.log('Succeeded in connecting to db');
  }
});

var campSchema = new mongoose.Schema({
  title: { type: String },
  location: { type: String },
  date: { type: String },
  organizer: { type: String },
  contact: { type: String },
  id: { type: Number },
  done: { type: Boolean }
});
var Camp = mongoose.model('camps', campSchema);


//app specific configurations
//==================================================

app.use('/', express.static(__dirname + '/app/'));

//router configurations
//============================================

router.get('/', function (req, res) {
	res.render('/index.html');
});

router.get('/camps', function (req, res) {
  Camp.find({}).exec(function (err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error retrieving data');
      res.json({ Error: 'failed to retrieve data' });
    }
  });
});

app.use('/', router);

//run the server========================
var server = app.listen(port, function(){
	console.log('server has started running at localhost:' + port);
});
