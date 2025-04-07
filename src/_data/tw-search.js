// this will be the logic for the lunr search function
async function search(query) {
  const response = await fetch("/search.json");
  const data = await response.json();

  // Load Lunr.js index
  const lunrIndex = lunr.Index.load(data.index);
  const results = lunrIndex.search(query);

  return results.map(result => data.documents.find(doc => doc.id === result.ref));
}

// Handle input events
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const resultsContainer = document.getElementById("searchResults");

  searchBox.addEventListener("input", async () => {
    const query = searchBox.value.trim();

    if (query.length > 1) {
      const results = await search(query);

      // Clear previous results
      resultsContainer.innerHTML = "";

      // Display search results
      results.forEach(tweet => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${tweet.user}</strong>: ${tweet.likes} likes - ${tweet.text}`;
        resultsContainer.appendChild(li);
      });
    } else {
      resultsContainer.innerHTML = ""; // Clear results when input is empty
    }
  });
});




// i don't remember where i got this from, but i did. didn't test it. 
// async function search(query) {
//     const response = await fetch("/search.json");
//     const data = await response.json();
  
//     const lunrIndex = lunr.Index.load(data.index);
//     const results = lunrIndex.search(query);
  
//     return results.map(result => {
//       return data.documents.find(doc => doc.id === result.ref);
//     });
//   }
  
// Example Usage:
//   document.querySelector("#searchInput").addEventListener("input", async (e) => {
//     const results = await search(e.target.value);
//     console.log(results);
//   });
  