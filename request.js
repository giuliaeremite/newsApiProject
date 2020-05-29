//GET NEWS FROM API

async function getNewsBySource(source) {
  const response = await fetch(
    `https://newsapi.org/v1/articles?source=${source}&apiKey=47772cab2ee2427698f4d7ba1d3edeb2`
  );
  console.log(response);
  return await response.json();
}

/* async function getNewsByCategory(category){
  const response = await fetch(
    `https://newsapi.org/v1/sources?category=${category}&apiKey=47772cab2ee2427698f4d7ba1d3edeb2`
  );
  console.log(response);
  return await response.json();
} */

//http://newsapi.org/v2/everything?q=Politics&from=2020-05-27&language=en&sortBy=popularity&apiKey=47772cab2ee2427698f4d7ba1d3edeb2

//https://newsapi.org/v1/sources?category=business&apiKey=47772cab2ee2427698f4d7ba1d3edeb2