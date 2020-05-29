// SHOW NEWS

function showNews(source) {
  getNewsBySource(source).then((data) => {

    console.log(data)
    // show articles preview list
    showResultsList(data);
    // display first article
    displayedArticle(data, 0);
    // click on preview to display article
    changeDisplayedArt(data);
  });
}

//LOOPS THROUGH ARTICLES AND SHOWS RESULTS LIST

function showResultsList(data) {
  for (let i = 0; i < 6; i++) {
    results.innerHTML += `
      <div id="preview${[i]}" class="preview">
      <img class="img-preview" src="${
        data.articles[i].urlToImage
      }" alt="img-preview">
      <h5 class="article-title">${data.articles[i].title}</h5>
      <p class="article-source">Article source: ${data.source}</p>
    </div>`;
  }
}

// DISPLAY MAIN ARTICLE

function displayedArticle(data, index) {
  displayedSection.innerHTML = `
  <div class="displayedArticle">
   <figure><img class="displayedArticleImg" src="${data.articles[index].urlToImage}" alt="article-img"></figure>
   <div class="displayedArticleTextContainer">
    <h4 class="displayedArticleTitle">${data.articles[index].title}</h4>
    <p class="displayedArticleText" id="displayedArticleText">${data.articles[index].description}...</p>
    <button class="goToNewsSourceWebsite" id="goToNewsSourceWebsite"><a href="${data.articles[index].url}">Read full article</a></button>
  </div>
</div>`;
}

///////// CHANGE MAIN ARTICLE TO DISPLAY

function changeDisplayedArt(data) {
  let list = results.children;
  list = Array.from(list);
  list.forEach((el, index) => {
    el.addEventListener("click", function () {
      displayedArticle(data, index);
    });
  });
}

// CHANGE NEWS CATHEGORIES
/* 
function changeNewsSource(allCathegories, articlePreviewList) {
  let cathegory = allCathegories.children;
  cathegory = Array.from(cathegory);
  cathegory.forEach((el) => {
    el.addEventListener("click", () => {
      articlePreviewList.innerHTML = "";
      showNewsByCat(el.id);
    });
  });
}
 */