const ads = require('../models/adsModel');
var express = require('express');
var router = express.Router();


router.get('/tags',async function(req, res, next) {
  var ad = new ads();
  res.send(await ad.getAllTags())
});

router.post('/', async function(req, res, next) {
  var ad = new ads(req.body.name, req.body.sell, req.body.price, req.body.photo, req.body.tags);
  return res.send(await ad.createAd());
});

router.get('/', async function (req, res, next) {
  var ad = new ads();
  if(Object.keys(req.query).length === 0) {
    return res.send(await ad.getAllAds());
  }
    else {
    const tags = req.query.tags;
    const sell = req.query.sell;
    const price = req.query.price;
    const name = req.query.name;

    const limit = parseInt(req.query.limit);
    const sort = req.query.sort;
    const start = parseInt(req.query.start);

    const filter = {};

    if (tags) {
        filter.tags = { '$in': tags.split(';')};
    }

    if (sell) {
        filter.sell = sell;
    }

    if (price) {
      if (price.substring(0, 1) === '-')
      {
        let cutedPrice = '';
        cutedPrice = price.substring(1);
          filter.price = { '$lt': cutedPrice }; 
      }
      else if (price.substring(price.length-1, price.length) === '-') { 
        let cutedPrice = '';
        cutedPrice = price.substring(0,price.length-1);
        filter.price = { '$gt': cutedPrice};
      }
      else if (price.includes('-')) 
      {
          let startPrice = price.substring(0, price.indexOf('-'));
          let endPrice = price.substring(price.indexOf('-') + 1, price.length);
          filter.price = { '$gt': startPrice, '$lt': endPrice };
      }
      else { 
        filter.price = price;
      } 
    
    }
    if (name) { 
      filter.name = new RegExp('^' + name, 'i');
    }
    
    return res.send(await ad.filterAds(filter));
  }
  
});

  
module.exports = router;