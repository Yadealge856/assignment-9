// Replace with your actual API key
const API_KEY = "xGza6voRlczKIwiFIE6I9WooBSSFtJTT";

// Grab HTML elements
const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

// Function to fetch GIFs from Giphy API
async function fetchGifs(query = "funny cats") {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=6`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    // Extract all image URLs
    const images = data.data.map(gif => gif.images.original.url);

    console.log("GIF URLs:", images);

    // Clear previous GIFs
    gifContainer.innerHTML = "";

    // Display new GIFs
    images.forEach(url => {
      gifContainer.innerHTML += `
        <div class="col-4 mb-3">
          <img src="${url}" class="img-fluid rounded shadow">
        </div>`;
    });
  } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
}

// When user clicks button
fetchBtn.addEventListener("click", async () => {
  const searchTerm = searchInput.value.trim() || "funny cats";
  await fetchGifs(searchTerm);
});
