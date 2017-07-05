var express = require('express');
var models  = require('../models');
var router = express.Router();
var planetController = require('../controllers/planet-controller')(models.planet);

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('API Request Timestamp: ', Date.now());
  next();
});

router.get('/planets', planetController.getAll);
router.get('/planets/:planetId', planetController.getById);

module.exports = router;