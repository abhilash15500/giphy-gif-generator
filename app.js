const img = document.querySelector(".gif-image");
const searchIcon = document.querySelector("#search-icon");
let searchInput = document.querySelector("#search-input");

function useFetchApi(url) {
  fetch(url, { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);

      if (response.data && Object.keys(response.data).length !== 0) {
        img.src = response.data.images.original.url;
      } else {
        img.src = "./images/cat-gif.gif";
      }
    })
    .catch((err) => {
      img.src = "./images/cat-gif.gif";
    });
}

// initialize the app
useFetchApi(
  "https://api.giphy.com/v1/gifs/random?api_key=MUzjBZUJN1WQ7PnlpYY6uH4OLET8rAJL&tag=cats"
);

//search icon event listener//
searchIcon.addEventListener("click", () => {
  let baseUrl =
    "https://api.giphy.com/v1/gifs/random?api_key=MUzjBZUJN1WQ7PnlpYY6uH4OLET8rAJL&tag=";
  let tagQuery = searchInput.value.trim();
  let url = baseUrl + tagQuery;
  useFetchApi(url);

  //clear the urls
  baseUrl = "";
  tagQuery = "";
  url = "";
});

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let baseUrl =
      "https://api.giphy.com/v1/gifs/random?api_key=MUzjBZUJN1WQ7PnlpYY6uH4OLET8rAJL&tag=";
    let tagQuery = searchInput.value.trim();
    let url = baseUrl + tagQuery;
    useFetchApi(url);

    //clear the urls
    baseUrl = "";
    tagQuery = "";
    url = "";
  }
});
