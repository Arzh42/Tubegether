var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/video',function(req,res,next) {
	titreVideo = "Titre";
	typeVideo = "Youtube";
	codeVideo = ""
	res.render('/pagevideo',{title:titreVideo,typeVideo:typeVideo,codeVideo:codeVideo});
});
module.exports = router;
