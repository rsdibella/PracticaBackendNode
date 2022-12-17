const ads = require('../models/adsModel');
var express = require('express');
var router = express.Router();

/* GET ads listing. */
router.get('/',async function(req, res, next) {
  var ad = new ads();
  res.send(await ad.getAllAds());
});

router.post('/', async function(req, res, next) {
    var ad = new ads(req.body.name, req.body.sell, req.body.price, req.body.photo, req.body.tags);
    return res.send(await ad.createAd());
  });

  router.post('/', async function(req, res, next) {
    var ad = new ads(req.body.name, req.body.sell, req.body.price, req.body.photo, req.body.tags);
    return res.send(await ad.createAd());
  });
  
module.exports = router;
