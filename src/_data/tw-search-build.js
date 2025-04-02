// this code builds the index.json from the tweets' data files. 
const lunr = require("lunr");
const tw = require("tweets.json");
const twid = require("twids.json");
const user = require("users.json");

module.exports = () => {

    // converts `tweets.json` into a search-friendly format
    const tweetData = Object.values(tweets).map(twid => ({
        id: `twid-${tweets[twid].id}`,
        likes: `${ tweets[twid].favorite_count }`,
        user: `${ users[tweets[twid].user_id].screen_name }`
    }));

    // create a lunr search index
    const lunrIndex = lunr(function () {
        this.ref("id");
        this.field("likes");
        this.field("user");

    tweetData.forEach(doc => this.add(doc));
  });

  return {
    permalink: "tw-search.json", // Forces output as `tw-search.json`
    eleventyExcludeFromCollections: true, // Avoid adding to collections
    documents: tweetData,   // Stores raw tweet data
    index: lunrIndex.toJSON() // Stores pre-built Lunr.js index
  };
};