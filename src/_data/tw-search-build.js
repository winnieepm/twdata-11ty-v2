// this file builds the index.json from the tweets' data files. 

const lunr = require("lunr");
const tweetCont = require("./tweets.json");
const twid = require("./twids.json");
const user = require("./users.json");

// the following code works as expected when running `node script-name.js`. it creates an array in json format with the selected data from _data/
const tweetData = Object.values(tweetCont).map(values => ({
    id:`${values.id}`,
    likes: `${values.favorite_count}`,
    text: `${values.text}`
}));

// still am not sure if this is working or where to "see" the search results.
const lunrIndex = lunr(function () {
    this.ref('id');
    this.field('likes');
    this.field('text');

    tweetData.forEach(function (doc) {
      this.add(doc)
    }, this)});

// console.log(tweetData) dev testing line 

// the line below doesn't show search results. is this normal? where do i see them, then?
// console.log(lunrIndex.search("the"));