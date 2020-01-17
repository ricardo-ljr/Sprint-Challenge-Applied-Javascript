// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const articles = response.data.articles;
    const cards = document.querySelector(".cards-container");
    console.log(articles);

    articles.javascript.forEach(card => {
      cards.append(
        newArticles(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.bootstrap.forEach(card => {
      cards.append(
        newArticles(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.jquery.forEach(card => {
      cards.append(
        newArticles(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.node.forEach(card => {
      cards.append(
        newArticles(card.headline, card.authorPhoto, card.authorName)
      );
    });

    articles.technology.forEach(card => {
      cards.append(
        newArticles(card.headline, card.authorPhoto, card.authorName)
      );
    });
  })
  .catch(error => {
    console.log(error);
  });

function newArticles(articleHeadline, authorImg, nameOfAuthor) {
  const newCard = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImage = document.createElement("img");
  const span = document.createElement("span");

  newCard.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = articleHeadline;
  author.textContent = nameOfAuthor;
  authorImage.setAttribute("src", authorImg);

  newCard.append(headline);
  newCard.append(author);
  author.append(imgContainer);
  author.append(span);
  imgContainer.append(authorImage);

  return newCard;
}
