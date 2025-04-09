// this file builds the index.json from the tweets' data files. 

const lunr = require("lunr");
const tweetCont = require("./tweets.json");
const twid = require("./twids.json");
const user = require("./users.json");

// the following code works as expected when running `node script-name.js`
const tweetData = Object.values(tweetCont).map(values => ({
    id:`${values.id}`,
    likes: `${values.favorite_count}`,
    text: `${values.text}`
}));

const lunrIndex = lunr(function () {
    this.ref('id');
    this.field('likes');
    this.field('text');

    tweetData.forEach(function (doc) {
      this.add(doc)
    }, this)});

  // console.log(tweetData)
console.log(lunrIndex.search("the"));