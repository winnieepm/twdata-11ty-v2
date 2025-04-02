// this will be the logic for the lunr search function
async function search(query) {
    const response = await fetch("/search.json");
    const data = await response.json();
  
    const lunrIndex = lunr.Index.load(data.index);
    const results = lunrIndex.search(query);
  
    return results.map(result => {
      return data.documents.find(doc => doc.id === result.ref);
    });
  }
  
// Example Usage:
//   document.querySelector("#searchInput").addEventListener("input", async (e) => {
//     const results = await search(e.target.value);
//     console.log(results);
//   });
  