// this file builds the index.json from the tweets' data files. 
const lunr = require("lunr");
const tweetCont = require("./tweets.json");

// creates the data array with filtered fields from tweets.json
const tweetData = Object.values(tweetCont).map(values => ({
    id:`${values.id}`,
    likes: `${values.favorite_count}`,
    text: `${values.text}`
}));

// pre-builds lunr search index. you can search with it. remember it removes stop words.
const lunrIndex = lunr(function () {
    this.ref('id');
    this.field('likes');
    this.field('text');

    tweetData.forEach(function (doc) {
      this.add(doc)
    }, this)});

// // stores search results for display
//   results = lunrIndex.search("rally") // search
//     for (let i = 0; i < results.length; i++) { // loop through results
//       // console.log(results[i]['ref']);
//       console.log(tweetCont[results[i]['ref']]); //log each tweet
//     };

  // testing code for UI
  // Simplified search function
  function runSearch() {
    const term = document.getElementById("search-box").value; // Get search term
    const resultsDiv = document.getElementById("results");   // Get results div

    // 1. Perform search (using your existing code)
    const results = lunrIndex.search(term); 

    // 2. Clear previous results
    resultsDiv.innerHTML = ""; 

    // 3. Display new results (modified from your loop)
    for (let i = 0; i < results.length; i++) {
      const tweet = tweetCont[results[i]['ref']];
      resultsDiv.innerHTML += `<p>${tweet}</p>`; // Append each result
    }

    // If no results
    if (results.length === 0) {
      resultsDiv.innerHTML = "<p>No matches found.</p>";
    }
  }