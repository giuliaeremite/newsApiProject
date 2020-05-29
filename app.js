const selectNewsSource = document.getElementById("selectNewsSource");
const searchBtn = document.getElementById("search-btn");
const mainContent = document.getElementById("content");

const results = document.getElementById("search-results");
const displayedSection = document.getElementById("displayed-article");

const cathegories = document.getElementById("cathegories");

const politics = document.getElementById("politics");
const technology = document.getElementById("technology");
const science = document.getElementById("science");
const sport = document.getElementById("sport");
const entertainment = document.getElementById("entertainment");
const music = document.getElementById("music");

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
today = `${year}-${month}-${day}`;

(function init() {
  //show cnn articles on load
  showNews("cnn");

  //select news source and display articles
  searchBtn.addEventListener("click", function(){
    results.innerText = "";
    showNews(selectNewsSource.value)
  })

  /* //change news cathegories on click
  changeNewsSource(cathegories, results); */
})();

