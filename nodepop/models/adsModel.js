const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/adsDatabase");
var adSchema = mongoose.Schema({
  name: String,
  sell: Boolean,
  price: Number,
  photo: String,
  tags: [String],
});

class ad {
  constructor(name, sell, price, photo, tags) {
    this.name = name;
    this.sell = sell;
    this.price = price;
    this.photo = photo;
    this.tags = tags;
  }

  async getAllAds() {
    const getAds = mongoose.model("Ad", adSchema);

    let listOfAds =[];

    for await(let item of getAds.find())
        listOfAds.push(new ad(item.name, item.sell, item.price, item.photo, item.tags));

    return listOfAds;
  }

  async createAd() {
    try {

      const createdAd = mongoose.model("Ad", adSchema);

      const newAd = new createdAd({
        name: this.name,
        sell: this.sell,
        price: this.price,
        photo: this.photo,
        tags: this.tags,
      });
      await newAd.save();
      console.log("ad saved");
      return { message: "ad saved", dataSave: this };
    } catch (err) {
      return { message: "error!", details: err };
    }
  }

  async filterAds (filter) {
    //const query = ads.find({});
    //query.sort = filter.name;
    const getAds = mongoose.model("Ad", adSchema);

    let listOfAds =[];

    for await(let item of getAds.find(filter))
      listOfAds.push(new ad(item.name, item.sell, item.price, item.photo, item.tags));
    return listOfAds;
  }

  //Cosas nuevas sin probar:
  //Lista de tags:
  async getAllTags() {
    const getAds = mongoose.model("Ad", adSchema);

    let listOfTags =[];

    for await(let item of getAds.find()){
      for (let index in item.tags) {
        if (listOfTags.includes(item.tags[index]) === false){
          listOfTags.push(item.tags[index]);
        }
      }
    }
    return listOfTags;
  }




}

module.exports = ad;
