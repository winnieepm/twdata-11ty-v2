const lunr = require("lunr");

idxFile = './_data/index.json';
corpusFile = './_data/tweets.json';

async function getData() {
  try {
    const response = await fetch(idxFile);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getData()

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
      const tweet = tweets[results[i]['ref']];
      resultsDiv.innerHTML += `<p>${tweet}</p>`; // Append each result
    }

    // If no results
    if (results.length === 0) {
      resultsDiv.innerHTML = "<p>No matches found.</p>";
    }
  }