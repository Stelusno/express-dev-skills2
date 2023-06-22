var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

//GET routes 
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new); 
router.post('/', skillsCtrl.create);
router.get('/:id', skillsCtrl.show); 
router.delete('/:id', skillsCtrl.delete);


//Action routes




module.exports = router;
