var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

//GET routes 
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show); 

//Action routes

module.exports = router;
